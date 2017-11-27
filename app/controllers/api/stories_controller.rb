class Api::StoriesController < ApplicationController
  def index
    @stories = Story.all
  end

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def show
    @story = Story.find(params[:id])
    render :show
  end

  def destory
    @story = current_user.stories.find(params[:id])
    @story.destroy
    render :show
  end

  def update
    @story = current_user.stories.find(params[:id])
    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  private
  def story_params
    params.require(:story).permit(:body, :title)
  end
end
