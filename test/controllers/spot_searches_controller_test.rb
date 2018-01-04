require 'test_helper'

class SpotSearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get spot_searches_index_url
    assert_response :success
  end

end
