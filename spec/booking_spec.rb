require 'rails_helper'

RSpec.describe Booking, type: :model do
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
