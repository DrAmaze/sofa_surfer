require 'rails_helper'

RSpec.describe Booking, type: :model do
  describe 'model' do
    it 'is valid with minimal attributes' do
      arr = DateTime.new(2018,5,3,4,5,6)
      dep = DateTime.new(2018,5,12,4,5,6)

      Booking.create!({
        traveler_id: 5,
        host_id: 1,
        location_id: 1,
        arrival: arr,
        departure: dep,
        host: User.find(3)
      })

      booking = Booking.find_by_departure(dep)
      expect(booking).to be_valid
    end

    it 'is valid with all attributes' do
      Booking.create!({
        traveler_id: 5,
        host_id: 1,
        location_id: 1,
        arrival: DateTime.new(2018,5,3,4,5,6),
        departure: DateTime.new(2018,5,12,4,5,6),
        description: 'This will be quite an adventure',
        host: User.find(3)
      })
      booking = Booking.find_by_description('This will be quite an adventure')
      expect(booking).to be_valid
    end

    it 'is invalid without arrival date' do
      booking = Booking.create({
        traveler_id: 5,
        host_id: 1,
        location_id: 1,
        departure: DateTime.new(2018,5,12,4,5,6),
        description: 'This will be a test adventure',
        host: User.find(3)
      })
      expect(booking).to_not be_valid
    end

    it 'is invalid without departure date' do
      booking = Booking.create({
        traveler_id: 5,
        host_id: 1,
        location_id: 1,
        arrival: DateTime.new(2018,5,3,4,5,6),
        description: 'This will be a test adventure',
        host: User.find(3)
      })
      expect(booking).to_not be_valid
    end

    it 'is invalid without location ID' do
      booking = Booking.create({
        traveler_id: 5,
        host_id: 1,
        arrival: DateTime.new(2018,5,3,4,5,6),
        departure: DateTime.new(2018,5,12,4,5,6),
        description: 'This will be a test adventure',
        host: User.find(3)
      })
      expect(booking).to_not be_valid
    end
  end

  describe 'associations' do

    it 'belongs to users' do
      t = User.reflect_on_association(:bookings)
      expect(t.macro).to eq(:has_many)
    end

    it 'belongs to location' do
      t = Location.reflect_on_association(:bookings)
      expect(t.macro).to eq(:has_many)
    end
  end
end
