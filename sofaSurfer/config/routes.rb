Rails.application.routes.draw do

  namespace :api do
    get 'spot_searches/index'
  end


  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:index, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :locations, only: [:create, :show, :index]
    resources :bookings, only: [:create, :show, :index, :destroy, :update]
    post "search", to: 'search#index'
  end

  root "static_pages#root"
end
