@locations.each do |location|
  json.set! location.id do
    json.partial! 'location', location: site
  end
end
