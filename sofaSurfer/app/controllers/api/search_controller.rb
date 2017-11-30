class Api::SearchController < ApplicationController
  def top_five_results
    @locations = Location.search(search_params[:term])
    @users = User.search(search_params[:term])
    render "api/locations/index"
  end

  private

  def search_params
    params.require(:search).permit(:term)
  end
end
