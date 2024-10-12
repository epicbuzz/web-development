class CreateAuthors < ActiveRecord::Migration[7.1]
  def change
    create_table("authors") do |t|
      t.string :name
      t.text :info
      t.string :contact

      t.timestamps
    end
  end
end


