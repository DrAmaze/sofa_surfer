require 'rails_helper'

RSpec.describe Booking, type: :model do
  describe 'model' do
    it 'is valid with minimal attributes' do
      Booking.create!({
          traveler_id: 5,
          host_id: 1,
          location_id: 1,
          arrival: DateTime.new(2018,5,3,4,5,6),
          departure: DateTime.new(2018,5,12,4,5,6)
        })
        booking = Booking.find_by_host_id(1)
        expect(booking).to be_valid
    end

    it 'is valid with all attributes' do
      Booking.create!({
          traveler_id: 5,
          host_id: 1,
          location_id: 1,
          arrival: DateTime.new(2018,5,3,4,5,6),
          departure: DateTime.new(2018,5,12,4,5,6),
          description: 'This will be quite an adventure'
        })
        booking = Booking.find_by_description('This will be quite an adventure')
        expect(booking).to be_valid
    end

    it 'is invalid without arrival date' do

    end

    it 'is invalid without departure date' do

    end

    it 'is invalid without host ID' do

    end

    it 'is invalid without location ID' do

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
