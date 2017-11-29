# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# bookings


# locations
Location.create!(
  street: 'pershing dr',
  neighborhood: 'presidio',
  img_url: 'http://greatruns.com/wp-content/uploads/2016/11/SanFran4.jpg'
)

Location.create!(
  street: 'beach st',
  neighborhood: "fisherman's wharf",
  img_url: 'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_SFcity_FishermanWharf_1280x642_sized.jpg'
)

Location.create!(
  street: 'sacramento st',
  neighborhood: 'chinatown',
  img_url: 'https://media-cdn.tripadvisor.com/media/photo-s/06/34/72/78/chinatown.jpg'
)

Location.create!(
  street: 'godeus st',
  neighborhood: 'mission',
  img_url: 'http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/neighborhoods/Mission%20District%20-%20Murals.jpg'
)

Location.create!(
  street: 'castro st',
  neighborhood: 'castro',
  img_url: 'https://hoodwork-production.s3.amazonaws.com/uploads/story/image/8288/castrowide.jpg'
)

Location.create!(
  street: '4th st',
  neighborhood: 'financial',
  img_url: 'http://baycityguide.com/media/00PU000000EkWTuMAN/Financial-District-from-Coit-Tower1500x872.jpg'
)

Location.create!(
  street: 'vincente st',
  neighborhood: 'sunset',
  img_url: 'https://hoodwork-production.s3.amazonaws.com/uploads/story/image/8683/whyisitcalled1.jpg'
)

Location.create!(
  street: 'anza st',
  neighborhood: 'richmond',
  img_url: 'https://c1.staticflickr.com/7/6156/6171867272_4078bfc827_b.jpg'
)

Location.create!(
  street: 'haight st',
  neighborhood: 'haight',
  img_url: 'http://ww4.hdnux.com/photos/36/66/21/8086647/5/920x920.jpg'
)

Location.create!(
  street: 'eddy st',
  neighborhood: 'tenderloin',
  img_url: 'http://sfcitizen.com/blog/wp-content/uploads/2013/05/7J7C9263-copy.jpg'
)

User.create!(
  username: 'sample',
  email: 'sample@user',
  phone: '1234567890',
  age: 18,
  hosting: true,
  location_id: 1,
  about_me: 'I am a generic user with generic interests and generic friends',
  password: 'password',
)

User.create!(
  username: 'jacob',
  email: 'jacob@butler',
  phone: '2403940705',
  age: 24,
  hosting: true,
  location_id: 1,
  about_me: 'I like to adventure',
  password: 'password',
)

User.create!(
  username: 'garret',
  email: 'garret@tongue',
  phone: '111-111-1111',
  age: 24,
  hosting: true,
  location_id: 3,
  about_me: 'I like to rugby',
  password: 'password',
)

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'USER_DATA.csv'))
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  t = User.create!
  t.username = row['username']
  t.email = row['email']
  t.phone = row['phone']
  t.age = row['age']
  t.hosting = row['hosting']
  t.location_id = row['location_id']
  t.about_me = row['about_me']
  password = row['password']
  t.save
  puts "#{t.username} saved"
end

puts "There are now #{User.count} rows in the Users table"

Booking.create!(
  traveler_id: 1,
  host_id: 12,
  location_id: 4,
  arrival: DateTime.parse("02/01/2018"),
  departure: DateTime.parse("02/04/2018"),
)
