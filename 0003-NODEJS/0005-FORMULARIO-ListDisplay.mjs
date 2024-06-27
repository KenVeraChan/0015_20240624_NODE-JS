export function getList(addresses)
{
    return `<!DOCTYPE html>
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
                    <th>Street</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                ${addresses.map(createRow).join('')}
            </tbody>
        </table>
    </body>
    </html>
    `;
}
function createRow(address)
{
    return`
    <tr>
        <td>${address.id}</td>
        <td>${address.firstname}</td>
        <td>${address.lasname}</td>
        <td>${address.street}</td>
        <td>${address.city}</td>
        <td>${address.country}</td>
    </tr>
    `;
}