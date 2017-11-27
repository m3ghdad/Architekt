class Api::StoriesController < ApplicationController
  def index
    @stories = Story.all
  end

  def create

  end

  def new

  end

  def show
    
  end

  def delete

  end

  def edit

  end

  def update

  end

  private
  def story_params
    params.require(:story).permit(:body, :title)
  end
end
