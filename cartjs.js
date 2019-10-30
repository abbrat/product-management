var cart=[];
var total=0;
var list=document.getElementById("list");
var d=JSON.parse(localStorage.getItem("cart"));
for(var i=0;i<d.length;i++)
{
	var k=new Object();
	
	k.id=d[i].id;
	pid=d[i].id;
	k.name=d[i].name;
	k.desc=d[i].desc;
	k.price=d[i].price;
	k.quant=d[i].quant;
	total=total+parseInt(k.price);
	//console.log(k.price);
	cart.push(k);                           
	ndom(k);
	
}
console.log(total);

var bill=document.createElement("button");
bill.setAttribute("class","btn");
bill.innerHTML="TOTAL    " +total;
list.appendChild(bill);

var bill1=document.createElement("button");
bill1.setAttribute("class","btn");
bill1.innerHTML="CHECK OUT";
list.appendChild(bill1);
bill1.addEventListener("click", function(event)
											{
											   bil();
											}
								 );


function ndom(k)
{
	//console.log(f+"thid");
	var pr=document.createElement("div");
	pr.setAttribute("id",k.id);
	pr.setAttribute("class","item");
	// adding name
	var n=document.createElement("h4");
	var d=k.name;
	var c=document.createTextNode(d);
	n.appendChild(c);
	
	//pr.appendChild(n);
	
	var n1=document.createElement("h4");
	var f=k.desc;
	var c1=document.createTextNode("         ---"+f+"             ---");
	n.appendChild(c1);
	
	//pr.appendChild(n1);
	
	var n12=document.createElement("h4");
	var t=k.price;
	var c12=document.createTextNode(t+"             ---");
	n.appendChild(c12);
	
	//pr.appendChild(n12);
	
	var n13=document.createElement("h4");
	var y=k.quant;
	var c13=document.createTextNode(y+"             ");
	n.appendChild(c13);
	
	
	
	
	pr.appendChild(n);	
	
	list.appendChild(pr);
	
}


function bil()
{
	var bill=document.createElement("div");
	bill.setAttribute("background","color:white");
	for(var i=0;i<cart.length;i++)
	{
		var item=document.createElement("h4");
		var a=document.createTextNode(cart[i].name+"&nbsp;&nbsp;&nbsp;---&nbsp;&nbsp;&nbsp;"+cart[i].price);
		item.appendChild(a);
		bill.appendChild(item);
	}
	
	var item=document.createElement("h4");
		var a=document.createTextNode("Total"+"                    "+total);
		item.appendChild(a);
		bill.appendChild(item);
		
		
		
		list.appendChild(bill);
	
	
}