class Api::V1::ChannelsController < Api::V1::BaseController
  def create
    @channel = Channel.create(channel_params)
  end

  def index
    @channels = Channel.all
  end

  private

  def channel_params
    params.require(:channel).permit(:name)
  end
end
