const express = require("express");
const { valid } = require("joi");
const router = express.Router();

const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const auth = require("../middlewares/auth")

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required()
});

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    mail: Joi.string().email().required()
});

// Controllers
const authControllers = require("../controllers/auth/authControllers");

router.post("/register",validator.body(registerSchema),authControllers.controllers.postRegister);

router.post('/login',validator.body(loginSchema),authControllers.controllers.postLogin);

//test route to verify if our middleware is working
router.get('/test',auth,(req,res)=>{
    res.send("request passed")
});


module.exports = router;