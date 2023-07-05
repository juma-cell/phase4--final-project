class SessionController < ApplicationController
  # skip_before_action :authorize, only: [:login]

  def login
    email = params[:email]
    password = params[:password]
    
    user = User.find_by(email: email)
  
    if user && user.authenticate(password)
      session[:user_id] = user.id
      puts "LOGIN"
      puts session[:user_id]

      render json: user
    else
      render json: { error: "Wrong username/password" }, status: :unauthorized
    end
  end
  
  def current_user
    user = User.find_by(id: session[:user_id])
    
    if user
      render json: user
    else
      render json: { error: "Not logged in" }, status: :not_found
    end        
  end

  def logout
    session.delete(:user_id)
    render json: { success: "Logout success" }
  end
end
