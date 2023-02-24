import express from 'express';
import passport from './passport-config';


const router = express.Router();

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: 'http://localhost:3000',
    // failureFlash: true,
    failureRedirect: 'http://localhost:3000/login'
}));


export default router;