Rails.application.routes.draw do
  devise_for :users

  namespace :api, constraints: { format: 'json' } do
    resources :chat_messages
  end

  root to: 'pages#root'
end
