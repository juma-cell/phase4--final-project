class DiscussionsController < ApplicationController
    before_action :set_discussion, only: [:show, :update, :destroy]
  
    def index
      @discussions = Discussion.all
      render json: @discussions
    end
  
    def show
      render json: @discussion
    end
  
    def create
      @discussion = Discussion.new(discussion_params)
  
      if @discussion.save
        render json: @discussion, status: :created
      else
        render json: @discussion.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @discussion.update(discussion_params)
        render json: @discussion
      else
        render json: @discussion.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @discussion.destroy
      render json: { message: 'Discussion deleted' }
    end
  
    private
  
    def set_discussion
      @discussion = Discussion.find(params[:id])
    end


    def discussion_params
      {discussion_title: params[:discussion_title], content: params[:content],  user_id: params[:user_id], channel_id: params[:channel_id], likes: params[:likes]}
    end

  end
  
