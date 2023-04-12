// front page slider
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slides.forEach(function (slide, index){
    slide.style.left = `${index * 100}%`
});

let count = 0
prevBtn.addEventListener('click', function(){
    count--;
    mosh()
});

nextBtn.addEventListener('click', function(){
    count++;
    mosh() 
});
 
function mosh(){
    if(count === slides.length){
        count = 0
    }

    if(count < 0){
        count = slides.length - 1
    }

    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${count * 100}%)`
    })
}

// Side Bar
const sidebar = document.querySelector('.sidebar');
const openSidebar = document.querySelector('.openSidebar');
const closeSidebar = document.querySelector('.closeSidebar');

openSidebar.addEventListener('click', function(){
    sidebar.classList.toggle('showSidebar')
});

closeSidebar.addEventListener('click', function(){
    sidebar.classList.remove('showSidebar')
});



// side bar links
const btn = document.querySelector(".Btn");
const showBtn = document.querySelector('.showBtn');
const hideBtn = document.querySelector('.hideBtn');
const subNavWrap = document.querySelector('.subNavWrap');
let starter = true

btn.addEventListener('click', ()=>{
    if(subNavWrap.classList.contains('show')){
        subNavWrap.classList.remove('show')
    }else {
        subNavWrap.classList.add('show')
    }
    // subNavWrap.classList.toggle('show')

    displayBtnIcon()
})

function displayBtnIcon() {
  if (starter == true) {
    hideBtn.style.opacity = 1
    showBtn.style.opacity = 0
    starter = false
  } else {
    hideBtn.style.opacity = 0
    showBtn.style.opacity = 1
    starter = true
  }
}
