let data = [
   {
    url: "content/img/image_slider_1.jpg",
    info:{
        city: "<div id=\"text_city_div\"><p id=\"text_city\" class=\"project_info_item_text text-city\">Rostov-on-Don LCD admiral </p></div>",
        sq: "<div id=\"text_sq_div\"><p  id=\"text_sq\" class=\"project_info_item_text text-sq\">81 m2</p></div>",
        time: "<div id=\"text_time_div\"><p id=\"text_time\" class=\"project_info_item_text text-time\">3.5 months</p></div>",
        cost:"<div id=\"text_cost_div\"><p id=\"text_cost\" class=\"project_info_item_text text-cost\">Upon request</p></div> "
    },
    textLink: "Rostov-on-Don, admiral"
      
   },{
    url: "content/img/image_slider_2.jpg",
    info:{
        city: "<div id=\"text_city_div\"><p id=\"text_city\" class=\"project_info_item_text text-city\">Sochi Thieves </p></div>",
        sq: "<div id=\"text_sq_div\"><p id=\"text_sq\" class=\"project_info_item_text text-sq\">105 m2</p></div>",
        time: "<div id=\"text_time_div\"><p id=\"text_time\" class=\"project_info_item_text text-time\">4 months</p></div>",
        cost:"<div id=\"text_cost_div\"><p id=\"text_cost\" class=\"project_info_item_text text-cost\">Upon request</p></div> "
    },
    textLink: "Sochi Thieves"

   },{
    url: "content/img/image_slider_3.jpg",
    
    info:{
        city: "<div id=\"text_city_div\"><p id=\"text_city\" class=\"project_info_item_text text-city\">Rostov-on-Don Patriotic </p></div>",
        sq: "<div id=\"text_sq_div\"><p id=\"text_sq\" class=\"project_info_item_text text-sq\">93 m2</p></div>",
        time: "<div id=\"text_time_div\"><p id=\"text_time\" class=\"project_info_item_text text-time\">3 months</p></div>",
        cost:"<div id=\"text_cost_div\"><p id=\"text_cost\" class=\"project_info_item_text text-cost\">Upon request</p></div> "
      },
    textLink: "Rostov-on-Don Patriotic"

   } 
];

function initSlider(options) {

   
    if (!data || !data.length) return;
    
    options = options || {
        links:true,
        info: true,
        dots: true,
     
      
    };
let sliderImg = document.querySelector('.slider__img'),
    sliderArrows = document.querySelector(".vector"),
    sliderDotes =document.querySelector(".slider__dotes");
    sliderLinks =document.querySelector(".slider_list")

    initImages();
    initArrows();
    
    
    if (options.dots) {
      initDots();
    }
   
    if (options.links) {
        initLink();
    }
    if (options.info){
        initInfo()
        
        
    }

    function initImages(){
        data.forEach((img, i)=>{
            let imageDiv = `<div class="image n${i} ${i === 0? "active" : ""}" style="background-image:url(${data[i].url});" data-index="${i}"></div>`;
            sliderImg.innerHTML+=imageDiv;
        })
    }

    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arr").forEach(arrow => {
          arrow.addEventListener("click", function() {
            let curNumber = +sliderImg.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("next")) {
              nextNumber = curNumber === 0? data.length - 1 : curNumber - 1;
            } else {
              nextNumber = curNumber === data.length - 1? 0 : curNumber + 1;
            }

            moveSlider(nextNumber);
          });
        });
      }

      function initDots() {
        data.forEach((img, i) => {
          let dot = `<div class="slider__dots-item n${i} ${i === 0? "active" : ""}" data-index="${i}"></div>`;
          sliderDotes.innerHTML += dot;
        });
        sliderDotes.querySelectorAll(".slider__dots-item").forEach(dot => {
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
      }

      function initLink(){
       data.forEach((img,i)=>{
        let link = `<button class="slider__link n${i} ${i === 0? "active": ""}" data-index=${i}>${data[i].textLink}</button>`
        sliderLinks.innerHTML += link;
       });
       sliderLinks.querySelectorAll(".slider__link").forEach(link =>{
        link.addEventListener("click", function(){
            moveSlider(this.dataset.index);
            
        })
       })
      }
        
    
         
      function initInfo() {
       
        // let cityNode = document.getElementById('city-js'),
        // sqNode = document.getElementById('sq-js'),
        // timeNode = document.getElementById('time-js'),
        // costNode = document.getElementById('cost-js');
      
        data.forEach((item,i)=>{
            let cityNode = document.getElementById('city-js'),
            sqNode = document.getElementById('sq-js'),
            timeNode = document.getElementById('time-js'),
            costNode = document.getElementById('cost-js');

                if( i === +sliderImg.querySelector(".active").dataset.index){
                    cityNode.insertAdjacentHTML('beforeend', data[i].info.city)
                    sqNode.insertAdjacentHTML('beforeend', data[i].info.sq)
                    timeNode.insertAdjacentHTML('beforeend', data[i].info.time)
                    costNode.insertAdjacentHTML('beforeend', data[i].info.cost)
                    return;
                    } 
                    

        })
    
    }
    
    function delInfo(){
        const removeC = document.getElementById("text_city_div"),
              removeS = document.getElementById("text_sq_div"),
              removeT = document.getElementById("text_time_div"),
              removeCo = document.getElementById("text_cost_div");

        removeC.removeChild(removeC.querySelector(".text-city"));
        removeS.removeChild(removeS.querySelector(".text-sq"));
        removeT.removeChild(removeT.querySelector(".text-time"));
        removeCo.removeChild(removeCo.querySelector(".text-cost"))

    } 
    function changeInfo(){
      delInfo()
      initInfo()
    }

      function moveSlider(num) {
        sliderImg.querySelector(".active").classList.remove("active");
        sliderImg.querySelector(".n" + num).classList.add("active");
        
        if (options.dots) {
          sliderDotes.querySelector(".active").classList.remove("active");
          sliderDotes.querySelector(".n" + num).classList.add("active");
          
      
        }
        if (options.links) {
            sliderLinks.querySelector(".active").classList.remove("active");
            sliderLinks.querySelector(".n" + num).classList.add("active");
        }
       
        if (options.info) {
           changeInfo()
        
          } 
       
        

      }


      
}
    
let sliderOptions = {
    links:true,
    info:true,
    dots:true,
    
  }; 
    
   

    document.addEventListener("DOMContentLoaded", function() {
        initSlider();
      });





      