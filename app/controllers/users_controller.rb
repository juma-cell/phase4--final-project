class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]
  def index
    users = User.all
    render json: users
  end

  def create
    # admin_priviledge:params[:admin_priviledge]

    user = User.new(username: params[:username], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation])
  
    if user.save
      render json: user,status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end



  def current_user
    user = User.find_by(id: session[:user_id])
    puts "not found"
    puts session[:user_id]
    if user
        render json: user

    else
        render json: {error: "Not logged in"}, status: :not_found
    end        

  end



  def show
    if params[:id] == "current"
      current_user # Explicitly call current_user method
      if @current_user
        render json: @current_user
      else
        render json: { error: "User not found" }, status: :not_found
      end
    else
      @user = User.find(params[:id])
      render json: @user
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: "User not found" }, status: :not_found
  end
  
  
end
