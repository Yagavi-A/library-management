const express = require("express")
const {User} = require("./mongo")
const cors = require("cors")
const apps = express()
apps.use(express.json())
apps.use(cors())

apps.get("/",cors(),(req,res) => {

})

apps.post("/", async (req,res) => {
    const {name,email,password} = req.body

    try{
        const check = await User.findOne({email:email})
        if(check) {
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    } catch(e){
        res.json("fail")
    }
});

apps.get("/users", async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json({ error: "Failed to fetch users" });
    }
  });

  apps.post("/signup", async (req, res) => {
    const { name, email, password } = req.body
  
    try {
      const check = await User.findOne({ email: email })
  
      if (check) {
        res.json("exist")
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        await newUser.save();
        res.json("notexist");
      }
  
    } catch (e) {
      res.json("fail")
    }
  
  })

  apps.listen(8000, () => {
    console.log("Port Connected");
  });