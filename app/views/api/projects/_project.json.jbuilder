json.extract! project, :id, :name, :created_at, :updated_at, :user, :credentials
json.url api_project_url(project, format: :json)
