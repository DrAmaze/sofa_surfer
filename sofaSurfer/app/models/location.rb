# == Schema Information
#
# Table name: locations
#
#  id           :integer          not null, primary key
#  street       :string           not null
#  neighborhood :string           not null
#  img_url      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Location < ApplicationRecord
  validates :street, :neighborhood, :img_url, presence: true
  validates :neighborhood, uniqueness: true

  has_many :users
end
