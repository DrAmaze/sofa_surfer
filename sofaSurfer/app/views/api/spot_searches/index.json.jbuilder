@locations.each do |spot|
  json.set! spot.id :type, 'location'
  json.partial! 'api/locations/location', location: site
end
