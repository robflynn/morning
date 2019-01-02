Morning = {
	credentials: {
		secret_key: Rails.application.credentials.dig(:morning, :credentials_secret_key),
		salt: Rails.application.credentials.dig(:morning, :credentials_salt)
	}
}
