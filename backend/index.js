// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import authRoute from "./routes/auth.route.js";
// import postRoute from "./routes/post.route.js";
// import testRoute from "./routes/test.route.js";
// import userRoute from "./routes/user.route.js";

// // const cors = require("cors");

// const app = express();

// // app.use(cors({ origin:"http://localhost:5173", credentials: true }));
// app.use(cors({ origin:process.env.CORS_ORIGIN, credentials: true }));










// app.use(express.json());
// app.use(cookieParser());

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/test", testRoute);


// app.get('/',(req,res)=>{
//   res.send('Api Working fine')
// })
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running at port ${PORT}`);
// });














// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import authRoute from "./routes/auth.route.js";
// import postRoute from "./routes/post.route.js";
// import testRoute from "./routes/test.route.js";
// import userRoute from "./routes/user.route.js";

// const app = express();

// // Allow multiple origins (Local & Deployed Frontend)
// const allowedOrigins = [
//   "http://localhost:5173", 
//   "https://real-estate-psi-six.vercel.app",  // ✅ Add your frontend URL here
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("CORS policy violation"), false);
//       }
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
//     allowedHeaders: ["Content-Type", "Authorization"], 
//   })
// );

// app.use(express.json());
// app.use(cookieParser());

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);
// app.use("/api/test", testRoute);

// app.get("/", (req, res) => {
//   res.send("API Working Fine 🚀");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running at port ${PORT}`);
// });
















import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

// ✅ Allow both local and deployed frontend
const allowedOrigins = [
  "http://localhost:5173",
  "https://real-estate-psi-six.vercel.app", 
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS policy violation"), false);
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);

app.get("/", (req, res) => {
  res.send("API Working Fine 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
