Rails.application.routes.draw do
  namespace :api do
    get 'post/title:string'
    get 'post/description:text'
    get 'post/is_published:boolean'
  end
  root 'hello_world#index'
  get 'hello_world', to: 'hello_world#index'
  get 'bye_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
