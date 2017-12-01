Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:index, :show] do
      resources :reviews, only: [:create, :destroy, :index, :update]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :locations, only: [:create, :show, :index]
    resources :bookings, only: [:create, :show, :index, :destroy, :update]
    post "/users/search", to: 'users#search'
    post "locations/search", to: 'locations#search'
  end

  root "static_pages#root"
end
