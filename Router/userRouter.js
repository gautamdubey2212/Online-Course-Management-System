const express = require('express');
const { RegForm, register, logForm, login, dashboard, logout } = require('../Controller/userController');

const routes = express.Router();

routes.get("/",RegForm);
routes.post("/register",register);

routes.get("/login",logForm);
routes.post("/login",login);

routes.get("/dashboard",dashboard);

routes.get("/logout",logout);

module.exports = routes;