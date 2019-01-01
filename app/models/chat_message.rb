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

  validates_presence_of :project, :user

  def json
    {
      id: id,
      project_id: project_id,
      user: user.as_json,
      text: text,
      created_at: created_at,
      updated_at: updated_at
    }
  end
end
