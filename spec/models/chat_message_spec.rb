# == Schema Information
#
# Table name: chat_messages
#
#  id         :bigint(8)        not null, primary key
#  project_id :bigint(8)
#  user_id    :bigint(8)
#  text       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe ChatMessage, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
