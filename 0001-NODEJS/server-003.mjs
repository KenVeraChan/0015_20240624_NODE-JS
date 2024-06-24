//  CREANO SERVIDOR CON PETICION Y RESPUESTA POR PANTALLA. Mostrando pagina HTML por eso se pone text/HTML
import {createServer} from 'http';
const server = createServer((request,response)=>{
    //Con el WRITEHEAD se consigue preparar la cabecera de informacion del HTTP para reenviar al cliente
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    const body=
    `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ejemplo de Página en el servidor de NODE.JS</title>
        </head>
        <body>
            <h1 style="color: green">Hello World!</h1>
        </body>
        </html>
    `;
    response.end(body);
});
server.listen(8080,()=>{
    //Servidor con callback
    console.log(`Server is listening to http://localhost:${server.address().port}`,
    );
});
