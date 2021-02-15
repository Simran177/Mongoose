//require mongoose
const mongoose = require ('mongoose')

//connecting mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/BloggerDB",
{useNewUrlParser:true,   //to remove warnings
    useUnifiedTopology:true,
    useFindAndModify:false  //used for CRUD operations
}
)
.then(() => console.log("Connection established"))  //promise
.catch(() =>console.log("Error , Not Connecting"))

//creating schema
const people= new mongoose.Schema(
    {
        authorName: {type:String,              //validation
                required:true},
        contentType: String,
        followers:Number,
        fresher:Boolean,
        date:{type:Date, default: Date.now},
    }
);
//model used to create collection
const Posts = new mongoose.model("Posts",people); //in cmd on showing collections students(plural) appear, but in visual studio make model name singular with fist lettercapital letter 
//Creating document
const data1 =new Posts(
{
    authorName: "Simran",
contentType: "story",
followers:1000,
fresher:true,

});
const data2 =new Posts(
    {
        authorName: "Ankit",
    contentType: "comic",
    followers:300,
    fresher:true,
    
    });
    const data3 =new Posts(
        {
            authorName: "Aishu",
        contentType: "fiction",
        followers:2000,
        fresher:false,
        
        });
        const data4 =new Posts(
            {
                authorName: "Shruti",
            contentType: "story",
            followers:500,
            fresher:true,
            
            });
            const data5 =new Posts(
                {
                    authorName: "Saurabh",
                contentType: "news",
                followers:3000,
                fresher:false,
                
                });

 //Posts.insertMany([data2,data3,data4,data5])
//.then((doc)=> console.log("All data inserted successfully"))
//.catch((err)=>console.log("Error in insertion"));

//Posts.find()
//.then((doc)=> console.log((doc)))
//.catch((err)=>console.log("Error in insertion"));

//Posts.findById('6024f019b25ead07a85db770')
//.then((doc)=> console.log((doc)))
//.catch((err)=>console.log("Error"));

//Posts.findByIdAndUpdate('6024f019b25ead07a85db770',{contentType:"article"})
//.then((doc)=> console.log(doc))
//.catch((err)=>console.log("Error in updation"));

//Posts.findByIdAndDelete('6024f09712cdf7229c5a611c')
//.then((doc)=> console.log(doc))
//.catch((err)=>console.log("Error in deletion"));

const dataNew2 =new Posts(
    {
        authorName:"" ,
    contentType: "comic",
    followers:500,
    fresher:true,
    
    });

dataNew2.save()
.then((doc) =>console.log("Document Created!"))
.catch((err) => console.log(err))
