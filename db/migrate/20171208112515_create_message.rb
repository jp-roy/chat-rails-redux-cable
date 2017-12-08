class CreateMessage < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :content
      t.references :user, foreign_key: true
      t.references :channel, foreign_key: true
    end
  end
end
