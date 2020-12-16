const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');
const dividasController = require("../controllers/dividas")

router.get('/login',(req,res,next)=>{
    res.render('login');
})

router.get('/signup',(req,res,next)=>{
    res.render('signup')
})


router.get('/logout',(req,res,next)=>{
    req.logout;
    req.flash('sucess_msg','Foste desconectado!');
    res.redirect('login')
})

router.post('/',dividasController.criar_divida_jeK);

router.post('/',dividasController.criar_divida_Tesoureiro);

router.get("/getall",userControllers.get_all_users);

router.post("/signup",userControllers.signup);

router.post("/login",userControllers.login);

router.delete("/signout",userControllers.signout);


module.exports = router;