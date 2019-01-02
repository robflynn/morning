# == Schema Information
#
# Table name: credentials
#
#  id         :bigint(8)        not null, primary key
#  project_id :bigint(8)
#  user_id    :bigint(8)
#  key        :string
#  value      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Credential < ApplicationRecord
  belongs_to :project
  belongs_to :user
end
