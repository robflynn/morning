class Api::ChatMessagesController < ActionController::API
  before_action :authenticate_user!  
  before_action :set_project
  before_action :set_chat_message, only: [:show, :edit, :update, :destroy]

  respond_to :json

  # GET /chat_messages
  # GET /chat_messages.json
  def index
    @chat_messages = @project.chat_messages
  end

  # POST /chat_messages
  # POST /chat_messages.json

  def create
    @chat_message = @project.chat_messages.build(chat_message_params)
    @chat_message.user = current_user

    if @chat_message.save!
      # hack it together for now
      ActionCable.server.broadcast "ChatMessagesChannel", {
        type: "MESSAGE_CREATED",
        message: @chat_message.json
      }

      head :created
    end
  end

  private

    def set_project
      @project = Project.find params[:project_id]
    end

    def set_chat_message
      @chat_message = project.includes(:user).find(params[:id])
    end

    def chat_message_params
      params.require(:chat_message).permit(:text)
    end
end
