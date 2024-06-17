const User = require('../Models/User.models')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup =  async(req,res)=>{
    try{
        const{UserId, Name,Email,Password,Role} = req.body;
        const emailExist = await User.findOne({ Email }) ;
        if(emailExist) {
            return res.status(400).json({ error: " Email already Exists"});
        }
    const passwordHash = await bcrypt.hash(Password, 10);
    const newUser = new User({UserId,Name,Email,Password:passwordHash,Role})
    
    const saveUser = await newUser.save();

    res.status(201).json(saveUser);
    } catch (error){
        res.status(400).json({error: error.message})
    }
}


const login = async (req, res, next) => {
  // get email and password from body
  const { Email, Password } = req.body;

  try {
    // check email exist
      const user = await User.findOne({Email})
      if(!user){
        return res.status(400).json({ error: " User is not found"})
      }

      // check password
      const match = await bcrypt.compare(Password, user.Password)
      if(!match){
        return res.status(400).json({error:"password invalid"})
      }
      
      // create token
      const token= jwt.sign({id:User._id},process.env.JWT,{expiresIn:'1h'}) 
      res.status(200).json({token, user})

    } catch (error) {
      console.log(error)
      res.status (500).json({sucess:false, error})
    }
  };

module.exports = {signup,login}

