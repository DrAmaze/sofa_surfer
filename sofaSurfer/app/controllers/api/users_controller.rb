class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    render json: User.find(params[:id])
  end

  def index
    render json: User.all
  end

  def search
    @users = User.search(params[:term]).order(:name)
    render :index
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :email,
      :location_id,
      :phone,
      :age,
      :hosting,
      :location_id,
      :about_me,
      :street,
      :img_url
    )
  end
end
