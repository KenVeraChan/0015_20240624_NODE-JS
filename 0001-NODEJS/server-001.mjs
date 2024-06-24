import{createServer}from 'http';
const server=createServer();
server.listen(8080,()=>{
    //Se pone con apostrofes para el console.log();
    console.log(`Server is listening to http://localhost:${server.address().port}`,
    );
});