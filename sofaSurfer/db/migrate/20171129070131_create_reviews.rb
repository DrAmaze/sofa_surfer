class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :author_id, null: false
      t.boolean :recommendation, null: false
      t.integer :rating
      t.text :body

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :author_id
  end
end
