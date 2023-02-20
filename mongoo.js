const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/hawkeye",{useNewUrlParser:true, useUnifiedTopology:true})
.then( (res) =>{
console.log("connections succesfull " + res)
})
.catch( (err) =>{
    console.log(err);
})
const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: String,
    videos :String,
    number : String,
    date : {
        type: Date,
        default: Date.now
    }
     })
    const data = new  mongoose.model("result",schema)

     const createDocument = async () =>{
        try {
            const collector = new data ({
                name:"hawkeye",
                email:"hzdkv@example.com",
                videos:"123",
                number:"1234567890"
               })
                
                const datacollection =  await  collector.save()
                console.log(datacollection)
        }catch(err) {
            console.log(err)
        }
       
    }
  

    createDocument();