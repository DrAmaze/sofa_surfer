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
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render json: User.all
  end

  def search
    @users = User.search(params[:term]).order(:username)
    render json: @users
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
