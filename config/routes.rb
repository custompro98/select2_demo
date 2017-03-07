Rails.application.routes.draw do
  root 'users#index'

  get  '/users/search', to: 'users#search',       as: 'get_users_search'
end
