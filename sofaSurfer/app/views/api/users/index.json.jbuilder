@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :username, :email, :phone, :age, :street, :hosting, :about_me, :location_id, :img_url
  end
end
