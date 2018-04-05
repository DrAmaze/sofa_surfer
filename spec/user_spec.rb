require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'password encryption' do

    # it 'does not save passwords to the database' do
    #
    #   spot1 = Location.find_by_neighborhood('presidio')
    #
    #   User.create!({
    #       username: 'anastassia',
    #       password: 'nunyabusiness',
    #       location: Location.find_by_neighborhood('presidio'),
    #       email: 'ana@taser.com'
    #   })
    #   user = User.find_by_username('anastassia')
    #   expect(user.password).not_to be('nunyabusiness')
    # end

    # Add more tests here!

  end
end

# RSpec.describe User, :type => :model do
#
#   before(:all) do
#     @user1 = create(:user)
#   end
#
#   it "is valid with valid attributes" do
#     expect(@user1).to be_valid
#   end
#
#   it "has a unique username" do
#     user2 = build(:user, email: "test@ing.com")
#     expect(user2).to_not be_valid
#   end
#
#   it "has a unique email" do
#     user2 = build(:user, username: "Test")
#     expect(user2).to_not be_valid
#   end
#
#   it "is not valid without a password" do
#     user2 = build(:user, password: nil)
#     expect(user2).to_not be_valid
#   end
#
#   it "is not valid without a username" do
#     user2 = build(:user, username: nil)
#     expect(user2).to_not be_valid
#   end
#
#   it "is not valid without an email" do
#     user2 = build(:user, email: nil)
#     expect(user2).to_not be_valid
#   end
# end
