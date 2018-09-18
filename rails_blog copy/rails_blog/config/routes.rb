Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts do 
    resources :comments, shallow: true, only: [:create, :destroy, :edit, :update]
  end

  get("/", to: "home#index", as: :root)

end
