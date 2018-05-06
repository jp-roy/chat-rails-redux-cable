Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  devise_for :users, :controllers => { registrations: 'registrations' }
  root to: 'channels#show'


  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :channels, only: [ :create ] do
        resources :messages, only: [ :index, :create ]
      end
    end
  end

  resources :channels, only: [ :show ]
end
