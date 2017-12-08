class Api::V1::ChannelsController < Api::V1::BaseController
  def create
    @channel = Channel.create(channel_params)
  end

  private

  def channel_params
    params.require(:channel).permit(:name)
  end
end
