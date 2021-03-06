Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:index, :show, :update] do
      resources :reviews, only: [:create, :destroy, :index, :update]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :locations, only: [:create, :show, :index]
    resources :bookings, only: [:create, :show, :index, :destroy, :update]
    post "/users/search", to: 'users#search'
    post "locations/search", to: 'locations#search'
  end

  get '*path', to: 'static_pages#root'
  root "static_pages#root"
end
