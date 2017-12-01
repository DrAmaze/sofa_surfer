
json.partial! 'booking', booking: @booking
json.spot @booking.location.neighborhood
json.host @booking.host.username
