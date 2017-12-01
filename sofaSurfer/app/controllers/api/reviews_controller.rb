class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.list_id = params[:list_id]
    if @review.save
      render :index
    else
      flash[:errors] = @review.errors.full_messages
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    render json: Review.all.where(user_id: current_user.id)
  end

  def destroy
    review = current_user.reviews.find(params[:id])
    review.destroy
    render json: review
  end

  private
  def review_params
    params.require(:review).permit(
      :user_id,
      :author_id,
      :recommendation,
      :rating,
      :body
    )
  end
end
