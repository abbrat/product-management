function del(t)
{
	var d=t.parentNode;
	d.removeChild(t);
	
}


function rmar(t,targetParent)
{
	alert("This product will be deleted from List");
	var i=0;
	for(i=0;i<products.length;i++)
	{
		if(products[i].id==t){
			break;
		}
	}
	//console.log(i);
	var h=0;
	for(h=0;h<cart.length;i++)
	{
		if(cart[h].id==t){
			break;
		}
	}
products.splice(i,1);
cart.splice(h,1);
 var jso=JSON.stringify(products);
     localStorage.setItem("shopper",jso);
	 
	 var jso1=JSON.stringify(cart);
     localStorage.setItem("cart",jso1);
	 
	 del(targetParent);
}	