// function popup(){
// 	document.getElementById('p').style.display = 'flex';
// }



// //Button show info
// function rmb(id){

//     let b = document.getElementById(id)
//     let button = b.innerText
//     let t = 't' + id.substr(1)
//     let text = document.getElementById(t) 
//     let l = 'l' + id.substr(1)
//     let card = document.getElementById(l) 
// console.log(text)

//     if (button === 'Show Info'){
//       b.innerText = 'Read Less';
//       text.style.display = 'flex'
//       card.style.height = "auto";
//     }else{
//       b.innerText = 'Show Info';
//       text.style.display = 'none'
//       card.style.height = "480px";
//     }


// }



//menu

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);







