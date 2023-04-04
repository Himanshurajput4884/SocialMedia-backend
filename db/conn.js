const mongoose = require("mongoose");



mongoose.connect(process.env.DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    strictQuery: true,
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})