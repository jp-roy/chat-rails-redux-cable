json.extract! @message, :id
json.author @message.user.username
json.extract! @message, :content, :created_at
