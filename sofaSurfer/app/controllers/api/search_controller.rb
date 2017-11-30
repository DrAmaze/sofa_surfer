class Api::SearchController < ApplicationController
  def top_five_results
    @locations = Location.top_five_location_results(search_params[:term])
    @users = User.top_five_user_results(search_params[:term])
    render "api/locations/index"
  end

  private

  def search_params
    params.require(:top_five_results).permit(:term)
  end
end
