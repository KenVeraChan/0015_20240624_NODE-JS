import {createServer} from "http";
import data from "./0004-NODEJS-DataManagement.mjs";
import {getList} from "./0004-NODEJS-ListDisplay.mjs";
import{deleteAddress} from "./0004-NODEJS-Delete.mjs";
import{insertAddress} from "./0004-NODEJS-Insert.mjs";

const server= createServer((request,response)=>{
    let responseBody;
    const parts=request.url.split('/');
        if(parts.includes('delete'))
            {
                data.addresses=deleteAddress(data.addresses,parts[2]);
                redirect(response);
            }
        if(parts.includes('insert'))
            {
                data.addresses=insertAddress(data.addresses,parts[2]);
                redirect(response);
            }
        else
            {
                response.writeHead(200,{'content-type':'text/html'});
                responseBody=getList(data.addresses);
                response.end(responseBody);
            }
});
server.listen(8080,()=>
    console.log('Address book reachable at http://localhost:8080'),    
);

function redirect(response)
{
    response.writeHead(302,{location:'/','content-type':'text/plain'});
    response.end('302 Redirecting to /');
}
