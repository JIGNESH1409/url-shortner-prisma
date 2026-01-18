import express from "express";
import path from "path";
import { shorturlRouter } from "./routes/Shortner.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));
app.use("/", shorturlRouter);

app.get("/", (req, res) => {
  res.send("URL Shortener API is running");
});



app.use(shorturlRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
