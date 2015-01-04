require 'rails_helper'

RSpec.describe Job, :type => :model do
  it 'have a valid Factory' do
    job = FactoryGirl.create :job
    expect(job).to be_valid
  end
end
