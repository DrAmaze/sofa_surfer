@locations.each do |location|
  json.set! location.id do
    json.extract! location, :id, :neighborhood, :img_url
  end
end
