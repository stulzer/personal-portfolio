class JobsController < ApplicationController
  def index
    jobs = Job.all
    render json: jobs, each_serializer: JobSerializer
  end

  def show
    job = Job.find params[:id]
    render json: job, serializer: JobSerializer
  end
end
