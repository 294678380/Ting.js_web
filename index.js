const express = require("express");
const ting = require("ting.js");
const path = require("path");
var app = express();
var routes = require("./routes.js");
var _package = require("./package.json");
global.apps = {
	ClientL:1,
	requestIps:[],
	getClientIp:function(req){
			return  req.headers["x-forwarded-for"]||
					req.connection.remoteAddress ||
					req.soket.remoteAddress ||
					req.connection.socket.remoteAddress;
	}
}
//模板引擎
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"./views"));
//静态文件
app.use(express.static(path.join(__dirname,"static")));
//统计
setInterval(function(){
	console.log(apps.ClientL*apps.requestIps.length);
},5000)
app.get("*",function(req,res,next){
	var clientIp = apps.getClientIp(req);
	if(apps.requestIps.indexOf(clientIp) == -1){
		apps.requestIps.push(clientIp);
	}
	if(apps.requestIps.length >= 5000){
		apps.requestIps = [];
		apps.ClientL++;
	}
	next();
});
//routes
var ting_fn = function(init){
	init(routes);
}
ting(app,ting_fn,_package);
//listen
app.listen(80,function(){
	console.log("server started 80port");
});