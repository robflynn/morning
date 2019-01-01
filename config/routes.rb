Rails.application.routes.draw do
  devise_for :users

  namespace :api, constraints: { format: 'json' } do
    resources :projects, except: :new do
      resources :chat_messages        
    end
  end

  root to: 'pages#root'

  mount ActionCable.server, at: '/cable'  
end
