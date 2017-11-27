class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.string :body, null: false
      t.string :title, null: false
      t.integer :author_id, null: false

      t.timestamps
    end
  end
end
