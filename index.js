import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

let title = [];
let para = [];
let name = [];

let n = 0;

app.get('/', (req, res) => {
    res.render("index.ejs", {
        Heading: title,
        Paragraph: para,
        Name: name,
        N: n,
    });
})
app.get('/index.ejs', (req, res) => {
    res.render("index.ejs", {
        Heading: title,
        Paragraph: para,
        Name: name,
        N: n,
    });
})
app.get("/login.ejs", (req, res) => {
    res.render("login.ejs");
})
app.get("/register.ejs", (req, res) => {
    res.render("register.ejs");
})
app.post('/submit', (req, res) => {
    res.render("post.ejs");
    title.push(req.body.title);
    para.push(req.body.content);
    name.push(req.body.name);
    n++;
});
app.get('/post.ejs', (req, res) => {
    res.render("post.ejs");
})
app.get('/edit.ejs', (req, res) => {
    res.render("edit.ejs");
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})