import {createServer} from 'http';
import data from './0004-FORMULARIO-DataManagement.mjs';
import {getList} from './0005-FORMULARIO-ListDisplay.mjs';
import {deleteAddress} from './0006-FORMULARIO-Delete.mjs';
import {getForm} from './0001-FORMULARIO-FuncionRellena.mjs';
import {parse} from 'querystring';
import {saveAddress} from './0007-FORMULARIO-Guardar.mjs';
import {readFile} from 'fs';

const server=createServer((request,response)=>{
    const parts = request.url.split('/');
    if(parts.includes('delete'))
        {
            data.addresses=deleteAddress(data.addresses,parts[2]);
            redirect(response,'/');
        }
    else if(parts.includes('new'))
        {
            send(response,getForm());
        }
    else if(parts.includes('edit'))
        {
            send(response,getForm(data.addresses,parts[2]));
        }
    else if(parts.includes('save') && request.method==='POST')
        {
            let body='';
            request.on('readable',()=>{
                const data= request.read();
                body+=data!==null?data:'';
            });
            request.on('end',()=>{
                const address= parse(body);
                data.addresses=saveAddress(data.addresses,address);
                redirect(response,'/');
            });
        }
    else if(request.url==='/formularioCSS.css')
        {
            readFile('0003-NODEJS/formularioCSS.css','utf-8',(err,data)=>{
                if(err)
                    {
                        response.statusCode=404;
                        response.end();
                    }
                else
                {
                    response.end(data);
                }
            });
        }
    else
    {
        send(response,getList(data.addresses));
    }
})
server.listen(8080,()=>
    console.log('Address book reachable at http://localhost:8080')
);
function send(response,responseBody)
{
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(responseBody);
}
function redirect(response,to)
{
    response.writeHead(302,{location:'/','content-type':'text/plain'});
    response.end('302 Redirecting to /');
}
