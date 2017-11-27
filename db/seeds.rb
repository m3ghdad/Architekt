# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Story.destroy_all

user1 = User.create!(email: 'm@m.com', password: 'cleverPassword')
user2 = User.create!(email: 'j@j.com', password: 'secretPassword')

story1 = Story.create!(title: 'chocolate cupcake',
  body: 'Chocolate cake tootsie roll cupcake lemon drops cotton candy topping cotton candy icing.
  Gummies dessert soufflé gummies sesame snaps cake pie brownie icing.
  Cupcake toffee tart cheesecake chupa chups liquorice marshmallow jujubes.
  Sesame snaps chupa chups marzipan macaroon muffin ice cream lollipop.',
  author_id: user1.id)

story2 = Story.create!(title: 'souffle marzipan',
  body: 'I love soufflé marzipan ice cream toffee marshmallow.
  Biscuit sugar plum tiramisu tart cake candy.
  I love candy canes candy carrot cake bonbon pudding.
  Donut I love caramels dessert cotton candy ice cream fruitcake cotton candy sweet.',
  author_id: user2.id)
