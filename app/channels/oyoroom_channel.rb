class OyoroomChannel < ApplicationCable::Channel
  def subscribed
     stream_from "oyoroom_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
