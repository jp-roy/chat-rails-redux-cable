class Api::V1::MessagesController < Api::V1::BaseController
  before_action :set_channel

  def index
    @messages = Message.joins(:user).where(channel: @channel)
  end

  def create
  end

  private

  def set_channel
    @channel = Channel.find_by_name(params[:channel_id])
  end
end
