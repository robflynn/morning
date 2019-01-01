# == Schema Information
#
# Table name: projects
#
#  id         :bigint(8)        not null, primary key
#  user_id    :bigint(8)
#  name       :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Project < ApplicationRecord
end
