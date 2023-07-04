class RepliesController < ApplicationController
    before_action :set_discussion, only: [:create]
    # before_action :set_reply, only: [:show, :update, :destroy]

    def index
        @discussion = Discussion.find(params[:discussion_id])
        replies = @discussion.replies
        render json: replies
      end
  
    #   def create
    #     @discussion = Discussion.find(params[:discussion_id]) # Retrieve the discussion based on the discussion_id
    #     @reply = @discussion.replies.build(reply_params)
      
    #     if @reply.save
    #       render json: @reply, status: :created
    #     else
    #       render json: @reply.errors, status: :unprocessable_entity
    #     end
    #   end

    def create
        @discussion = Discussion.find(params[:discussion_id])
        @reply = @discussion.replies.build(reply_params)
      
        if @reply.save
          render json: @reply, status: :created
        else
          render json: @reply.errors, status: :unprocessable_entity
        end
      end
      
      
  
    def show
      render json: @reply
    end
  
    def update
      if @reply.update(reply_params)
        render json: @reply
      else
        render json: @reply.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @reply.destroy
      render json: { message: 'Reply deleted successfully' }
    end
  
    private
  
    def set_discussion
      @discussion = Discussion.find(params[:discussion_id])
    end
  
    def set_reply
      @reply = Reply.find(params[:id])
    end
  
    # def reply_params
    #   params.require(:reply).permit(:reply_content, :user_id) 
    # end
    def reply_params
        { reply_content: params[:reply_content], user_id: params[:user_id], discussion_id: params[:discussion_id] }
      end
      


  end
