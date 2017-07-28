var Index = require("./class/server/index.class");
var Api = require("./class/server/api.class");
var Ziyuan = require("./class/server/ziyuan.class");
module.exports = [
	{
		brie:"首页",
		desc:"",
		path:"/",
		class:Index,
		rules:[
			{
				brie:"",
				desc:"",
				method:"get",
				path:"/",
				Examination:true,
				controller:["Show"]
			}
		]
	},
	{
		brie:"API",
		desc:"",
		path:"/api",
		class:Api,
		rules:[
			{
				brie:"",
				desc:"",
				method:"get",
				path:"/",
				Examination:true,
				controller:["Show"]
			}
		]
	},
	{
		brie:"资源",
		desc:"",
		path:"/ziyuan",
		class:Ziyuan,
		rules:[
			{
				brie:"",
				desc:"",
				method:"get",
				path:"/",
				Examination:true,
				controller:["Show"]
			}
		]
	}
		
]