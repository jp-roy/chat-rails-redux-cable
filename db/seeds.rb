User.create(username: "Jeanfil", email: "jeanfil@gmail.com", password: "graz1984")
["general", "react", "paris"].each { |channel| Channel.create(name: channel) }
Message.create(user: User.first, channel: Channel.first, content: "First great message")
Message.create(user: User.first, channel: Channel.first, content: "2nd great message")
