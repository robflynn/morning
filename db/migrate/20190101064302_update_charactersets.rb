class UpdateCharactersets < ActiveRecord::Migration[5.2]
  def change
    execute "ALTER TABLE chat_messages CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"
    execute "ALTER TABLE chat_messages MODIFY text VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin"
  end
end
