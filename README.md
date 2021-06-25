# CineMagic
> An application that allows users to view a list of movies, filter by category and leave comments about the movie.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
This application was built as my React/Redux project for Flatiron School.

## Technologies
* Ruby on Rails as backend (API)
* JavaScript/React/Redux as frontend user interface

## Setup

### Clone the Repositories
```
git clone git@github.com:swellpf/cinemagic-backend.git
git clone git@github.com:swellpf/cinemagic-frontend.git
```
### Check your Ruby Version and update gems
```
ruby -v
```
From the cinemagic-backend directory, run 'bundle install' to update Ruby gems.


### Initialize the database
```
rails db:create db:migrate db:seed
```
### Start Rails server
```
Open a terminal window and launch the Rails server using rails s.
```
Within a terminal window, navigate to the cinemagic-frontend directory and run 'npm start'.

### Install/Update Node Package Manager
```
From the cinemagic-frontend directory, run 'npm install' to install/update JavaScript dependencies.
```

## Features
List of features ready and plans for future enhancement
* Users can view a list of existing movies in the database
* Users can filter the view of existing movies by genre
* Users can add a new movie to the database and edit existing movies.
* Users can add comments to any movie.
* Users can delete comments from any movie.

Future Enhancements:
* Add user login and authentication.
* Comments will list the user and date/time a comment was added.
* Users will only be able to delete comments that they have added (unless they are an administrator).
* Add watchlist functionality so that users can create watchlists and add movies to those watchlists.

## Status
Project is: Stable and functional as of 6/25/2021.

## Inspiration
This application is my class project for Flatiron School to demonstrate my proficiency developing in React and Redux.

## Contact
Created by Paul Cinoman. You can contact me by email at [swellpf@gmail.com](mailto:swellpf@gmail.com). Check out my [Blog](http://www.pconthepc.com) - feel free to contact me!