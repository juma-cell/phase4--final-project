Rails.application.routes.draw do
  resources :profiles
  resources :users
  resources :discussions do
    resources :replies 
  end
  resources :channels
  
    post '/users', to: 'users#create'

    post "/login", to:"session#login"
   
    get '/current', to: 'users#current_user'

    delete "/logout", to:"session#logout"
end
