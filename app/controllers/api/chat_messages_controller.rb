class Api::ChatMessagesController < ApplicationController
    respond_to :json

    def create
        # hack it together for now
        ActionCable.server.broadcast "ChatMessagesChannel", {
            type: "MESSAGE_CREATED",
            text: params[:message]
        }

        head :created
    end
end
