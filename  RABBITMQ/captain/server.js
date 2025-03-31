const http=require('http');
const app=require('./aapp');


const server=http.createServer(app);



server.listen(3002, () =>{
    console.log('Captain service is running on port 3002');
});