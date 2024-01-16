Rails.application.routes.draw do
  root 'static#index'
  get 'static/index'
  get '/random_greeting', to: 'messages#random_greeting'
  # other routes
end
