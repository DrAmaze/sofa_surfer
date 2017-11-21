class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    puts @user
      if @user.save
      login(@user)
      render "api/users/show"
    else
      p "ukdjtrszhetxjhc"
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end