const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

const postRegister = async (req,res)=>{
    try {

        const {username,mail,password} = req.body;

        const userExists = await User.exists({
            mail: mail.toLowerCase()
        });

        if(userExists) {
            return res.status(400).send("E-mail already in use.");
        }

        // encrypt password
        const encryptedPassword = await bcrypt.hash(password,10);

        //creating the user and save the created model

        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword
        });

        // created JWT token
        const token = jwt.sign(
            {
                userId: user._id,
                mail:mail
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: '24h'
            }
        );

        res.status(201).json({
            userDetails : {
                mail: user.mail,
                token:token,
                username: user.username, 
            }
        })

        // res.send("Register Route")
    }
    catch(err)
    {
        return res.status(500).send("Error occured. Please Try Again!")
    }
}

module.exports = postRegister;