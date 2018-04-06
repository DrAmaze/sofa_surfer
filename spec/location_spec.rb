require 'rails_helper'

RSpec.describe Location, type: :model do
  describe 'model' do
    it 'creates spot' do
      spot = Location.create({
        neighborhood: 'Ocean Beach',
        img_url: 'https://snowbrains.com/wp-content/uploads/2015/11/Jimmicane-SF15-1620x1080.jpg'
      })
      expect(spot).to be_valid
    end

    it 'requires neighborhood' do
      spot1 = Location.create({
        neighborhood: '',
        img_url: 'https://snowbrains.com/wp-content/uploads/2015/11/Jimmicane-SF15-1620x1080.jpg'
      })
      expect(spot1).to_not be_valid
    end

    it 'requires image url' do
      spot1 = Location.create({
        neighborhood: 'The Ocean',
        img_url: ''
      })
      expect(spot1).to_not be_valid
    end
  end
end
