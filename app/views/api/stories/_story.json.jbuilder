json.extract! story, :id, :title, :body, :author_id
# json.likes story.likes
json.set! :author do
  json.set! :email, story.author.email
  json.set! :id, story.author.id
  json.set! :created_at, story.created_at
  # json.set! :follows, story.author.in_follows
end
