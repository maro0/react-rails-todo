require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ReactRailsTodo
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    
    config.middleware.insert_before 0,Rack::Cors do
      allow do
        origins 'http://localhost:3000'
        resource '*',
        :heads =>:any,
        :methods => [:get,:post,:patch,:delete,:options]
      end
    end
  end
end
