class Api::SpotSearchesController < ApplicationController
  def index
    @neighborhood = Location.top_five_results(search_params[:query])
    render :index
  end

  def search_params
    params.require(:search).permit(:query, :neighborhood)
  end
end
