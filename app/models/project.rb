# == Schema Information
#
# Table name: projects
#
#  id         :bigint(8)        not null, primary key
#  user_id    :bigint(8)
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Project < ApplicationRecord
  belongs_to :user
  
  has_many :chat_messages, dependent: :destroy

  def json
    {
      id: id,
      user: user.as_json,
      name: name,
      created_at: created_at,
      updated_at: updated_at
    }
  end

end
