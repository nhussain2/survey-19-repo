// import required sources/libraries
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// add identifier to cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// remove identifier from cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// inform passport module to use Google strategy:
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    // call-back function:
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // record already exists with given profile ID
        return done(null, existingUser);
      }
      // record does not exist, make new record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
