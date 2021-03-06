class Api::V1::RegistrationsController < ApplicationController

	respond_to :json
  def create

    user = User.create(params[:user])
    if user.save
      render :json=> user.as_json(:auth_token=>user.authentication_token, :email=>user.email), :status=>201
      return
    else
      warden.custom_failure!
      render :json=> user.errors, :status=>422
    end
  end

end
