Creating Rails App
- rails new apartment-app -d postgresql -T
- cd apartment-app
- rails db:create
- git remote add origin ---
- git checkout -b main
- git add .
- git commit -m 'initial commit'
- git push origin main

Add Rspec
- bundle add rspec-rails
- rails generate rspec:intall
create  .rspec
      create  spec
      create  spec/spec_helper.rb
      create  spec/rails_helper.rb


Adding React
- bundle add webpacker
- bundle add react-rails
- rails webpacker:install
- rails webpacker:install:react
- yarn add @babel/preset-react
- yarn add @rails/activestorage
- yarn add @rails/ujs

- rails generate react:install
      create  app/javascript/packs/application.js
      create  app/javascript/packs/server_rendering.js

- rails generate react:component App
 create  app/javascript/components/App.js

 Adding Devise

 - bundle add devise
 - rails generate devise:install

 - rails generate devise User
 invoke  active_record
create    db/migrate/20220413182445_devise_create_users.rb
create    app/models/user.rb
invoke    rspec
create      spec/models/user_spec.rb
insert    app/models/user.rb
 route  devise_for :users

 - rails db:migrate
 == 20220413182445 DeviseCreateUsers: migrating ================================
-- create_table(:users)
   -> 0.0221s
-- add_index(:users, :email, {:unique=>true})
   -> 0.0040s
-- add_index(:users, :reset_password_token, {:unique=>true})
   -> 0.0027s
== 20220413182445 DeviseCreateUsers: migrated (0.0290s) =======================

Rails Routing
$ rails generate controller Home
create  app/controllers/home_controller.rb
invoke  erb
create    app/views/home
invoke  rspec
create    spec/requests/home_spec.rb
invoke  helper
create    app/helpers/home_helper.rb
invoke    rspec
create      spec/helpers/home_helper_spec.rb

React Routing
- yarn add react-router-dom@5.3.0

Adding Reactstrap
- bundle add bootstrap
- mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
- yarn add reactstrap

Apartment Resource
- rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string image:text user_id:integer
invoke  active_record
create    db/migrate/20220413183205_create_apartments.rb
create    app/models/apartment.rb
invoke    rspec
create      spec/models/apartment_spec.rb
invoke  controller
create    app/controllers/apartments_controller.rb
invoke    erb
create      app/views/apartments
invoke    rspec
create      spec/requests/apartments_spec.rb
invoke    helper
create      app/helpers/apartments_helper.rb
invoke      rspec
create        spec/helpers/apartments_helper_spec.rb
invoke  resource_route
 route    resources :apartments

- rails db:migrate
== 20220413183205 CreateApartments: migrating =================================
-- create_table(:apartments)
   -> 0.0084s
== 20220413183205 CreateApartments: migrated (0.0085s) ========================
