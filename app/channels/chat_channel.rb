class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:channel_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  private

  def render(message)
    ApplicationController.new.helpers.c("message", message: message)
  end
end
