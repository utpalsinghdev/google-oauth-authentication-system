import "dotenv/config"
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import morgan from "morgan";
import testrou from "./test/test.routes";
import cors from "cors";
import session, { Cookie } from "express-session";
import env from "./utils/validateEnv";
import passport from "./Auth/passport-config";
import auth from "./Auth/auth.routes";
const app = express();
app.use(express.json());

// Middlewares
app.use(morgan("dev"))
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(
    session({
      secret: "secretcode",
      resave: true,
      saveUninitialized: true,
      cookie: {
        sameSite: "none",
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 // One Week
      }
    }))
app.use(passport.initialize())
app.use(passport.session())

passport

// Routes
app.use("/api/v1/test", testrou)
app.use("/auth", auth)

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World")
}
)

app.use((req: Request, res: Response, next: NextFunction) => {
    next(createHttpError(404, "Endpoint Not found"))
});


// Error handler
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = error;
    let errorCode = 500;
    if (isHttpError(error)) {
        errorMessage = error.message;
        errorCode = error.status;
    }
    res.status(errorCode).json({ message: errorMessage })
});

export default app;