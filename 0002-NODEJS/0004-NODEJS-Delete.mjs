export function deleteAddress(addresses,id)
{
    const parseID=parseInt(id,10);
    const filteredAddresses=addresses.filter(
        (address)=>address.id!==parseID
        //El método filter busca en la matriz de objetos aquel que coincida con el id buscado
    );
    return filteredAddresses;
}