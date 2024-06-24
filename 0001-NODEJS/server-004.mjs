//  CREANDO SERVIDOR, para generar respuestas dinámicas.
import {createServer} from 'http';
const server= createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    const url= new URL(request.url,'http://localhost:8080');
    const body=
    `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ejemplo de Página en el servidor de NODE.JS</title>
        </head>
        <body>
            <h1 style="color: green">Hello ${url.searchParams.get('name')}!</h1>
        </body>
        </html>
    `;
    response.end(body);
});
server.listen(8080,()=>{
    console.log(`Server is listening to http://localhost:${server.address().port}`,);
});