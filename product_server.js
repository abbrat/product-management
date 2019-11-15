var express=require("express")
var app =express();
var products=[];







app.use(function(req,res,next){
	console.log("server initialised"+products);
	next();
});
var fs=require("fs");
app.use(express.json());
app.use(express.urlencoded({isextended:false}));
app.use(express.static("public"));
app.get("/",function(req,res){
	res.send("product managment project");
});

app.post("/addProduct",function(req,res){


   var bdata = req.body;
	fs.readFile("file.txt",(err,data)=>{
		if(err)
		{
			console.log(err);
		}
		else
		{
			var pdata = JSON.parse(data);
			pdata.push(bdata[0]);
			
			
			
			// console.log(data.toString());
			fs.writeFile("file.txt",JSON.stringify(pdata),(err)=>{
			if(err)
			{
				console.log(err);
			}
			else
			{
				res.send("appended");
			}
		})
		}
		
	});

});

/*app.get("/pp",function(req,res){
	var data=req.query;
	console.log(data);
	res.send("hiiii");
});*/
app.get("/getProducts",function(req,res){
	
});


app.listen(3000,function(error){
console.log(error,"start at 3000");
fs.readFile("file.txt",(err,data)=>{
		if(err)
		{
			console.log(err);
		}
		else
		{
			products= JSON.parse(data);
			console.log(products.length);
		}
		
      });
		
		
     

});