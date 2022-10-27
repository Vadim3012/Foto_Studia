
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

// просто запрашиваем DOM... будто просим разрешение у босса!
var links = document.querySelectorAll(".itemLinks");
var wrapper = document.querySelector("#wrapper");

// activeLink обеспечивает метку для активного элемента
var activeLink = 0;

// устанавливаем отслеживание событий
for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener('click', setClickedItem, false);

    // определяем элемент для activeLink
    link.itemID = i;
}

// устанавливаем первый элемент в качестве активного
links[activeLink].classList.add("active");

function setClickedItem(e) {
    removeActiveLinks();

    var clickedLink = e.target;
    activeLink = clickedLink.itemID;

    changePosition(clickedLink);
}

function removeActiveLinks() {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
}

// Обработчик изменяет позицию слайдера, после того, как мы убедились,
// что в качестве активной обозначена нужная нам ссылка.
function changePosition(link) {
    link.classList.add("active");

    var position = link.getAttribute("data-pos");
    wrapper.style.left = position;
}





  var myString = "Hello world"; // инициализируем cтроковую переменную

myString.startsWith( "H" );

console.log(myString.startsWith( "H" ));
//функция возвращения
/*const normalizeUrl = (site) => {
    let normalizedUrl;
  
    if (site.startsWith('https://')) {
      normalizedUrl = site;
    } else {
      normalizedUrl = `https://${site}`;
    }
  
    return normalizedUrl;
  };

 console.log( normalizeUrl("vk.com"));*/


 //возвращение в заданной инструкции
 const convertText = (string) => {
  let convertText ;
  if (string.charAt(0) == string.charAt(0).toUpperCase()) {
    convertText = string;
    } else if (string == '') {
       convertText = string;
  } else if (string.charAt(0) != string.charAt(0).toUpperCase()) {
    convertText = string.split('').reverse().join('');
  }
   return convertText;
  }

  console.log(convertText(''));

  const getNumberExplanation = (site) => {
    let normalizedUrl;
  
    if (site == 666) {
      normalizedUrl = 'devil number';
    } else if (site == 42) {
      normalizedUrl = 'answer for everything';
    } else if (site == 7) {
      normalizedUrl = 'prime number';
    } else {
      normalizedUrl = 'null';
    }
  
    return normalizedUrl;
  };

  console.log(getNumberExplanation(7));