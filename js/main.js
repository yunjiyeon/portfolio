const moveText = document.querySelector(".moveText");
// 글자 모음
const letters = [
"#도전하는",
"#유연한", 
"#소통하는"
];
// 글자 입력 속도
const speed = 100;
let i = 0;
// 타이핑 효과
const typing = async () => {  
const letter = letters[i].split("");
while (letter.length) {
await wait(speed);
moveText.innerHTML += letter.shift(); 
}
// 잠시 대기
await wait(800);
// 지우는 효과
remove();
}
// 글자 지우는 효과
const remove = async () => {
const letter = letters[i].split("");

while (letter.length) {
await wait(speed);

letter.pop();
moveText.innerHTML = letter.join(""); 
}
// 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
i = !letters[i+1] ? 0 : i + 1;
typing();
}
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
return new Promise(res => setTimeout(res, ms))
}
// 초기 실행
setTimeout(typing, 1500);

/* main menu */

$('.navBtn').click(function(){
  $(this).toggleClass('active');
  $('.navContainer').slideToggle(400);
});

$('.navContainer').click(function(){
  $('.navBtn').removeClass('active');
  $(this).slideUp(400);
});

/* sub menu */
$('.subNavBtn').click(function(){
  $(this).toggleClass('active');
  $('.subNavContainer').slideToggle(400);
});

$('.subNavContainer').click(function(){
  $('.subNavBtn').removeClass('active');
  $(this).slideUp(400);
});

/* 이미지 플러그인 / 프로젝트 */

window.addEventListener("load", () => {
  //Masonry 레이아웃(Isotope 플러그인 이용)
  const iso = new Isotope(".projectItem", {
    // options
    itemSelector: "article",
  });

  const filterBtn = document.querySelectorAll(".btns>li"); //.btn>li들을 변수에

  for (let el of filterBtn) {
    //배열 filterBtn 의 아이템(갯수) 만큼 반복
    el.addEventListener("click", (e) => {
      e.preventDefault();

      //클릭을 할때 각 아이템(버튼)에 반복, on클라스 없애줌
      for (let el of filterBtn) {
        el.classList.remove("on");
      }

      //클릭한 버튼에 클라스 넣어줌
      e.currentTarget.classList.add("on");

      //클릭한 버튼에 있는 a태그 안의 속성 href의 value값을 가져온다
      const filtering = e.currentTarget.querySelector("a").getAttribute("href");

      iso.arrange({ filter: filtering }); //버튼을 누르면 필터링 작동(플러그인)
    });
  }
});

// tabs
let tabLinks = document.querySelectorAll(".tablinks");
let tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  let btnTarget = el.currentTarget;
  let skills = btnTarget.dataset.skills;

  tabContent.forEach(function(el) {
      el.classList.remove("active");
  });

  tabLinks.forEach(function(el) {
      el.classList.remove("active");
  });

  document.querySelector("#" + skills).classList.add("active");
  btnTarget.classList.add("active");
}

/* tktoffice wireframe slide */

let wireframeSlide = {
  slidesPerView: 3.5,
  spaceBetween: 20,
  loop: false,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel : true,
};
const wSlide = new Swiper("#wireframeWrap", wireframeSlide);

/* tktoffice report slide */

let reportSlide = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay : {
    //시간 1000 이 1초
    delay : 3500,
    disableOnInteraction : false,
},
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel : true,
};
const rSlide = new Swiper("#reportWrap", reportSlide);


/* portfolio pc report slide */

let portPcSlide = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay : {
    //시간 1000 이 1초
    delay : 3500,
    disableOnInteraction : false,
},
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel : true,
};
const pSlide = new Swiper("#portPcWrap", portPcSlide);


/* portfolio moblie report slide */

let portMSlide = {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  mousewheel : true,
};
const pMSlide = new Swiper("#portMWrap", portMSlide);

/* topBtn */

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".topBtn").addClass("topBtnActive").css("opacity", "0.85");
    } else {
      $(".topBtn").removeClass("topBtnActive").css("opacity", "0");
    }
  });
});

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".subNav, .subHeaderContainer h1").css("opacity", "0");
      $(".back").css("top","10px");
    } else {
      $(".subNav, .subHeaderContainer h1").css("opacity", "1");
      $(".back").css("top","50px");
    }
  });
});

$(".topBtn").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    400,
  );
  return false;
});
