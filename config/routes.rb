Rails.application.routes.draw do
  root 'pages#index'
  resources :jobs, only: [:index, :show]
end
