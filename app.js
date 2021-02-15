//require mongoose
const mongoose = require ('mongoose')

//connecting mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB",
{useNewUrlParser:true,   //to remove warnings
    useUnifiedTopology:true,
    useFindAndModify:false  //used for CRUD operations
}
)
.then(() => console.log("Connection established"))  //promise
.catch(() =>console.log("Error , Not Connecting"))

//creating schema
const stuSchema= new mongoose.Schema(
    {
        name: {type:String,              //validation
                required:true},
        course: String,
        duration:Number,
        reg:Boolean,
        date:{type:Date, default: Date.now},
    }
);
//model used to create collection
const Student = new mongoose.model("Student",stuSchema); //in cmd on showing collections students(plural) appear, but in visual studio make model name singular with fist lettercapital letter 
//Creating document
const data1 =new Student(
{
    name: "simran",
    course: "mtech",
    duration: 2,
    reg:true
});
const data2 =new Student(
    {
        name: "ankit",
        course: "bcom",
        duration: 3,
        reg:true
    });
const data3 =new Student(
        {
            name: "aish",
            course: "mca",
            duration: 3,
            reg:true
        });
const data4 =new Student(
            {
                name: "unnati",
                course: "bba",
                duration: 2,
                reg:true
            });
        //To sore one record write below 3 lines

//data1.save()
//.then((doc) =>console.log("Document Created!"))
//.catch((err) => console.log(err))

//To store multiple records
//Student.insertMany([data2,data3,data4])
//.then((doc)=> console.log("All data inserted successfully"))
//.catch((err)=>console.log("Error in insertion"));

//to  check data inserted
//Student.find()
//.then((doc)=> console.log((doc)))
//.catch((err)=>console.log("Error in insertion"));

//Student.findByIdAndUpdate('6022c313cab05407a4d4e7d5',{duration:2})
//.then((doc)=> console.log(doc))
//.catch((err)=>console.log("Error in updation"));


Student.findByIdAndDelete('6022c399c8141435b00f7afb')
.then((doc)=> console.log(doc))
.catch((err)=>console.log("Error in updation"));