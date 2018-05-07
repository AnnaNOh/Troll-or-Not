# Troll or Not

### Uniting Gamers in the Eternal Fight against Trolls

A social web application where users can share videos of trolls with friends.

## MVP List

* Sign Up (with Facebook, Google, email)
* Manually upload videos
* Profile page with own videos
* Filter videos by Game Title
* For Videos, Vote Troll or Not
* For Videos, Users can add comments
* For Comments, Users can reply to comments
* Follow other Users

* Invite friends
* Inform activity of friends
* Share on different platforms
* Direct messaging
* Hashtags
* Likes

## Schema

### users

| Users                    | Data Type |               Validations |
| ------------------------ | :-------: | ------------------------: |
| id                       |  integer  |     not null, primary key |
| username                 |  string   |         not null, indexed |
| email                    |  string   | not null, indexed, unique |
| img_url_array            |   array   |                 not null, |
| img_url_index            |  integer  |                  not null |
| google_password_digest   |  string   |                  not null |
| facebook_password_digest |  string   |                  not null |
| email_password_digest    |  string   |                  not null |
| session_token            |  string   | not null, indexed, unique |
| created_at               | datetime  |                  not null |
| updated_at               | datetime  |                  not null |

# videos

| Videos     | Data Type |                Validations |
| ---------- | :-------: | -------------------------: |
| id         |  integer  |      not null, primary key |
| video_url  |  string   |                   not null |
| body       |   text    |                            |
| author_id  |  integer  | not null, indexed, foreign |
| created_at | datetime  |                   not null |
| updated_at | datetime  |                   not null |
