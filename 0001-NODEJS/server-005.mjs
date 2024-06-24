//  CREANDO SERVIDOR. Control de la depuración del CÓDIGO CON EL COMANDO: console.log();
import {createServer} from 'http';
console.log('createServer');
const server= createServer((request,response)=>{
    //debug>setBreakpoint(8); //GENERA PARADA DE EJECUCION
    console.log('createServer CALLBACK');
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    const url= new URL(request.url,'http://localhost:8080');

    console.log(URL);
    console.log('Name: ',url.searchParams.get('name'));
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
console.log('listen');
server.listen(8080,()=>{
    console.log(`Server is listening to http://localhost:${server.address().port}`,);
});