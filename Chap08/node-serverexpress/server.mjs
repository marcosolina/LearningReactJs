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

let testError = false;
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

router.get("/api/v1/users", (req, res, next) => {
    const users = [
        {
            id: 1,
            username: "Tom"
        },
        {
            id: 2,
            username: "Jon"
        },
        {
            id: 3,
            username: "Linda"
        }
    ];
    console.log(req.query.userid);
    const user = users.find((usr) => usr.id == req.query.userid);
    res.send(`User ${user?.username}`);
});

router.post("/api/v1/groups", (req, res, next) => {
    const groups = [
        {
            id: 1,
            groupname: "Admins"
        },
        {
            id: 2,
            groupname: "Users"
        },
        {
            id: 3,
            groupname: "Emplyees"
        }
    ];
    const group = groups.find((g) => g.id == req.body.groupid);
    res.send(`Group ${group.groupname}`);
});

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen({port: 8000}, () => {
    console.log("Express Node server has loaded!");
});