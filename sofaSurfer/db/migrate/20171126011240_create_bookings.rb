class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :traveler_id, null: false
      t.integer :host_id, null: false
      t.integer :location_id, null: false
      t.datetime :arrival, null: false
      t.datetime :departure, null: false
      t.text :description

      t.timestamps
    end
    add_index :bookings, :host_id
    add_index :bookings, :location_id
  end
end
