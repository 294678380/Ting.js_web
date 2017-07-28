const express = require("express");
const ting = require("ting.js");
const path = require("path");
var app = express();
var routes = require("./routes.js");
var _package = require("./package.json");
//模板引擎
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));
//静态文件
app.use(express.static(path.join(__dirname,"static")));
//routes
var ting_fn = function(init){
	init(routes);
}
ting(app,ting_fn,_package);
//listen
app.listen(80,function(){
	console.log("server started 80port");
});