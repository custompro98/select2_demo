require 'interactors/users'

class UsersController < ApplicationController
  def index
  end

  def search
    render json: users_interactor.where(params[:q]), status: :ok
  end

  private

  def users_interactor
    ::Interactors::Users
  end
end
