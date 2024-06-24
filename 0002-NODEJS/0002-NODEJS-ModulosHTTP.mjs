import { createServer } from "http";
const server=createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    const responseBody=
    `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Titulo libro en NODE.JS</title>
    </head>
    <body>
        <h1 style="color: green">Direccion del libro</h1>
    </body>
    </html>
    `;
    response.end(responseBody);
});
server.listen(8080,()=>{
    console.log(`Server is listening to http://localhost:${server.address().port}`,);
});