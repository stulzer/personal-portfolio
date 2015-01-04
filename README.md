STULZER.COM PORTFOLIO
=========================
This is a weekend project, not sure if it will really become my future portfolio.
Anyway this piece of software shows a little bit about my code, and organization.

## Dependencies

- Ruby 2.2.0-p0
- Rails 4.2.0
- Postgresql >= 9.3
- Node.js >= 0.10.35
- ember-cli 0.1.4

## Rails app

### Copy and put your local database configurations.
```console
cp config/database.example.yml config/database.yml
```

### Bundling and migrating the database.
```console
bundle install
./bin/rake db:create
./bin/rake db:migrate
```

### Rails specs with RSpec
```console
./bin/rspec
```

### Running rails server
```console
./bin/rails s
```

## Ember app, remember the ember app is inside app/frontend directory. All following commands should be executed inside app/frontend directory!

### Installing dependencies
```console
npm install
bower install
```

### ember-cli tests
```console
ember test --server
```

### Running ember server
```console
ember server --proxy http://localhost:3000
```

### Then visit
```
http://localhost:4200
```
