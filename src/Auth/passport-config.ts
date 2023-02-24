import passport from 'passport';
import env from "../utils/validateEnv"

const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser((user, done) => {
    return done(null, user);
});

passport.deserializeUser((user:any, done) => {
    return done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: `/auth/google/callback`
},


    function (accessToken: any, refreshToken: any, profile: any, cb: any) {
        /**
         * called on successful authentication
         * insert into db
         */

        // User.findOrCreate({ googleId: profile.id }, function (err: any, user: any) {}); 
        console.log(profile);

        return cb(null, profile);
    }
));
export default passport;