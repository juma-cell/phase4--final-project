class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :username
      t.string :email
      t.string :image
      t.string :password_digest
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
