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
    @location = Location.find(params[:id])
  end

  def index
    @locations = Location.all
  end

  private

  def locaitons_params
    params.require(:location).permit(:street, :neighborhood, :img_url)
  end
end
