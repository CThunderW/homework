class Users < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, index: {unique: true}
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.timestamps
    end
  end
end
