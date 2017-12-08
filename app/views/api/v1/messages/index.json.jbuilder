json.array! @messages do |message|
  json.extract! message, :id
  json.extract! message.user, :username
  json.extract! message, :content, :created_at
end
