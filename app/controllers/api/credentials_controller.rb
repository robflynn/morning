class Api::CredentialsController < ActionController::API
  before_action :authenticate_user!  
  before_action :set_project
  before_action :set_credential, only: [:show, :edit, :update, :destroy]

  respond_to :json   

  def index
    @credentials = @project.credentials
  end

  def create
    @credential = @project.credentials.build(credential_params)
    @credential.user = current_user

    if @credential.save!
      ActionCable.server.broadcast "ProjectsChannel", {
        type: "CREDENTIAL_CREATED",
        credential: @credential
      }
    end
  end

  private

  def set_project
    @project = Project.find params[:project_id]
  end

  def set_credential
    @credential = project.find(params[:id])
  end

  def credential_params
    params.require(:credential).permit(:key, :value)
  end
end
