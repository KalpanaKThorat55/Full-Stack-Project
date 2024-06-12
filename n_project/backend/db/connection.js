const M=require('mongoose')
//M.connect('mongodb://0.0.0.0:27017/user_311_class')
M.connect('mongodb+srv://kundlikthorat55:eC8hKnVaMFG42QD8@cluster0.ks3t7nr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then( ()=>{
    console.log("server is connected to database")
})
.catch( ()=>{
    console.log("database is not connected")
})
