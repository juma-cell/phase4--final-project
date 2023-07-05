class ProfilesController < ApplicationController
    before_action :set_profile, only: [:show, :edit, :update, :destroy]
  
    def index
      @profiles = Profile.all
      render json: @profiles
    end
  
    def current_profile
      
        @profile = Profile.find_by(user_id: session[:user_id])
        render json: @profile
    
    end
  
    def new
      @profile = Profile.new
      render json: @profile
    end
  
    def create
      @profile = Profile.new(profile_params)
      if @profile.save
        render json: @profile, status: :created
      else
        render json: @profile.errors, status: :unprocessable_entity
      end
    end
  
    def edit
      render json: @profile
    end
  
    def update
      if @profile.update(profile_params)
        render json: @profile
      else
        render json: @profile.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @profile.destroy
      render json: { message: 'Profile deleted successfully' }
    end
  
    private
  
    def set_profile
      @profile = Profile.find(params[:id])
    end
  
    def profile_params
      {user_id: params[:user_id], username: params[:username], email: params[:email], password: params[:password], image: params[:image] }

    end

end
