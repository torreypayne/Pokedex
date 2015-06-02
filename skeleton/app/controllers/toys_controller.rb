class ToysController < ApplicationController

  def show
    @toy = Toy.find(params[:id])
  end

  def update
    @toy = Toy.find(params[:id])
    if @toy.update(toy_params)
      render :show
    end
  end

  def toy_params
    params.require(:toy).permit(
    :name,
    :pokemon_id,
    :price,
    :happiness,
    :image_url
    )
  end
end
