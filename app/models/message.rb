class Message < ApplicationRecord
  belongs_to :channel
  belongs_to :user

  after_create :broadcast_message

  def broadcast_message
    ActionCable.server.broadcast(
      "channel_#{self.channel.name}",
      message: self.to_json,
      content: self.content,
      channel: self.channel,
      id: self.id
    )
  end
end





