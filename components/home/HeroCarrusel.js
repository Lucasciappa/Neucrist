import React from "react";
const d = document;



const HeroCarrusel = () => {

  const $nextBtn = d.querySelector(".slider-btns .next"),
  $prevBtn = d.querySelector(".slider-btns .prev"),
  $slides = d.querySelectorAll(".slider-slide");

 let i = 0;
 d.addEventListener("click", e => {
     if(e.target === $prevBtn){
         e.preventDefault();
         $slides[i].classList.remove("active");
         i--;
    
         if(i < 0){
             i = $slides.length -1;
         }
         $slides[i].classList.add("active");

     }
     if(e.target === $nextBtn){
         e.preventDefault();
         $slides[i].classList.remove("active");
         i++;
    
         if(i > $slides.length -1){
             i = 0;
         }
         $slides[i].classList.add("active");

     }
 })


  return (
    <section id="section12" class="section" data-scroll-spy>
    <div class="slider">
    <div class="slider-slides">
      <div class="slider-slide active">
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </div>
      <div class="slider-slide">
        <img src="https://placeimg.com/400/400/tech" alt="tech" />
      </div>
      <div class="slider-slide">
        <h4>Diapositiva 1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus, labore provident saepe magni illo deserunt quia, earum, nisi commodi odio veritatis officiis. Quae alias assumenda aliquam aut eveniet expedita.
        </p>
      </div>
      <div class="slider-slide">
        <img src="https://placeimg.com/400/400/architecture" alt="architecture" />
      </div>
      <div class="slider-slide">
        <h4>Diapositiva 2</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus, labore provident saepe magni illo deserunt quia, earum, nisi commodi odio veritatis officiis. Quae alias assumenda aliquam aut eveniet expedita.
        </p>
      </div>
    </div>
      <div class="slider-btns">
         <a class="prev" href="#">&laquo;</a>
         <a class="next" href="#">&raquo;</a>
      </div>
  </div>
  </section>
  );
};


export default HeroCarrusel;