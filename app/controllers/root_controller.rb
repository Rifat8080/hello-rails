# frozen_string_literal: true

class RootController < ApplicationController
  def index
    @messages = Message.all
  end
end
