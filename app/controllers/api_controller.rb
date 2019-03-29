class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token # skipping the verification

  rescue_from ActiveRecord::RecordInvalid do |e|
    render json: { error: e.to_s }, status: 422
  end
end
