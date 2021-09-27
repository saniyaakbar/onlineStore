var arr = [
    {
        Name: "Succulent1",
        Price: "100 Rs",
        Category: "Succulent",
        Image: "https://images.unsplash.com/photo-1494516192674-b82b5f1e61dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
    },

    {
        Name: "Succulent1",
        Price: "20 Rs",
        Category: "Succulent",
        Image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },

    {
        Name: "Succulent3",
        Price: "200 Rs",
        Category: "Succulent",
        Image: "https://images.unsplash.com/photo-1509223197845-458d87318791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },

    {
        Name: "Levender Flower",
        Price: "30 Rs",
        Category: "Flower",
        Image: "https://images.unsplash.com/photo-1528756514091-dee5ecaa3278?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },,

    {
        Name: "Rose Flower",
        Price: "80 Rs",
        Category: "Flower",
        Image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=345&q=80"
    },

    {
        Name: "Sunflower",
        Price: "30 Rs",
        Category: "Flower",
        Image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },

    {
        Name: "Apple Fruit Tree",
        Price: "500 Rs",
        Category: "Fruit",
        Image: "https://images.unsplash.com/photo-1536246297549-267e01fea839?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },

    {
        Name: "Spinach Vegetable Plant",
        Price: "20 Rs",
        Category: "Vegetable",
        Image: "https://images.unsplash.com/photo-1591981093688-28f71b798476?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    }

]

var names = ["Flower", "Succulent", "Vegetable", "Fruit" ];


    var click = document.getElementById("search");
    var all = document.querySelector("#all");
    var input = document.querySelector("input")
    var flowerbtn = document.querySelector("#flowers");
    var succulentbtn = document.querySelector("#succulent");
    var vegetablebtn = document.querySelector("#vegetable");
    var fruitbtn = document.querySelector("#fruit");
    var cart = document.querySelector("#box2");
    var all = document.querySelector("#all");



var count = 0;
var c = 0;
c = sessionStorage.getItem("count");
cart.textContent = `Cart : ${c}`;
console.log(c)
count = c


// cart.textContent = count;
function increaseCount(){
    count++;
    sessionStorage.setItem("count", `${count}`);
    
  
    cart.textContent = `Cart : ${count}`;
    
    
}

function DecreaseCount(){
    
    if(count > 0){
        count--;
    }
    sessionStorage.setItem("count", `${count}`);
    
  
    cart.textContent = `Cart : ${count}`;
    
    
}
function showButtons(){
    var temp1 = ``;
    names.forEach(function(dets, index){
    temp1 += ` <button id = "${index}">${dets}</button>`
    
    })
    document.querySelector("#buttons").innerHTML = temp1
}





function show(param){
    var temp = ``;
    param.forEach(function(val){
        
        temp += `<div id="box">
        <div id="image">
        <img src="${val.Image}" alt="">
        </div>
        <div id="details">
            <h4>${val.Name}</h4>
            <div id = "P">
            <h4>${val.Price}</h4>
            <div class="button" onclick="increaseCount()">
       <h4>+</p> 
</div>
<div id = "Remove" class="button" onclick="DecreaseCount()">
       <h4>-</p> 
</div>
            </div>
            
       
        </div>
       </div>`
       })
       
       document.querySelector("#options").innerHTML = temp;
}





function filterByValue(array, string) {
    return array.filter(o =>
        Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
}

function showFilterElements(){
    document.querySelector("#buttons").addEventListener("click", function(dets1){
        console.log(dets1.target.id)
        console.log(dets1.target.innerText)
        
        
            console.log(filterByValue(arr, `${dets1.target.innerText}`));
    
            arr3 = filterByValue(arr, `${dets1.target.innerText}`)
            show(arr3)
            
        
    })
}



function inputListner(){
    input.addEventListener("input", function(){
        var abc = input.value
    
        arr3 = filterByValue(arr, `${input.value}`) 
        console.log(input.value)
       show(arr3)
    })

    click.addEventListener("click", function(){
        console.log(filterByValue(arr, 'flower'));
        arr3 = filterByValue(arr, `${input.value}`)
        show(arr3)
        
    })
    
    document.addEventListener("keypress", function(dets){
        console.log(dets);
    
        if(dets.key === "Enter"){
    
            arr3 = filterByValue(arr, `${input.value}`)
            show(arr3)
        }
    
    })
}



function allListner(){
    all.addEventListener("click", function(){
    
        show(arr)
    
    })

 
    
    
}

showButtons()
show(arr);
showFilterElements()
inputListner()
allListner()


