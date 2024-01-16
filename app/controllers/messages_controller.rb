class MessagesController < ApplicationController
  def random_greeting
    message = Message.order('RANDOM()').first

    if message.present?
      render json: { greeting: message.content }
    else
      render json: { greeting: 'No greetings available' }
    end
  end
end
