import express from "express";
import passport from "passport";
import { getMyProfile, logout } from "../controller/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.get(
  "/googlelogin",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get(
  "/login",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000",
    // successRedirect: "https://react-auth20.netlify.app",
  })
);

router.get("/me", getMyProfile);

router.get("/logout", logout);

export default router;
