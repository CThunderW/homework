class Post < ApplicationRecord
    has_many :answers, dependent: :destroy
    validates(:title, presence: true, uniqueness: true)
    validates(
        :body,
         presence: {
             message: "must be given" #provides a custom error message
       },
       length: {
           minimum: 50
       }
    )
end
