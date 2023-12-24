let product_name=document.getElementById('product_name')
let price=document.getElementById('price')
let taks=document.getElementById('taks')
let ads=document.getElementById('ads')
let discount=document.getElementById('discount')
let sum=document.getElementById('sum')
let Extension=document.getElementById('Extension')
let deadline=document.getElementById('deadline')
let search=document.getElementById('search')
let products=document.getElementById('tbody')
let mood="Confirm"
let searchmood='title'

//console.log(product_name,price,taks,ads,discount,sum)
function gettotal(){
    if(price.value!=''){

        taks.value=price.value*0.1;
        ads.value=price.value*0.02;
        discount.value=price.value/20;
        sum.innerHTML=(+price.value+ +taks.value+ +ads.value)- +discount.value;
        sum.style.backgroundColor="green"
    }
    else{
        sum.innerHTML='Total'
        sum.style.backgroundColor="red"
    }
}
let newproducts
if(localStorage.product!=null){
    newproducts=JSON.parse(localStorage.product)
}
else{
    newproducts=[]
}
function addproduct(){
    let product={
        product_name:product_name.value,
        price:price.value,
        taks:taks.value,
        ads:ads.value,
        discount:discount.value,
        sum:sum.innerHTML,
        Extension:Extension.value,
        deadline:deadline.value,
    }
    if(mood==='Confirm'){
        if(product.Extension>1){
            for(let i=0;i<product.Extension;i++){
                newproducts.push(product)
            }
                }
                else{
                    newproducts.push(product)
                }
    }
    else{
        newproducts[temp]=product
        mood='Confirm'
        document.getElementById('Confirm').innerHTML='Confirm'
        Extension.style.display='block'
    }
    


localStorage.setItem('product',JSON.stringify(newproducts))
//console.log(newproducts)
cleardata()
showdata()
}
function cleardata(){
    product_name.value=''
    price.value=''
        taks.value=''
        ads.value=''
        discount.value=''
        sum.innerHTML='Total'
        Extension.value=''
        deadline.value=''
}
function showdata(){
    let table='';
    for(let i=0;i<newproducts.length;i++){
    table+=`<tr>
    <td>${i}</td>
    <td>${newproducts[i].product_name}</td>
    <td>${newproducts[i].price}</td>
    <td>${newproducts[i].taks}</td>
    <td>${newproducts[i].ads}</td>
    <td>${newproducts[i].discount}</td>
    <td>${newproducts[i].sum}</td>
    <td>${newproducts[i].deadline}</td>
    <td><button onclick="updatedata(${i})" id="update">Update</button></td>
    <td><button onclick="deletedata(${i})" id="delete">Delete</button></td>
                </tr>`
    //console.log(table)
    }
    products.innerHTML=table
    let deleteall=document.getElementById('deleteall')
    if(newproducts.length>0){
      deleteall.innerHTML=`
      <button onclick="deleteall1()">Delete all</button>
      `
    }
    else{
        deleteall.innerHTML='';
    }
}
showdata()
function deletedata(i){
    newproducts.splice(i,1);
    localStorage.product=JSON.stringify(newproducts)
    showdata();
}
function deleteall1(){
    localStorage.clear()
    newproducts.splice(0)
    showdata()
}
function updatedata(i){
    product_name.value=newproducts[i].product_name
    price.value=newproducts[i].price
    taks.value=newproducts[i].taks
    ads.value=newproducts[i].ads
    discount.value=newproducts[i].discount
    gettotal()
    Extension.style.display='none'
    deadline.value=newproducts[i].deadline
    document.getElementById('Confirm').innerHTML='Update'
    mood='update'
    temp=i;
}
function getsearchmood(id){
    let search=document.getElementById('search')
    
    if(id==='searchdeadline'){
searchmood='category'
search.placeholder="search by deadline"
    }
    else{
        searchmood='title'
search.placeholder="search by title"
    }
    search.focus()
    search.value=''
}
function searchfunc(value){
    let table=''
if(searchmood=='title'){
for(let i=0;i<newproducts.length;i++){
if(newproducts[i].product_name.includes(value)){
    table+=`<tr>
    <td>${i}</td>
    <td>${newproducts[i].product_name}</td>
    <td>${newproducts[i].price}</td>
    <td>${newproducts[i].taks}</td>
    <td>${newproducts[i].ads}</td>
    <td>${newproducts[i].discount}</td>
    <td>${newproducts[i].sum}</td>
    <td>${newproducts[i].deadline}</td>
    <td><button onclick="updatedata(${i})" id="update">Update</button></td>
    <td><button onclick="deletedata(${i})" id="delete">Delete</button></td>
                </tr>`
}

}

}
else{
    for(let i=0;i<newproducts.length;i++){
        if(newproducts[i].deadline.includes(value)){
            table+=`<tr>
            <td>${i}</td>
            <td>${newproducts[i].product_name}</td>
            <td>${newproducts[i].price}</td>
            <td>${newproducts[i].taks}</td>
            <td>${newproducts[i].ads}</td>
            <td>${newproducts[i].discount}</td>
            <td>${newproducts[i].sum}</td>
            <td>${newproducts[i].deadline}</td>
            <td><button onclick="updatedata(${i})" id="update">Update</button></td>
            <td><button onclick="deletedata(${i})" id="delete">Delete</button></td>
                        </tr>`
        }
        
        }
}
products.innerHTML=table
}



function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }





