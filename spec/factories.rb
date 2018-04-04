FactoryBot.define do
  factory :user do
    username 'Test'
    email 'test@ing.com'
    password 'password'
  end
end

user1 = create(:user)
