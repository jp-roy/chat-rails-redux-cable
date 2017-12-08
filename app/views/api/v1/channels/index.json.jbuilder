json.array! @channels do |channel|
  json.extract! channel, :id, :name
end
