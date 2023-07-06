class DiscussionsController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index
    discussions = Discussion.all
    render json: discussions
  end

  def show
    discussion = Discussion.find_by(id: params[:id])

    if discussion
    render json: discussion
    else
      render json: { error: "Discussion not found"}
    end
  end

  def create
    discussion = Discussion.new(discussion_params)
    discussion.user_id = session[:user_id]
  
    if discussion.save
      render json: discussion, status: :created
    else
      render json: discussion.errors, status: :unprocessable_entity
    end
  end
  
  


  def update
    discussion = Discussion.find_by(id: params[:id])

    if discussion
        discussion.update(discussion_params)
        render json: {success: "Discussion updated successfully"}, status: :created
    else
        render json: {error: "Discussion not found"}, status: :not_found
    end
  end

  def destroy
    discussion = Discussion.find_by(id: params[:id])

    if discussion
        discussion.destroy
        render json: {success: "Discussion deleted successfully"}, status: :created

    else
        render json: {error: "Discussion does not exist"}, status: :not_found
    end
  end

  private


  def discussion_params
    {topic: params[:topic], discussion_title: params[:discussion_title], content: params[:content]}
  end

end