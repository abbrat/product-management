function itemQuant(tp)
{
	var f=document.getElementById(tp);
	var par=f.childNodes[0];
	var child=f.childNodes[0].childNodes[3];
     var i=0;
	for(i=0;i<products.length;i++)
	{
		if(products[i].id==tp){
			break;
		}
	}
	var l=products[i].quant;
	

     l=l-1;
	 var x=document.createTextNode(l);
	 console.log(x);
	 par.replaceChild(x,child);
	 products[i].quant=l;
	 
	 var jso=JSON.stringify(products);
     localStorage.setItem("shopper",jso);
	// var
	
}


function addtocart(t)
{
	var i=0;
	for(var i=0;i<products.length;i++)
	{
		if(products[i].id==t){
			break;
		}
	}
	
    var s=new Object();
	s.id=products[i].id;
	s.name=products[i].name;
	s.desc=products[i].desc;
	s.price=products[i].price;
	s.quant=1;
	var l=products[i].quant;
	if(l==0)
	{
		alert("ITEM IS OUT OF STOCK");
		return ;
	}
	//alert(cart.length);
	for(var  u=0;u<cart.length;u++)
	{
		if(cart[u].id==t)
		{
			cart[u].quant=cart[u].quant+1;
			var jso=JSON.stringify(cart);
            localStorage.setItem("cart",jso);
			 itemQuant(t);
			return;
		}
	}
	cart.push(s);
	var jso=JSON.stringify(cart);
     localStorage.setItem("cart",jso);
	 alert(s.name+" added to cart");
	
	 itemQuant(t);
}
