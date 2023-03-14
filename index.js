let data = [
   {
    url: "content/img/image_slider_1.jpg",
    info:{
        city: "Rostov-on-Don LCD admiral",
        sq: "81 m2",
        time: "3.5 months",
        cost:"Upon request"
    },
    textLink: "Rostov-on-Don, admiral"
      
   },{
    url: "content/img/image_slider_2.jpg",
    info:{
        city: "Sochi Thieves",
        sq: "105 m2",
        time: "4 months",
        cost:"Upon request"
    },
    textLink: "Sochi Thieves"

   },{
    url: "content/img/image_slider_3.jpg",
    
    info:{
        city: "Rostov-on-Don Patriotic ",
        sq: "93 m2",
        time: "3 months",
        cost:"Upon request"
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
        initInfo(0)   
        
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
        
    
         
      function initInfo(num) {
       
        document.querySelector(".text_city").innerHTML = data[num].info.city,
        document.querySelector(".text_sq").innerHTML = data[num].info.sq,
        document.querySelector('.text_time').innerHTML =data[num].info.time,
        document.querySelector('.text_cost').innerHTML = data[num].info.cost;
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
           initInfo(num)
        
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
