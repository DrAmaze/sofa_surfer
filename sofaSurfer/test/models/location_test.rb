# == Schema Information
#
# Table name: locations
#
#  id           :integer          not null, primary key
#  street       :string           not null
#  neighborhood :string           not null
#  img_url      :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
