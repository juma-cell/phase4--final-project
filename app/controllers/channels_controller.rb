class ChannelsController < ApplicationController
    before_action :set_channel, only: [:show, :update, :destroy]
  
    # GET /channels
    def index
      @channels = Channel.all
      render json: @channels
    end
  
    # GET /channels/:id
    def show
      render json: @channel
    end
  
    # POST /channels
    def create
      @channel = Channel.new(channel_params)
  
      if @channel.save
        render json: @channel, status: :created
      else
        render json: @channel.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH /channels/:id
    def update
      if @channel.update(channel_params)
        render json: @channel
      else
        render json: @channel.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /channels/:id
    def destroy
      @channel.destroy
      render json: { message: 'Channel deleted' }
    end
  
    private
  
    def set_channel
      @channel = Channel.find(params[:id])
    end
  
    # def channel_params
    #   params.require(:channel).permit(:channel_name)
    # end
    def channel_params
      { channel_name: params[:channel_name] }
    end
    
  end
  
