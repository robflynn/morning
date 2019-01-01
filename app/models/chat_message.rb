# == Schema Information
#
# Table name: chat_messages
#
#  id         :bigint(8)        not null, primary key
#  project_id :bigint(8)
#  user_id    :bigint(8)
#  text       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChatMessage < ApplicationRecord
  belongs_to :project
  belongs_to :user
end
