Rails.application.routes.draw do
  resources :profiles
  get '/profile', to: 'profiles#current_profile'

  resources :users
  resources :discussions do
  resources :replies 
  end
  resources :channels

  
    post '/users', to: 'users#create'

    post "/login", to:"session#login"

   

    get '/current', to: 'session#current_user'

    delete "/logout", to:"session#logout"
end
