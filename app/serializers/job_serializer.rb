class JobSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :picture
end
