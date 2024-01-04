import express from "express";
import { config } from "dotenv";
import { connectToDatabase } from "./config/database.js";
import { connectPassport } from "./utils/Provider.js"
import session from "express-session";
import passport from "passport";
import { errorMiddleware } from "./middleware/errorMiddleware.js";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()
export default app;

config({ path: "./config/config.env" });

connectToDatabase();
connectPassport();

// / Using Middlewares
app.use(
  session({
    secret: "mySecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true,
      httpOnly: true,
      sameSite: "none",
    },
  })
);

// /////////////////////////////////////////////

app.use(passport.session());
app.use(passport.authenticate("session"));
app.use(passport.initialize());

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://react-auth20.netlify.app","https://tricky-dungarees-bull.cyclic.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);



app.get("/", (req, res, next) => {
  res.send("<h1>Working</h1>");
});

// import Routes
import userRoute from "./routes/user.js";
app.use("/api/v1", userRoute);

app.use(errorMiddleware);
