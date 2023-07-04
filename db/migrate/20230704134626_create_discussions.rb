class CreateDiscussions < ActiveRecord::Migration[7.0]
  def change
    create_table :discussions do |t|
      t.string :discussion_title
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.references :channel, null: false, foreign_key: true
      t.integer :likes

      t.timestamps
    end
  end
end
