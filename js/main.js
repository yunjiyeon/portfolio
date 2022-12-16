$('.navBtn').click(function(){
  $(this).toggleClass('active');
  $('.navContainer').slideToggle(400);
});

$('.navContainer').click(function(){
  $('.navBtn').removeClass('active');
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