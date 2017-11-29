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
  validates :neighborhood, :img_url, presence: true
  validates :neighborhood, uniqueness: true

  has_many :bookings,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Booking

  has_many :hosts,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :User

  def self.top_five_results(query_param)
    param = '%' + query_param.downcase ='%'
    Spot.where('lower(neighborhood) LIKE ?', param).limit(5)
  end

end
