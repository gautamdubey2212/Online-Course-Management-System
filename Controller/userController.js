const bcryptjs = require('bcryptjs');
const usermodel = require('../Model/userModel');

const RegForm = (req,resp)=>{
    resp.render("register")
};

const register = async(req,resp)=>{
    try {
        const{Fname,Email,Password} = req.body;
        const hashPassword = await bcryptjs.hash(Password,10);
        await usermodel.create({Fname,Email,Password:hashPassword});
        resp.redirect("/login");
    } catch(error) {
        console.log(error);
    }
};

const logForm = (req,resp)=>{
    resp.render("login")
};

const login = async(req,resp)=>{
    try {
        const{Email,Password} = req.body;
        const user = await usermodel.findOne({ Email });
        if(user && await bcryptjs.compare(Password,user.Password)) {
            req.session.Email = user.Email;
            req.session.Fname = user.Fname;
            resp.redirect("/dashboard");
        }
    } catch(error) {
        console.log(error);
    }
};

const dashboard = (req, resp) => {
    if (req.session.Email) {
        resp.render("dashboard", {
            Fname: req.session.Fname
        });
    } else {
        resp.redirect("/login");
    }
};
const logout = (req, resp) => {
    req.session.destroy((err) => {
        if (err) {
            return resp.send("Logout Failed");
        }

        resp.redirect("/login");
    });
};

module.exports = {RegForm,register,logForm,login,dashboard,logout};