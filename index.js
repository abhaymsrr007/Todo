const http = require('http');
const fs = require('fs');
const url = require('url')
const server = http.createServer((req,res)=>{

    const log = `${Date.now()}:${req.url,true} \n`;
    const myurl = url.parse(req.url,true);

    fs.appendFile("log.txt",log,(err,data)=>{
        // console.log(req);
        switch (myurl.pathname) {
            case "/":
                res.end("Home Page")
                break;

            case "/about":
                const username = myurl.query.myname;
                res.end(`Hi,${username}`);
                break;
                    
            default:
                res.end(`404`);
                break;
        }
        res.end('Hello From Server');
    });
});

server.listen(8000,()=>console.log("Server Started!"));
