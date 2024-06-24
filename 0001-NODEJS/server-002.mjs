//  CREANO SERVIDOR CON PETICION Y RESPUESTA POR PANTALLA. Poniendo en el navegador LOCALHOST:8080
import {createServer} from 'http';
const server = createServer((request,response)=>{
    //Con el WRITEHEAD se consigue preparar la cabecera de informacion del HTTP para reenviar al cliente
    response.writeHead(200,{'content-type':'text/plain;charset=utf-8'});
    response.write('Hello ');
    response.end('World\n');
});
server.listen(8080,()=>{
    //Servidor con callback
    console.log(`Server is listening to http://localhost:${server.address().port}`,
    );
});