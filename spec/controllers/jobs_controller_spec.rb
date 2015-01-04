require 'rails_helper'

RSpec.describe JobsController, :type => :controller do

  describe 'GET index' do
    before do
      FactoryGirl.create_list :job, 3
    end

    before :each do
      get :index
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'responds a valid JSON' do
      body = JSON.parse(response.body)
      jobs_titles = body['jobs'].map { |m| m['title'] }

      expect(jobs_titles).to match_array(['A New Job Has Entered the Ring!',
                                          'A New Job Has Entered the Ring!',
                                          'A New Job Has Entered the Ring!'])
    end
  end

  describe 'GET show' do
    let(:job) {
      FactoryGirl.create :job, title: 'A new Job',
      description: 'Excepteur sint occaecat cupidatat non proident',
      picture: 'job-pic.jpg'
    }

    before :each do
      get :show, id: job.id
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end

    it 'returns a serialized Job object' do
      expect(response).to serialize_object(job).with(JobSerializer)
    end

    it 'responds a JSON job object' do
      body = JSON.parse(response.body)

      expect(body['job']['title']).to eq 'A new Job'
      expect(body['job']['description']).to eq 'Excepteur sint occaecat cupidatat non proident'
      expect(body['job']['picture']).to eq 'job-pic.jpg'
    end
  end

end
