import express from "express";

const port = 3000;
const app = express();


app.use(express.static("public"));


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})

app.get("/", (req, res) => {
    res.render("index.ejs");
}) 

app.get("/login", (req, res) => {
  res.render("partials/login_signup.ejs");
}  )