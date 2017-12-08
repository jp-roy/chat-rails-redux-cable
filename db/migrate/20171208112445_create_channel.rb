class CreateChannel < ActiveRecord::Migration[5.1]
  def change
    create_table :channels do |t|
      t.string :name
    end
  end
end
