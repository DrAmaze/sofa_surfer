# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# bookings

require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'USER_DATA.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = User.create
  t.username = row['username']
  t.email = row['email']
  t.phone = row['phone']
  t.age = row['age']
  t.hosting = row['hosting']
  t.location_id = row['location_id']
  t.about_me = row['about_me']
  t.street = row['street']
  t.img_url = row['img_url']
  password = row['password']
  t.save
  puts "#{t.username} saved"
end

puts "There are now #{User.count} rows in the Users table"

# locations
Location.create!(
  neighborhood: 'presidio',
  img_url: 'http://greatruns.com/wp-content/uploads/2016/11/SanFran4.jpg'
)

Location.create!(
  neighborhood: "fisherman's wharf",
  img_url: 'http://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VCW_D_SFcity_FishermanWharf_1280x642_sized.jpg'
)

Location.create!(
  neighborhood: 'chinatown',
  img_url: 'https://media-cdn.tripadvisor.com/media/photo-s/06/34/72/78/chinatown.jpg'
)

Location.create!(
  neighborhood: 'mission',
  img_url: 'http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/neighborhoods/Mission%20District%20-%20Murals.jpg'
)

Location.create!(
  neighborhood: 'castro',
  img_url: 'https://hoodwork-production.s3.amazonaws.com/uploads/story/image/8288/castrowide.jpg'
)

Location.create!(
  neighborhood: 'financial',
  img_url: 'http://baycityguide.com/media/00PU000000EkWTuMAN/Financial-District-from-Coit-Tower1500x872.jpg'
)

Location.create!(
  neighborhood: 'sunset',
  img_url: 'https://hoodwork-production.s3.amazonaws.com/uploads/story/image/8683/whyisitcalled1.jpg'
)

Location.create!(
  neighborhood: 'richmond',
  img_url: 'https://c1.staticflickr.com/7/6156/6171867272_4078bfc827_b.jpg'
)

Location.create!(
  neighborhood: 'haight',
  img_url: 'http://ww4.hdnux.com/photos/36/66/21/8086647/5/920x920.jpg'
)

Location.create!(
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
  street: 'beautiful rd',
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
  street: 'pershing dr',
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
  street: 'mission st',
)


Booking.create!(
  traveler_id: 1,
  host_id: 6,
  location_id: 3,
  arrival: DateTime.parse("02/01/2018"),
  departure: DateTime.parse("02/04/2018"),
)
