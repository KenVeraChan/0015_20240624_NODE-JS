import {createServer} from "http";
const addresses =[
    {
        id: 1,
        firstname: 'James',
        lasname: 'Bond',
        street: '12 Millbank',
        city: 'London',
        country: 'United Kingdom'
    },
    {
        id: 2,
        firstname: 'Sherlock',
        lasname: 'Holmes',
        street: '221b Baker St',
        city: 'London',
        country: 'United Kingdom', 
    }
];
const server= createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    const responseBody=
    `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Address Book</title>
    </head>
    <body>
        <h1 style="color: green">Direccion del libro</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                ${addresses.map(createRow).join('')}
            </tbody>
        </table>
    </body>
    </html>
    `;
    response.end(responseBody);
});
server.listen(8080,()=>
    console.log('Address book reachable at http://localhost:8080'),    
);
function createRow(address)
{
    return`
    <tr>
        <td>${address.id}</td>
        <td>${address.firstname}</td>
        <td>${address.lasname}</td>
    </tr>
    `;
}