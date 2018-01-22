@locations.each do |spot|
  json.set! spot.id :type, 'location'
  json.partial! 'api/locations/location', location: spot
end

@users.each do |user|
  json.set! user.id :type, 'user'
  json.partial! 'api/users/user', user: user
end
