import data from "./0004-NODEJS-DataManagement.mjs";
export function insertAddress(addresses,id)
{
    const parseID=parseInt(id,10);
    const filteredAddresses=addresses.filter(
        (address)=>address.id==parseID
        //El método filter busca en la matriz de objetos aquel que coincida con el id buscado
    );
    const finalData=data.addresses.concat(filteredAddresses); 
    return finalData;
}