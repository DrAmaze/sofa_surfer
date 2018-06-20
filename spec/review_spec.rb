require 'rails_helper'

RSpec.describe Review, type: :model do
  describe 'model' do
    it 'is valid with minimal attributes' do
     #  body = 'My time with cpellew4 was beautiful. Very hospitible'
     #  Review.create!({
     #    user_id: 5,
     #    author_id: 1,
     #    recommendation: true,
     #    rating: 4,
     #    body: body,
     #    user: User.find_by_email('rmorrowf@foxnews.com')
     #  })
     #
     # review = Review.find_by_body(body)
     # expect(review).to be_valid
    end

    it 'is valid with all attributes' do
      # body = 'My time with cpellew4 was beautiful. Very hospitible'
      # Review.create!({
      #   user_id: 5,
      #   author_id: 1,
      #   recommendation: true,
      #   rating: 4,
      #   body: body,
      #   user: User.find(5)
      #   })
      #
      #   review = Review.find_by_body(body)
      #   expect(review).to be_valid
    end

    it 'is valid without a body' do
    end
  end

  describe 'associations' do
    it 'belongs to users' do
      t = Review.reflect_on_association(:user)
      expect(t.macro).to eq(:belongs_to)
    end
  end
end
