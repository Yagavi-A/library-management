const mongoose = require("mongoose");

mongoose .connect("mongodb://0.0.0.0:27017/library-management")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error0) => {
    console.log("MongoDB connection failed",error);
});

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
})

const User = mongoose.model("User", userSchema);

module.exports ={
    User,
};