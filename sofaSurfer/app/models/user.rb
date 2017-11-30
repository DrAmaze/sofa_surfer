# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  phone           :string
#  age             :integer
#  hosting         :boolean
#  location_id     :string
#  about_me        :text
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, presence: true
  validates :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token

  attr_reader :password

  belongs_to :location,
    primary_key: :id,
    foreign_key: :location_id,
    class_name: :Location

  has_many :bookings,
    primary_key: :id,
    foreign_key: :traveler_id,
    class_name: :Booking

  has_many :hostings,
    through: :location,
    source: :bookings

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(pw)
    user
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token
    generate_unique_session_token
    save!
    self.session_token
  end

  def self.top_five_results(term)
    User
      .where("users.username ILIKE :term OR users.email ILIKE :term OR users.street ILIKE :term", term: "%#{term}%").limit(5)
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
    self.session_token
  end
end
