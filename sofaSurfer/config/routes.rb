Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :locations, only: [:create, :show, :index]
    resources :bookings, only: [:create, :show, :index, :destroy, :update]
  end

  root "static_pages#root"
end
