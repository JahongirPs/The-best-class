const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;


const menu = document.querySelector("#menu").cloneNode(1);


hamb.addEventListener("click", hambHandler);


function hambHandler(e) {
  e.preventDefault();

  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}


function renderPopup() {
  popup.appendChild(menu);
}


const links = Array.from(menu.children);


links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});


function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// Получить все элементы, которые должны появляться при прокрутке
const fadeElements = document.querySelectorAll('.fade-in');

// Функция для проверки, появился ли элемент в видимой области экрана
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
  );
};

// Функция для добавления или удаления класса "fade-in"
const handleScroll = () => {
  fadeElements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add('fade-in');
    } else {
      el.classList.remove('fade-in');
    }
  });
};

// Обработчик события прокрутки страницы
window.addEventListener('scroll', handleScroll);

function animateElements() {
  // Получить все элементы, которые вы хотите анимированно появить
  const elementsToAnimate2 = document.querySelectorAll('.about_us');
  const elementsToAnimate = document.querySelectorAll('table');
  const elementsToAnimate3 = document.querySelectorAll('.cad2');
  const elementsToAnimate4 = document.querySelectorAll('td');

  elementsToAnimate3.forEach(element => {
    // Добавьте класс с анимацией для каждого элемента
    element.classList.add('animate');
  });
  elementsToAnimate4.forEach(element => {
    // Добавьте класс с анимацией для каждого элемента
    element.classList.add('animate');
  });
  // Переберите все элементы
  elementsToAnimate.forEach(element => {
    // Добавьте класс с анимацией для каждого элемента
    element.classList.add('animate');
  });
  elementsToAnimate2.forEach(element => {
    // Добавьте класс с анимацией для каждого элемента
    element.classList.add('animate');
  });
 
}

// Вызовите функцию для анимированного появления элементов при загрузке страницы
window.addEventListener('load', animateElements);

// UPDATE: I was able to get this working again... Enjoy!

var cursor = document.querySelector(".cursor");
var cursorinner = document.querySelector(".cursor2");
var a = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

document.addEventListener("mousedown", function () {
  cursor.classList.add("click");
  cursorinner.classList.add("cursorinnerhover");
});

document.addEventListener("mouseup", function () {
  cursor.classList.remove("click");
  cursorinner.classList.remove("cursorinnerhover");
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("hover");
  });
  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});




