var products=[];
var cart=[];
var pid=0;
var panel=document.getElementById("prpanel");
var panellink=document.getElementById("panellink");
var list=document.getElementById("list");

var d=JSON.parse(localStorage.getItem("shopper"));
for(var i=0;i<d.length;i++)
{
	var k=new Object();
	
	k.id=d[i].id;
	pid=d[i].id;
	k.name=d[i].name;
	k.desc=d[i].desc;
	k.price=d[i].price;
	k.quant=d[i].quant;
	console.log(k);
	products.push(k);
	ndom(k);
	
}
pid++;

var d1=JSON.parse(localStorage.getItem("cart"));
for(var i=0;i<d1.length;i++)
{
	var k=new Object();
	
	k.id=d1[i].id;
	k.name=d1[i].name;
	k.desc=d1[i].desc;
	k.price=d1[i].price;
	k.quant=d1[i].quant;
	cart.push(k);
	
}
	
function hideAddNewProductLink()
{
   panellink.setAttribute("style","visibility:hidden");
}

function unHideAddNewProductLink()
{
   panellink.setAttribute("style","visibility:visible");
}
function insertBlankLine(targetElement)
{
	var br = document.createElement("br");
    targetElement.appendChild(br);
}
function paneldom()
{
	hideAddNewProductLink();

	/* Label - Product Quantity */ 
	var lblAddProduct = document.createElement("h3");
	lblAddProduct.innerHTML = "Add New Product";
	lblAddProduct.setAttribute("style","font-weight:bold ");
    panel.appendChild(lblAddProduct);

	//insertBlankLine(panel);
	//insertBlankLine(panel);
	
	/* TextBox - Product Name */ 
	var txtProductName = document.createElement("input");
	txtProductName.setAttribute("type","text");
	txtProductName.setAttribute("id","name");
	txtProductName.setAttribute("class","textbox");
    txtProductName.setAttribute("placeholder", "Enter the product name");	
	txtProductName.setAttribute("style","width:250px");
	panel.appendChild(txtProductName);	
	
	insertBlankLine(panel);
	insertBlankLine(panel);
	
	/* TextBox - Product Description */ 
	var txtProductDesc = document.createElement("input");
	txtProductDesc.setAttribute("id","desc");
	txtProductDesc.setAttribute("class","textbox");
    txtProductDesc.setAttribute("placeholder", "Enter the product description");	
	txtProductDesc.setAttribute("style","width:250px");
	panel.appendChild(txtProductDesc);	
	
	insertBlankLine(panel);
	insertBlankLine(panel);

	/* TextBox - Product Price */ 
	var txtProductPrice = document.createElement("input");
	txtProductPrice.setAttribute("type","text");
	txtProductPrice.setAttribute("id","price");
	txtProductPrice.setAttribute("class","textbox");
    txtProductPrice.setAttribute("placeholder", "Enter the product price");	
	txtProductPrice.setAttribute("style","width:250px");
	panel.appendChild(txtProductPrice);	
	
	insertBlankLine(panel);
	insertBlankLine(panel);
	
	/* TextBox - Product Quantity */ 
	var txtProductQuantity = document.createElement("input");
	txtProductQuantity.setAttribute("type","text");
	txtProductQuantity.setAttribute("id","quant");
	txtProductQuantity.setAttribute("class","textbox");
    txtProductQuantity.setAttribute("placeholder", "Enter the product quantity");	
	txtProductQuantity.setAttribute("style","width:250px");
	panel.appendChild(txtProductQuantity);	
	
	insertBlankLine(panel);
	insertBlankLine(panel);
	
	/* Button - Add Product */ 
	var btnAddButton = document.createElement("button");
	btnAddButton.setAttribute("id","btnAddButton");
	btnAddButton.setAttribute("class","btn");
	btnAddButton.innerHTML = "Add Product";
	panel.appendChild(btnAddButton);		
		
    btnAddButton.addEventListener("click", function(event)
											{
												addtojson();
												deleteNewProductPanel();
											}
								 );	
	
   
}
function addtojson()
{
	var ob= new Object();
	ob.id=pid;
	ob.name=document.getElementById("name").value;
	if(ob.name.length==0)
	{unHideAddNewProductLink();
      alert("Name cant be left empty");
		return;}
	ob.desc=document.getElementById("desc").value;
	if(ob.desc.length==0)
	{unHideAddNewProductLink();
      alert("desc cant be left empty");
		return;}
	ob.price=document.getElementById("price").value;
	if(ob.price.length==0)
	{unHideAddNewProductLink();
      alert("price cant be left empty");
		return;}
	ob.quant=parseInt(document.getElementById("quant").value,10);
	if(ob.price.length==0)
	{unHideAddNewProductLink();
      alert("quant cant be left empty");
		return;}
	var f=pid;
	pid++;
	products.push(ob);
	 var jso=JSON.stringify(products);
     localStorage.setItem("shopper",jso);
    addtolist(f);	 
}
function addtolist(f)
{
	//console.log(f+"thid");
	var pr=document.createElement("div");
	pr.setAttribute("id",f);
	pr.setAttribute("class","item");
	// adding name
	var n=document.createElement("h4");
	var d=document.getElementById("name").value;
	var c=document.createTextNode(d);
	n.appendChild(c);
	
	//pr.appendChild(n);
	
	var n1=document.createElement("h4");
	var f=document.getElementById("desc").value;
	var c1=document.createTextNode("         ---"+f+"             ---");
	n.appendChild(c1);
	
	//pr.appendChild(n1);
	
	var n12=document.createElement("h4");
	var t=document.getElementById("price").value;
	var c12=document.createTextNode(t+"             ---");
	n.appendChild(c12);
	
	//pr.appendChild(n12);
	
	var n13=document.createElement("h4");
	var k=document.getElementById("quant").value;
	var c13=document.createTextNode(k);
	n.appendChild(c13);
	
	
	var delet = document.createElement("button");
	delet.setAttribute("id","delet");
	delet.setAttribute("class","sbtn");
	delet.innerHTML = "DELETE";
	
	var update = document.createElement("button");
	update.setAttribute("id","update");
	update.setAttribute("class","sbtn");
	update.innerHTML = "update";
	
	var cart = document.createElement("button");
	cart.setAttribute("id","cart");
	cart.setAttribute("class","sbtn");
	cart.innerHTML = "ADD CART";
	
	n.appendChild(delet);
	n.appendChild(update);
	n.appendChild(cart);
	pr.appendChild(n);	
    delet.addEventListener("click", function(event)
											{
											var targetParent = event.target.parentNode.parentNode;
										   var i= parseInt(targetParent.id); 
										   
										   del(targetParent);
										   rmar(i);										   
										   
											}
								 );	
								 
								 
	update.addEventListener("click", function(event)
											{
												var targetParent = event.target.parentNode.parentNode;
										   var i= parseInt(targetParent.id); 
										       var t=geti(i);
											   paneldom1(targetParent);
												//updom(targetParent);
											}
								 );	
	
	cart.addEventListener("click", function(event)
											{
												var targetParent = event.target.parentNode.parentNode;
										   var i= parseInt(targetParent.id); 
										   console.log(i);
										        addtocart(i);
												
											}
								 );
	
	
	list.appendChild(pr);
	unHideAddNewProductLink();
}

function deleteNewProductPanel()
{
   var childNodes = panel.childNodes;
   for (var i = 0; childNodes.length > 0;) 
   {
     panel.removeChild(childNodes[i]);
   }
}
function geti(id) 
{
    for (var i = 0; i < products.length; i++) 
	{
        if (products[i].Id == id) 
			return i;
    }
}
 

function updom(p)
{
	var a=p.childNodes[0];
	p.removeChild(a);
	
	f=parseInt(p.id);
	
	var n=document.createElement("h4");
	var d=document.getElementById("name").value;
	if(d.length==0)
	{
		return ;
	}
	var c=document.createTextNode(d);
	n.appendChild(c);
	
	//pr.appendChild(n);
	
	var n1=document.createElement("h4");
	var f=document.getElementById("desc").value;
	var c1=document.createTextNode("             ---"+f+"             ---");
	n.appendChild(c1);
	
	//pr.appendChild(n1);
	
	var n12=document.createElement("h4");
	var t=document.getElementById("price").value;
	var c12=document.createTextNode(t+"             ---");
	n.appendChild(c12);
	
	//pr.appendChild(n12);
	
	var n13=document.createElement("h4");
	var k=document.getElementById("quant").value;
	var c13=document.createTextNode(k+"             ");
	n.appendChild(c13);
	
	
	var delet = document.createElement("button");
	delet.setAttribute("id","delet");
	delet.setAttribute("class","sbtn");
	delet.innerHTML = "DELETE";
	
	var update = document.createElement("button");
	update.setAttribute("id","update");
	update.setAttribute("class","sbtn");
	update.innerHTML = "update";
	
	var cart = document.createElement("button");
	cart.setAttribute("id","cart");
	cart.setAttribute("class","sbtn");
	cart.innerHTML = "ADD CART";
	
	n.appendChild(delet);
	n.appendChild(update);
	n.appendChild(cart);
	p.appendChild(n);	
    delet.addEventListener("click", function(event)
											{
											var targetParent = event.target.parentNode.parentNode;
										   var i= parseInt(targetParent.id); 
										   var t=geti(i);
										   del(targetParent);
										   rmar(i);										   
										   
											}
								 );	
								 
								 
	update.addEventListener("click", function(event)
											{
												
												var targetParent = event.target.parentNode.parentNode;
										   var i= parseInt(targetParent.id); 
										       var t=geti(i);
											   paneldom1(targetParent);
												
											}
								 );	
	
	cart.addEventListener("click", function(event)
											{
												var targetParent = event.target.parentNode.parentNode;
										   var i= parseInt(targetParent.id); 
										   console.log(i);
										        addtocart(i);												
											}
								 );
								 
								 
	
	
	unHideAddNewProductLink();
}
function upar(t)
{
	var i=0;
	for(var i=0;i<products.length;i++)
	{
		if(products[i].id==t){
			break;
		}
	}
	console.log(products[t]+"   "+t);
	products[i].name=document.getElementById("name").value;
	products[i].desc=document.getElementById("desc").value;
	products[i].price=document.getElementById("price").value;
	products[i].quant=document.getElementById("quant").value;
	
	var k=-1;
	for(k=0;k<cart.length;k++)
	{
		if(cart[i].id==t){
			break;
		}
	}
	
	cart[i].name=document.getElementById("name").value;
	cart[i].desc=document.getElementById("desc").value;
	cart[i].price=document.getElementById("price").value;
	//cart[i].quant=document.getElementById("quant").value;
	
	var jso=JSON.stringify(products);
     localStorage.setItem("shopper",jso);
	 
	 var jso1=JSON.stringify(cart);
     localStorage.setItem("cart",jso1);
}

function paneldom1(tp)
{
	hideAddNewProductLink();

	/* Label - Product Quantity */ 
	var lblAddProduct = document.createElement("h3");
	lblAddProduct.innerHTML = "Add New Product";
	lblAddProduct.setAttribute("style","font-weight:bold ");
    panel.appendChild(lblAddProduct);

	//insertBlankLine(panel);
	//insertBlankLine(panel);
	
	/* TextBox - Product Name */ 
	var txtProductName = document.createElement("input");
	txtProductName.setAttribute("type","text");
	txtProductName.setAttribute("id","name");
	txtProductName.setAttribute("class","textbox");
    txtProductName.setAttribute("placeholder", "Enter the product name");	
	txtProductName.setAttribute("style","width:250px");
	panel.appendChild(txtProductName);	
	
	insertBlankLine(panel);
	insertBlankLine(panel);
	
	/* TextBox - Product Description */ 
	var txtProductDesc = document.createElement("input");
	txtProductDesc.setAttribute("id","desc");
	txtProductDesc.setAttribute("class","textbox");
    txtProductDesc.setAttribute("placeholder", "Enter the product description");	
	txtProductDesc.setAttribute("style","width:250px");
	panel.appendChild(txtProductDesc);	
	
	insertBlankLine(panel);
	insertBlankLine(panel);

	/* TextBox - Product Price */ 
	var txtProductPrice = document.createElement("input");
	txtProductPrice.setAttribute("type","text");
	txtProductPrice.setAttribute("id","price");
	txtProductPrice.setAttribute("class","textbox");
    txtProductPrice.setAttribute("placeholder", "Enter the product price");	
	txtProductPrice.setAttribute("style","width:250px");
	panel.appendChild(txtProductPrice);	
	
	insertBlankLine(panel);
	insertBlankLine(panel);
	
	/* TextBox - Product Quantity */ 
	var txtProductQuantity = document.createElement("input");
	txtProductQuantity.setAttribute("type","text");
	txtProductQuantity.setAttribute("id","quant");
	txtProductQuantity.setAttribute("class","textbox");
    txtProductQuantity.setAttribute("placeholder", "Enter the product quantity");	
	txtProductQuantity.setAttribute("style","width:250px");
	panel.appendChild(txtProductQuantity);	
	
	insertBlankLine(panel);
	insertBlankLine(panel);
	
	/* Button - Add Product */ 
	var btnAddButton = document.createElement("button");
	btnAddButton.setAttribute("id","btnAddButton");
	btnAddButton.setAttribute("class","btn");
	btnAddButton.innerHTML = "UPDATE";
	panel.appendChild(btnAddButton);		
		
    btnAddButton.addEventListener("click", function(event)
											{
												updom(tp);
												var i= parseInt(tp.id); 
										       var t=geti(i);
											   console.log(i);
												upar(i);
												deleteNewProductPanel();
												
											}
								 );	
	
   
}
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
	console.log(k.quant);
	var n13=document.createElement("h4");
	var k=k.quant;
	var c13=document.createTextNode(k);
	n.appendChild(c13);
	
	
	var delet = document.createElement("button");
	delet.setAttribute("id","delet");
	delet.setAttribute("class","sbtn");
	delet.innerHTML = "DELETE";
	
	var update = document.createElement("button");
	update.setAttribute("id","update");
	update.setAttribute("class","sbtn");
	update.innerHTML = "update";
	
	var cart = document.createElement("button");
	cart.setAttribute("id","cart");
	cart.setAttribute("class","sbtn");
	cart.innerHTML = "ADD CART";
	
	n.appendChild(delet);
	n.appendChild(update);
	n.appendChild(cart);
	pr.appendChild(n);	
    delet.addEventListener("click", function(event)
											{
											var targetParent = event.target.parentNode.parentNode;
										   var i= parseInt(targetParent.id); 
										   
										   del(targetParent);
										   rmar(i);										   
										   
											}
								 );	
								 
								 
	update.addEventListener("click", function(event)
											{
												var targetParent = event.target.parentNode.parentNode;
										   var i= parseInt(targetParent.id); 
										       var t=geti(i);
											   paneldom1(targetParent);
												//updom(targetParent);
											}
								 );	
	
	cart.addEventListener("click", function(event)
											{
												var targetParent = event.target.parentNode.parentNode;
												
										   var i= parseInt(targetParent.id); 
										   console.log(targetParent);
										        addtocart(i);
                                               												
											}
								 );
	
	
	list.appendChild(pr);
	unHideAddNewProductLink();
}

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
function del(t)
{
	var d=t.parentNode;
	d.removeChild(t);
	
}


function rmar(t)
{
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
}	