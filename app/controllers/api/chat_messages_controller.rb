class Api::ChatMessagesController < ActionController::API
    respond_to :json

  # GET /chat_messages
  # GET /chat_messages.json
    def index
      project = Project.find params[:project_id]
      
      @chat_messages = project.chat_messages
    end

    def create
        # hack it together for now
        ActionCable.server.broadcast "ChatMessagesChannel", {
            type: "MESSAGE_CREATED",
            text: params[:message]
        }

        head :created
    end
end
