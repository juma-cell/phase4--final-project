class SessionController < ApplicationController
  # skip_before_action :authorize, only: [:login]

  def login
    email = params[:email]
    password = params[:password]
    
    user = User.find_by(email: email)
  
    if user && user.authenticate(password)
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: "Wrong username/password" }, status: :unauthorized
    end
  end
  

# def login
#     email = params[:email]
#     password = params[:password]
    
#     user = User.find_by(email: email)

#     if user && user.authenticate(password)
#       session[:user_id] = user.id
#       render json: user
#     else
#       render json: { error: "Wrong username/password" }, status: :unauthorized
#     end
#   end


  def signout
     session.delete :user_id
     render json: {success: "signout successfull"}

  end


end