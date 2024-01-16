module Api
  class GreetingsController < ApplicationController
    def random_greeting
      render json: { greeting: Message.order('RANDOM()').first.content }
    end
  end
end
