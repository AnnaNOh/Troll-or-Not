'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      img_url: {
        type: DataTypes.STRING
      },
      google_password_digest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      facebook_password_digest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email_password_digest: {
        type: DataTypes.STRING,
        allowNull: false
      },
      session_token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      commentator_score: {
        type: DataTypes.STRING
      },
      eagle_eye_score: {
        type: DataTypes.STRING
      },
      binger_score: {
        type: DataTypes.STRING
      },
      troll_hunter_score: {
        type: DataTypes.STRING
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
