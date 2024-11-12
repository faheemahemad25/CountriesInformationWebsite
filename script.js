let countryInput = document.querySelector('#country-inp')
let searchBtn = document.querySelector('#search-btn')
let validationMsg = document.querySelector('form div')


let countryImg =  document.querySelector('.flag')
// let DirectcountryImg =  document.querySelector('.flag img') or direct img src target.

let officialName = document.querySelector('.officialName')
let capital = document.querySelector('.capital')
let continent = document.querySelector('.continent')
let population = document.querySelector('.population')
let currency = document.querySelector('.currency')
let Languages = document.querySelector('.Languages')



searchBtn.addEventListener('click', (e)=>{
    e.preventDefault();
   countInpName = countryInput.value ;
   console.log(countInpName);

   if(countInpName == ""){
    validationMsg.innerHTML = `<p class="validateMsg"> The input filed can not be empty.<p/>`;
   }else if (countInpName.length < 3){
    validationMsg.innerHTML = `<p class="validateMsg"> please enter the valid country name.<p/>`;
   }else if(!isNaN(countInpName)){
    validationMsg.innerHTML = `<p class="validateMsg"> Dont enter the digit.<p/>`;
   }
   else{

    fetchInfo(countInpName);

    validationMsg.innerHTML = "";

   }
   
})

let fetchInfo = async (countryName) =>{
  
    try {
    
     let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
     let response = await fetch(url);
     let data =  await response.json();

     console.log(data);
    //  console.log(data[0]);
    //  console.log(data[0].flags.png);
    //  console.log(data[0].name.official);
    //  console.log(data[0].population);
    //  console.log(data[0].languages); //📗🔖 [object object]
     //console.log(data[0].currencies);//📗🔖 [object object]
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);//📗🔖
    //  console.log(Object.keys(data[0].languages));//📗🔖


     countryImg.innerHTML = `<img src="${data[0].flags.png}"/>`;
    //  DirectcountryImg.src = data[0].flags.png; or this one.
     officialName.innerHTML = data[0].name.official;
     capital.innerHTML = data[0].capital;
     continent.innerHTML = data[0].region;
    population.innerHTML = data[0].population;
    //Languages.innerHTML = data[0].languages; //📗🔖 [object object]
    //currency.innerHTML = data[0].currencies; //📗🔖 [object object]
    currency.innerHTML = data[0].currencies[Object.keys(data[0].currencies)].name; //📗🔖 you will get many keys the last time tell which one so [0]
    Languages.innerHTML = Object.values(data[0].languages); //📗🔖 you will get many keys the last time tell which one so [0]

}
catch{
    // later if error Api give error then how to catch it.
    alert("country dont exist")
}
}


