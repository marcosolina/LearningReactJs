import express from "express";
import bodyParser from "body-parser";

const app = express();
const router = express.Router();
app.use(bodyParser.json());


/*
 "use" definisce un middleware di livello "app"
  Ogni richiesta http verra processata da questi
  due middleware
*/

let testError = true;
if(!testError){
    app.use((req, res, next) => {
        console.log("First middleware");
        next();// Vai al prossimo middleware
    });
}else{
    app.use((req, res, next) => {
        console.log("First middleware");
        throw new Error("A failure occurred!");
    });
}

/*
app.use((req, res, next) => {
    res.send("Hello world. I am a custom middleware.");
});
*/
app.use(router);

router.get("/a", (req, res, next) => {
    res.send("Hello this is route a");
});

router.post("/c", (req, res, next) => {
    res.send(`Hello this is route c. Message is ${req.body.message}`);
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen({port: 8000}, () => {
    console.log("Express Node server has loaded!");
});