class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :neighborhood, null: false
      t.string :img_url, null: false

      t.timestamps
    end

    add_index :locations, :neighborhood
  end
end
