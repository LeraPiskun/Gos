let header = document.querySelector('header'),
headerH = document.querySelector('header').clientHeight;

document.onscroll=function(){
   let scroll = window.scrollY;
    
   if (scroll > headerH){
    header.classList. add('fixed');
    document.body.style.paddingTop=headerH+'px';
} 
else{
  header.classList. remove('fixed');
  document.body.removeAttribute();
}
}
