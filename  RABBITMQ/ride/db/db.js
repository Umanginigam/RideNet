const mongoose= require('mongoose');

function connect(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('Ride service connected to Mongodb');
    }).catch(err => {
        console.log(err);
    });
}

module.exports=connect;