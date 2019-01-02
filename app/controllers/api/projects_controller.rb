class Api::ProjectsController < ActionController::API
  before_action :authenticate_user!  
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  respond_to :json 


  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = current_user.projects.build(project_params)
    @project.user = current_user

    if @project.save!
      # hack it together for now
      ActionCable.server.broadcast "ProjectsChannel", {
        type: "PROJECT_CREATED",
        project: @project.json
      }

      head :created

    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = current_user.projects.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def project_params
      params.require(:project).permit(:name)
    end
end
