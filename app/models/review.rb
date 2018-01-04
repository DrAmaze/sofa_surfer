# == Schema Information
#
# Table name: reviews
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  author_id      :integer          not null
#  recommendation :boolean          not null
#  rating         :integer
#  body           :text
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Review < ApplicationRecord
  validates :user_id, :author_id, :recommendation, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
