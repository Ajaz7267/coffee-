// Add the coffee to local storage with key "coffee"

    // let data =document.getElementById("menu");

    const url =`https://masai-mock-api.herokuapp.com/coffee/menu`
 
  fetch(url).then(function (res){
      return res.json();
      
  })
  .then(function (res){
      console.log(res.menu.data)
    append(res.menu.data)
    // return res.data;
  })
  .catch(function(err){
  console.log( err);
});


    let cartData = JSON.parse(localStorage.getItem("coffee"))||[];

function append(data){
    
    data.forEach(function (el){

        let box =document.createElement("div");

        // box.innerHTML=el.div;
        let image = document.createElement("img");
        image.src =el.image;

        let title =document.createElement("h3");
        title.innerText=el.title;

        let p = document.createElement("p");
        p.innerText = el.price;

        let btn =document.createElement("button");
        btn.setAttribute("id","add_to_bucket");
        btn.innerText ="Add to bucket";
        btn.addEventListener("click", function(){
            AddtoBucket(el);
        });
        box.append(image,title,p,btn);
        document.getElementById("menu").append(box);
    });
    function AddtoBucket(el){
        console.log(el);
        cartData.push(el);
        localStorage.setItem("coffee",JSON.stringify(cartData));
        // alert("Food ord/")
    }
}