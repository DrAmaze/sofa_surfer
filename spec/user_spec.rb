require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password encryption' do

    it 'does not save passwords to the database' do
      User.create!({
          username: 'anastassia',
          password: 'nunyabusiness',
          location: Location.find(1),
          email: 'ana@taser.com'
        })
      user = User.find_by_username('anastassia')
      expect(user.password).not_to be('nunyabusiness')
    end
  end

  describe 'Create a user' do

    it "is valid with minimal attributes" do
      User.create!({
          username: 'AlexHonnold',
          password: 'password',
          location: Location.find(1),
          email: 'alex@honnold.climbing'
      })
      user = User.find_by_username('Alex Honnold')
      expect(user).to be_valid
    end

    it "is valid with all attributes" do
      User.create!({
          username: 'AlexHonnold',
          password: 'password',
          location: Location.find(1),
          email: 'alex@honnold.climbing',
          phone: '240-673-5634',
          age: 31,
          hosting: false,
          about_me: 'I love to rock climb',
          street: 'Yosemite Ave',
          img_url: 'https://www.nationalgeographic.com/content/dam/adventure/photos/2017/stories/alex-honnold/alex-honnold-summit/alex-honnold-free-solo-summit-el-capitan.ngsversion.1496520016051.adapt.1900.1.jpg'
      })
      user = User.find_by_username('Alex Honnold')
      expect(user).to be_valid
    end

    it "does not create a user with a taken username" do
      user1 = User.create({
          username: 'Sample User',
          password: 'password',
          location: Location.find(1),
          email: 'fake@one.com'
      })
      user2 = User.find_by_username('Sample User')
      expect(user2.email).to_not equal(user1)
    end

    it "is not valid without a password" do
      user1 = User.create({
          username: 'Paul Bunyun',
          password: '',
          location: Location.find(1),
          email: 'paul@gmail.com'
      })
      expect(user1).to_not be_valid
    end

    it "is not valid without a username" do
      user1 = User.create({
          username: '',
          password: 'password',
          location: Location.find(1),
          email: 'paul@gmail.com'
      })
      expect(user1).to_not be_valid
    end

    it "is not valid without an email" do
      user1 = User.create({
          username: 'Benedict Stevenson III',
          password: 'password',
          location: Location.find(1),
          email: ''
      })
      expect(user1).to_not be_valid
    end
  end

  describe "associations" do
    it 'belongs to locations' do
      t = Location.reflect_on_association(:hosts)
      expect(t.macro).to eq(:has_many)
    end

    it 'has many bookings' do
      t = User.reflect_on_association(:bookings)
      expect(t.macro).to eq(:has_many)
    end

    it 'has many hostings' do
      t = User.reflect_on_association(:hostings)
      expect(t.macro).to eq(:has_many)
    end
  end

end
