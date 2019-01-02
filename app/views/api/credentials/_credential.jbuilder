json.extract! credential, :id, :project_id, :user_id, :key, :value, :created_at, :updated_at
json.url api_project_credential_url(@project, credential, format: :json)
