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
	var qua=d[i].quant;
	total=total+(parseInt(k.price)*parseInt(qua));
	//console.log(k.price);
	cart.push(k);                           
	ndom(k);
	
}
console.log(total);

var bill=document.createElement("button");
bill.setAttribute("class","btn");
bill.innerHTML="TOTAL    ";
list.appendChild(bill);

var bill1=document.createElement("button");
bill1.setAttribute("class","btn");
bill1.innerHTML=total;
list.appendChild(bill1);

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
	
	var delet = document.createElement("button");
	delet.setAttribute("id","delet");
	delet.setAttribute("class","vsbtn");
	delet.innerHTML = "Remove";
	
	var sp=document.createTextNode("\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0");
	
	
	
	
	n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);
	n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);
	n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);n.appendChild(sp);

	
	
	n.appendChild(delet);
	delet.addEventListener("click", function(event)
											{
											var tp= event.target.parentNode.parentNode;
										    //console.log(tp);
											rmar(parseInt(tp.id));
											tp.parentNode.removeChild(tp);
											}
								 );	
	var plus = document.createElement("button");
	plus.setAttribute("id","add");
	plus.setAttribute("class","vsbtn");
	plus.innerHTML = "+";
	n.appendChild(plus);


	
	var minus = document.createElement("button");
	minus.setAttribute("id","minus");
	minus.setAttribute("class","vsbtn");
	minus.innerHTML = "-";
	n.appendChild(minus);


	
	
	pr.appendChild(n);	
	
	list.appendChild(pr);
	
}
function rmar(k)
{
	var i=0;
	for(i=0;i<cart.length;i++)
	{
		if(cart[i].id==k)
			break;
	}
	cart.splice(i,1);
	var jso=JSON.stringify(cart);
     localStorage.setItem("cart",jso);
}

