import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";

const app = express();

// app.use(cors({ origin:"http://localhost:5173", credentials: true }));
app.use(cors({ origin:"https://real-estate-psi-six.vercel.app", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);


app.get('/',(req,res)=>{
  res.send('Api Working fine')
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

// app.listen(process.env.PORT, () => {
//   console.log(`connection is succefully running at port ${process.env.PORT}`);
//   res
// });
