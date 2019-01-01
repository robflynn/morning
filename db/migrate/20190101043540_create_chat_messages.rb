class CreateChatMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_messages do |t|
      t.belongs_to :project
      t.belongs_to :user
      t.string :text
      
      t.timestamps
    end
  end
end
