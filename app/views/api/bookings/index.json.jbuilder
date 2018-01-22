@bookings.each do |booking|
  json.set! booking.id do
    json.partial! 'booking', booking: booking
    json.spot booking.location.neighborhood
    json.host booking.host.username
  end
end
