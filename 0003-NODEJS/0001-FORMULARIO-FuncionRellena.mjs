export function getForm(addresses, id) {
    let address=
    {
        id:'',
        firstname:'',
        lastname:'',
        street:'',
        city:'',
        country:''
    };
    if (id)
    {
        address= addresses.find((adr) => adr.id=== parseInt(id,10));
    }
const form=`
<!DOCTYPE html>
    <html>
        <head>
            <title>Address Book</title>
            <meta charset="utf-8">
            <link rel="stylesheet" href="formularioCSS.css">
        </head>
        <body>
            <form action="/save" method="POST">
                <input type="hidden" id="id" name="id" value="${address.id}">
                <div>
                    <label>First Name: <input type="text" id="firstname" name="firstname" value="${address.firstname}"></label>
                </div>
                <div>
                    <label>Last Name: <input type="text" id="lastname" name="lastname" value="${address.lastname}"></label>
                </div>
                <div>
                    <label>Street: <input type="text" id="street" name="street" value="${address.street}"></label>
                </div>
                <div>
                    <label>City: <input type="text" id="city" name="city" value="${address.city}"></label>
                </div>
                <div>
                    <label>Country: <input type="text" id="country" name="country" value="${address.country}"></label>
                </div>
                <div>
                    <button type="submit">Save!</button>
                </div>
            </form>            
        </body>
    </html>`;
return form;
}