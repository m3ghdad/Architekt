# == Schema Information
#
# Table name: stories
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Story < ApplicationRecord
  validates :body, :title, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

end
