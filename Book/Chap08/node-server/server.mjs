import http from "http";

const server = http.createServer((req, res) => {
    console.log(req);
    switch (req.url) {
        case "/":
            res.end("Hello from server");
            break;
        case "/a":
            res.end("Welcome to route a");
            break;
        case "/b":
            res.end("Welcome to route b");
            break;
        case "/c":
            if(req.method === "POST"){
                let body = [];
                req.on("data", (chunk) => {
                    body.push(chunk);
                });
                req.on("end", () => {
                    const params = Buffer.concat(body);
                    console.log("body", params.toString());
                    res.end(`You submitted these parameters: ${params.toString()}`);
                });
            }else{
                res.end("Not a POST");
            }
            break;
        default:
            res.end("Good bye");
            break;
    }
});

const port = 8000;
server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});