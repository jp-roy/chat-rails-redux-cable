class Api::V1::MessagesController < Api::V1::BaseController
  before_action :set_channel

  def index
    @messages = Message.includes(:user).where(channel: @channel).order(created_at: :asc)
  end

  def create
    @message = Message.create(content: message_params[:content], channel: @channel, user: current_user)
  end

  private

  def set_channel
    @channel = Channel.find_by_name(params[:channel_id])
  end

  def message_params
    params.require(:message).permit(:content)
  end
end
