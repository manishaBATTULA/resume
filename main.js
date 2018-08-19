/*function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/jsoin");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
json("data.json",function(text){
	let d=JSON.parse(text);
	console.log(d);
	basics(d.basicdetails);
	edu(d.education);
	techskills(d.skills);
	carr(d.carrier);
	ache(d.achivements);
	desc(d.description);

})*/
//fetch API
fetch("data.json")
.then(function(response){
	return response.json();
})
.then(function(d){
	console.log(d);
	basics(d.basicdetails);
	edu(d.education);
	techskills(d.skills);
	carr(d.carrier);
	ache(d.achivements);
	desc(d.description);
})

 var main=document.querySelector(".first");
 var l=document.createElement("div");
 l.classList.add("left");
 l.setAttribute("id","nirula");
 main.appendChild(l);
 function basics(basic){

	var i=document.createElement("img");
	i.src=basic.image;
	l.appendChild(i);
	var nam=document.createElement("h3");
	nam.textContent=basic.name;
	l.appendChild(nam);
	var ema=document.createElement("h4");
	ema.textContent=basic.email;
	l.appendChild(ema);
	var pho=document.createElement("h5");
	pho.textContent=basic.phone;
	l.appendChild(pho);
	var add=document.createElement("h6");
	add.textContent=basic.address;
	l.appendChild(add);
}
 
 var r=document.createElement("div");
 r.classList.add("right");
 main.appendChild(r);

 function edu(e){
 		var e1=document.createElement("div");
 		e1.classList.add("educa");
 		r.appendChild(e1);
 		var head=document.createElement("h2");
 		head.textContent="Educational Details";
 		e1.appendChild(head);
 		head.appendChild(document.createElement("HR"));
 		for(var i=0;i<e.length;i++){
 			var h=document.createElement("h2");
 			h.textContent=e[i].course;
 			e1.appendChild(h);
 			var u=document.createElement("ul");
 			e1.appendChild(u);
 			var list=document.createElement("li");
 			list.textContent=e[i].college;
 			u.appendChild(list);
			var list1=document.createElement("li");
 			list1.textContent=e[i].percantage;
 			list.appendChild(list1);

 		}
 }
 function techskills(s){
 	var d=document.createElement("div");
 	d.textContent="skills set";
 	r.appendChild(d);
 	var tab=document.createElement("table");
 	var row="";
 	for(i=0; i<s.length;i++)
 	{
 		row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
 	}
 	tab.innerHTML=row;
 	d.appendChild(tab);
 }
 function carr(car){
 	var c1=document.createElement("div");
 	r.appendChild(c1);
 	var h1=document.createElement("h1");
 	h1.textContent="carrier objectives";
 	c1.appendChild(h1);
 	h1.appendChild(document.createElement("HR"));
 	var para=document.createElement("p");
 	para.textContent=car.ca;
 	c1.appendChild(para);

 }
 function ache(a){
 	 var d=document.createElement("div");
 	 d.setAttribute("id","Achivement");
 	 r.appendChild(d);
 	 var h=document.createElement("h2");
 	 h.textContent="Achievement";
 	 d.appendChild(h);
 	 h.appendChild(document.createElement("HR"));
 	 for(i in a){
 	 	var u=document.createElement("u1");
 	 	d.appendChild(u);
 	 	var list=document.createElement("li");
 	 	list.textContent=a[i];
 	 	u.appendChild(list);
 	 }
 }
 function desc(D)
 {
 	var c1=document.createElement("div");
 	r.appendChild(c1);
 	var h1=document.createElement("h1");
 	h1.textContent="description";
 	c1.appendChild(h1);
 	h1.appendChild(document.createElement("HR"));
 	var para=document.createElement("h3");
 	para.textContent=D.de;
 	c1.appendChild(para);
 	}