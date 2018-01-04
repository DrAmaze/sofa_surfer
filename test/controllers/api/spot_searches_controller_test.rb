require 'test_helper'

class Api::SpotSearchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_spot_searches_index_url
    assert_response :success
  end

end
