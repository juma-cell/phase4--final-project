# Rails.application.routes.draw do
#   resources :profiles
#   resources :users
#   resources :discussions do
#     resources :replies 
#   end
#   resources :channels
  
#     post '/api/users', to: 'users#create'

#     post "/api/login", to:"session#login"
   
#     get '/api/current', to: 'users#current_user'

#     delete "/api/signout", to:"session#signout"
# end
Rails.application.routes.draw do
  post "/api/login", to:"session#login"
  delete "/api/logout", to:"session#logout"

  get "/api/current_user", to:"users#loggedin_user"

  scope "api" do
    resources :users
    resources :posts, only: [:index, :show,:create,:update,:destroy]
  end

  get "/api/approvedposts", to:"posts#approvedposts"
  patch "/api/posts/archive/:id", to:"posts#archive"
  patch "/api/posts/approve/:id", to:"posts#approve"


  # get "/post", to:"posts#index"
  # get "/post/:id", to:"post#show"
  # post "/post", to:"post#create"
  # delete "/post/:id", to:"post#destroy"
  # patch "/post/:id", to:"post#update"


end