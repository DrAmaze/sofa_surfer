class Api::LocationsController < ApplicationController
  def create
    @location = Location.new(location_params)
    if @location.save
      render :show
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  def destroy
    @location = Location.find(params[:id])
    @location.destroy
    render :show
  end

  def show
    render json: Location.find(params[:id])
  end

  def index
    render json: Location.all
  end

  private

  def location_params
    params.require(:location).permit(:neighborhood, :img_url)
  end
end
