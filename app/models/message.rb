class Message < ApplicationRecord
  belongs_to :channel
  belongs_to :user

  after_create :broadcast_message

  def broadcast_message
    ActionCable.server.broadcast("channel_#{self.channel.name}",
      id: self.id,
      author: self.user.username,
      content: self.content,
      created_at: self.created_at
    )
  end
end
