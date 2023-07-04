# db/seeds.rb

# Create channels
Channel.create(channel_name: "General")
Channel.create(channel_name: "Announcements")
Channel.create(channel_name: "Random")

# Create users
User.create(username: "JohnDoe", email: "johndoe@example.com", admin_priviledge: true, password: "password")
User.create(username: "JaneSmith", email: "janesmith@example.com", admin_priviledge: false, password: "password")

# Create profiles
Profile.create(user_id: 1, email: "johndoe@example.com", image: "john.jpg")
Profile.create(user_id: 2, email: "janesmith@example.com", image: "jane.jpg")

# Create discussions
Discussion.create(discussion_title: "Discussion 1", content: "Lorem ipsum dolor sit amet.", user_id: 1, channel_id: 1, likes: 0)
Discussion.create(discussion_title: "Discussion 2", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", user_id: 2, channel_id: 2, likes: 0)
Discussion.create(discussion_title: "Discussion 3", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquid.", user_id: 1, channel_id: 3, likes: 0)