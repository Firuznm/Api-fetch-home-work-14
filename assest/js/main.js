
let getDataBtn=document.getElementById("getDataBtn");
let catrsWrapp=document.querySelector(".carts-wrapp");


getDataBtn.addEventListener("click",function(){
	fetch('https://fakestoreapi.com/products')
	.then(res=>res.json())
	.then(datas=>
		datas.map(element => {
			console.log(element);
			catrsWrapp.innerHTML +=
		  	`
			  <div class="cart">
			  <img src="${element.image}" alt=""> 
			  <div class="pr-info">
			  <h5 class="pr-title">${element.title}</h5>
			 <h5 class="pr-category">Category : ${element.category}</h5>
			<p class="pr-description">${element.description}</p>
			 <span class="pr-price">price : ${element.price}$</span>
		 </div>
		 </div>
			`
		})
		 )
})
