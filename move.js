const swiper = new Swiper('.swiper', {
    // Optional parameters
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

document.getElementById("buttoninfo").addEventListener("click", function(){
  let describtion = document.getElementById("describtion");
  if(describtion.style.display === 'none'){
    describtion.style.display = "block";
  }else{
    describtion.style.display = "none";
  }
})








