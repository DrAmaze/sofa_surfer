class Api::BookingsController < ApplicationController
  def create
    @booking = current_user.bookings.new(booking_params)
    if @booking.save
      render json: @booking
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = current_user.bookings.find(params[:id])
    @booking.destroy
    render json: @booking
  end

  def update
    @booking = Booking.find(params[:id])
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def show
    render json: Booking.find(params[:id])
  end

  def index
    # @bookings = Booking.all.where(host_id: current_user.id)
    @bookings = Booking.all.where(traveler_id: current_user.id)
    render :index
  end

  private
  def booking_params
    params.require(:booking).permit(
      :traveler_id,
      :host_id,
      :location_id,
      :arrival,
      :departure,
      :descriptions
    )
  end
end
