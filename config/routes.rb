Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get 'home/index'

get 'home/map', to: 'home#map'
get 'home/about', to: 'home#about'

root 'home#index'
end
