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
| commentator_score        |  string   |                  not null |
| eagle_eye_score          |  string   |                  not null |
| binger_score             |  string   |                  not null |
| troll_hunter_score       |  string   |                  not null |
| created_at               | datetime  |                  not null |
| updated_at               | datetime  |                  not null |

commentator score can be like reddit comments karma
eagle eye can be troll hunting accuracy
binger score is how many videos they've watched?
troll hunter score is how many videos they've judged on

### videos

| Videos     | Data Type |                Validations |
| ---------- | :-------: | -------------------------: |
| id         |  integer  |      not null, primary key |
| video_url  |  string   |                   not null |
| body       |   text    |                            |
| game_title |  string   |                   not null |
| author_id  |  integer  | not null, indexed, foreign |
| created_at | datetime  |                   not null |
| updated_at | datetime  |                   not null |

### comments

| Comments          | Data Type |                Validations |
| ----------------- | :-------: | -------------------------: |
| id                |  integer  |      not null, primary key |
| body              |   text    |                   not null |
| author_id         |  integer  | not null, indexed, foreign |
| video_id          |  integer  | not null, indexed, foreign |
| parent_comment_id |  integer  |           indexed, foreign |
| created_at        | datetime  |                   not null |
| updated_at        | datetime  |                   not null |

### trolls

| Trolls     | Data Type |                Validations |
| ---------- | :-------: | -------------------------: |
| id         |  integer  |      not null, primary key |
| user_id    |  integer  | not null, indexed, foreign |
| video_id   |  integer  | not null, indexed, foreign |
| created_at | datetime  |                   not null |
| updated_at | datetime  |                   not null |

### likes

| Likes      | Data Type |                Validations |
| ---------- | :-------: | -------------------------: |
| id         |  integer  |      not null, primary key |
| user_id    |  integer  | not null, indexed, foreign |
| video_id   |  integer  | not null, indexed, foreign |
| created_at | datetime  |                   not null |
| updated_at | datetime  |                   not null |

### friends

| Friends    | Data Type |                Validations |
| ---------- | :-------: | -------------------------: |
| id         |  integer  |      not null, primary key |
| friend1_id |  integer  | not null, indexed, foreign |
| friend2_id |  integer  | not null, indexed, foreign |
| created_at | datetime  |                   not null |
| updated_at | datetime  |                   not null |

friend1 or friend2 must have current user's id
the other key must be unique

### following

| Following    | Data Type |                Validations |
| ------------ | :-------: | -------------------------: |
| id           |  integer  |      not null, primary key |
| followers_id |  integer  | not null, indexed, foreign |
| following_id |  integer  | not null, indexed, foreign |
| created_at   | datetime  |                   not null |
| updated_at   | datetime  |                   not null |

### hashtags

| Hashtags   | Data Type |                Validations |
| ---------- | :-------: | -------------------------: |
| id         |  integer  |      not null, primary key |
| body       |   text    |                   not null |
| author_id  |  integer  | not null, indexed, foreign |
| video_id   |  integer  | not null, indexed, foreign |
| created_at | datetime  |                   not null |
| updated_at | datetime  |                   not null |
