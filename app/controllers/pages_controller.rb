class PagesController < ApplicationController
  before_action :authenticate_user!

  def root
    @projects = current_user.projects
  end
end
