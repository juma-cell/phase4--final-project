class RepliesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

    def index
        @discussion = Discussion.find(params[:discussion_id])
        replies = @discussion.replies
        render json: replies
    end


    def create
      discussion = Discussion.find(params[:discussion_id])
      return render json: { error: "Discussion not found" }, status: :not_found unless discussion
    
      reply = discussion.replies.new(reply_params)
      reply.user_id = session[:user_id]
    
      if reply.save
        render json: reply, status: :created
      else
        render json: reply.errors, status: :unprocessable_entity
      end
    end
    
  
    def show
      reply = Reply.find_by(id: params[:id])

      if reply
      render json: reply
      else
        render json: { error: "Reply not found"}
      end
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

    def destroy
      reply = Reply.find_by(id: params[:id])

      if reply
          reply.destroy
          render json: {success: "reply deleted successfully"}, status: :created

      else
          render json: {error: "reply does not exist"}, status: :not_found
      end
    end
  

    private
  
    def reply_params
        { reply_content: params[:reply_content] }
    end
      

  end