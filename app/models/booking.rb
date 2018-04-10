# == Schema Information
#
# Table name: bookings
#
#  id          :integer          not null, primary key
#  traveler_id :integer          not null
#  host_id     :integer          not null
#  location_id :integer          not null
#  arrival     :datetime         not null
#  departure   :datetime         not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Booking < ApplicationRecord
  validates :traveler_id, :host_id, :location_id, :arrival, :departure, presence: true

  belongs_to :host,
    primary_key: :id,
    foreign_key: :host_id,
    class_name: :User

  belongs_to :location,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Location
end
