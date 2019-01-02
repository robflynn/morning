class CreateCredentials < ActiveRecord::Migration[5.2]
  def change
    create_table :credentials do |t|
      t.belongs_to :project
      t.belongs_to :user
      t.string :key
      t.string :value
      
      t.timestamps
    end
  end
end
