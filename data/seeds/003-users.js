const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // To add an Admin, a user has to create an account with Auth0(either through the app or on the Auth0 dashboard)
  // And then a new seed has to be added below, with the role and auth_id of that user

  return knex("users").insert([
    {
      // phil7j@gmail.com
      role: "admin",
      auth_id: "auth0|5d9525bdaed7ac0d51b1103a"
    },
    {
      // mhguitar1997@gmail.com
      role: "admin",
      auth_id: "google-oauth2|102505450093705496380"
    },
    {
      // yusufnafey@gmail.com
      role: "admin",
      auth_id: "google-oauth2|104797840746198870869"
    },
    {
      // reedtjames1234@gmail.com
      role: "admin",
      auth_id: "google-oauth2|101388585358836498209"
    },
    {
      // rory.christian.murray@gmail.com
      role: "admin",
      auth_id: "google-oauth2|101213116176046442161"
    },
    {
      // info@zabdielrosario.com
      role: "admin",
      auth_id: "google-oauth2|117212984255811156388"
    },
    {
      // imani.russ@gmail.com
      role: "admin",
      auth_id: "google-oauth2|109381253001306186777"
    },
    {
      // labs16grantly@gmail.com
      role: "user",
      auth_id: "google-oauth2|105085847106269862248"
    }
  ]);
};
