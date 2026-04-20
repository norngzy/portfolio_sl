const heroBnr = document.querySelector('.hero');
const roomSlide = document.querySelector('.room_swiper');
const offerSlide = document.querySelector('.offer_swiper');
const tabMain = document.querySelectorAll('.dining_main_tap a');
const restTab = document.querySelectorAll('.restaurant .dining_sub_tap a');
const lounTab = document.querySelectorAll('.loungebar .dining_sub_tap a');
const diningC = document.querySelectorAll('.contents_bg');
console.log(heroBnr,roomSlide,offerSlide,tabMain,restTab,lounTab,diningC);

const heroSwiper = new Swiper(heroBnr,{
    loop:true,
    navigation:{
        prevEl:'.hero .prev',
        nextEl:'.hero .next',
    },
});

const roomSwiper = new Swiper(roomSlide,{
    loop:true,
    navigation:{
        prevEl:'.room_swiper .prev',
        nextEl:'.room_swiper .next',
    },
});

const offerSwiper = new Swiper(offerSlide,{
    loop:true,
    slidesPerView:3,
    slidesPerGroup:3,
    pagination:{
        el:'.offer_swiper .progressbar',
        type:'progressbar',
    },
});

//레스토랑
diningC[1].style.display = 'none'; /* ly */
diningC[2].style.display = 'none'; /* ps */
diningC[3].style.display = 'none'; /* ari */
diningC[4].style.display = 'none'; /* conti */
//라운지
diningC[5].style.display = 'none'; /* library */
diningC[6].style.display = 'none'; /* distillers */
diningC[7].style.display = 'none'; /* exe_lounge */
//베이커리
diningC[8].style.display = 'none';

//라운지서브탭메뉴
lounTab[0].style.display ='none';
lounTab[1].style.display ='none';
lounTab[2].style.display ='none';

tabMain[0].addEventListener('click',function(e){ //레스토랑
    e.preventDefault();
    diningC[0].style.display = 'flex';
    diningC[1].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[5].style.display = 'none';
    diningC[6].style.display = 'none';
    diningC[7].style.display = 'none';
    diningC[8].style.display = 'none';
    restTab[0].style.display = 'inline';
    restTab[1].style.display = 'inline';
    restTab[2].style.display = 'inline';
    restTab[3].style.display = 'inline';
    restTab[4].style.display = 'inline';
    lounTab[0].style.display ='none';
    lounTab[1].style.display ='none';
    lounTab[2].style.display ='none';
    tabMain[0].classList.add('active');
    tabMain[1].classList.remove('active');
    tabMain[2].classList.remove('active');
});
tabMain[1].addEventListener('click',function(e){ //라운지
    e.preventDefault();
    diningC[5].style.display = 'flex';
    lounTab[0].style.display ='inline';
    lounTab[1].style.display ='inline';
    lounTab[2].style.display ='inline';
    diningC[0].style.display = 'none';
    diningC[1].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[6].style.display = 'none';
    diningC[7].style.display = 'none';
    diningC[8].style.display = 'none';
    restTab[0].style.display = 'none';
    restTab[1].style.display = 'none';
    restTab[2].style.display = 'none';
    restTab[3].style.display = 'none';
    restTab[4].style.display = 'none';
    tabMain[1].classList.add('active');
    tabMain[0].classList.remove('active');
    tabMain[2].classList.remove('active');
});
tabMain[2].addEventListener('click',function(e){ //베이커리
    e.preventDefault();
    diningC[8].style.display = 'flex';
    diningC[0].style.display = 'none';
    diningC[1].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[5].style.display = 'none';
    diningC[6].style.display = 'none';
    diningC[7].style.display = 'none';
    restTab[0].style.display = 'none';
    restTab[1].style.display = 'none';
    restTab[2].style.display = 'none';
    restTab[3].style.display = 'none';
    restTab[4].style.display = 'none';
    lounTab[0].style.display ='none';
    lounTab[1].style.display ='none';
    lounTab[2].style.display ='none';
    tabMain[2].classList.add('active');
    tabMain[0].classList.remove('active');
    tabMain[1].classList.remove('active');
});

restTab[0].addEventListener('click',function(e){ //더파크뷰
    e.preventDefault();
    diningC[0].style.display = 'flex';
    diningC[1].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[5].style.display = 'none';
    diningC[8].style.display = 'none';
    //탭메뉴
    lounTab[0].style.display ='none';
    lounTab[1].style.display ='none';
    lounTab[2].style.display ='none';
    restTab[0].classList.add('active');
    restTab[1].classList.remove('active');
    restTab[2].classList.remove('active');
    restTab[3].classList.remove('active');
    restTab[4].classList.remove('active');
    tabMain[0].classList.add('active');
    tabMain[1].classList.remove('active');
    tabMain[2].classList.remove('active');
});
restTab[1].addEventListener('click',function(e){ //라연
    e.preventDefault();
    diningC[1].style.display = 'flex';
    diningC[0].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[5].style.display = 'none';
    diningC[6].style.display = 'none';
    diningC[7].style.display = 'none';
    diningC[8].style.display = 'none';
    //탭메뉴
    lounTab[0].style.display ='none';
    lounTab[1].style.display ='none';
    lounTab[2].style.display ='none';
    restTab[1].classList.add('active');
    restTab[0].classList.remove('active');
    restTab[2].classList.remove('active');
    restTab[3].classList.remove('active');
    restTab[4].classList.remove('active');
    tabMain[0].classList.add('active');
    tabMain[1].classList.remove('active');
    tabMain[2].classList.remove('active');
});
restTab[2].addEventListener('click',function(e){ //팔선
    e.preventDefault();
    diningC[2].style.display = 'flex';
    diningC[0].style.display = 'none';
    diningC[1].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[5].style.display = 'none';
    diningC[6].style.display = 'none';
    diningC[7].style.display = 'none';
    diningC[8].style.display = 'none';
    //탭메뉴
    lounTab[0].style.display ='none';
    lounTab[1].style.display ='none';
    lounTab[2].style.display ='none';
    restTab[2].classList.add('active');
    restTab[0].classList.remove('active');
    restTab[1].classList.remove('active');
    restTab[3].classList.remove('active');
    restTab[4].classList.remove('active');
    tabMain[0].classList.add('active');
    tabMain[1].classList.remove('active');
    tabMain[2].classList.remove('active');
});
restTab[3].addEventListener('click',function(e){ //아리아께
    e.preventDefault();
    diningC[3].style.display = 'flex';
    diningC[0].style.display = 'none';
    diningC[1].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[5].style.display = 'none';
    diningC[6].style.display = 'none';
    diningC[7].style.display = 'none';
    diningC[8].style.display = 'none';
    //탭메뉴
    lounTab[0].style.display ='none';
    lounTab[1].style.display ='none';
    lounTab[2].style.display ='none';
    restTab[3].classList.add('active');
    restTab[0].classList.remove('active');
    restTab[1].classList.remove('active');
    restTab[2].classList.remove('active');
    restTab[4].classList.remove('active');
    tabMain[0].classList.add('active');
    tabMain[1].classList.remove('active');
    tabMain[2].classList.remove('active');
});
restTab[4].addEventListener('click',function(e){ //콘티
    e.preventDefault();
    diningC[4].style.display = 'flex';
    diningC[0].style.display = 'none';
    diningC[1].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[5].style.display = 'none';
    diningC[6].style.display = 'none';
    diningC[7].style.display = 'none';
    diningC[8].style.display = 'none';
    //탭메뉴
    lounTab[0].style.display ='none';
    lounTab[1].style.display ='none';
    lounTab[2].style.display ='none';
    restTab[4].classList.add('active');
    restTab[0].classList.remove('active');
    restTab[1].classList.remove('active');
    restTab[2].classList.remove('active');
    restTab[3].classList.remove('active');
    tabMain[0].classList.add('active');
    tabMain[1].classList.remove('active');
    tabMain[2].classList.remove('active');
});

lounTab[0].addEventListener('click',function(e){ //라이브러리
    e.preventDefault();
    diningC[5].style.display = 'flex';
    diningC[0].style.display = 'none';
    diningC[1].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[6].style.display = 'none';
    diningC[7].style.display = 'none';
    diningC[8].style.display = 'none';
    //탭메뉴
    lounTab[0].style.display ='inline';
    lounTab[1].style.display ='inline';
    lounTab[2].style.display ='inline';
    restTab[0].style.display ='none';
    restTab[1].style.display ='none';
    restTab[2].style.display ='none';
    restTab[3].style.display ='none';
    restTab[4].style.display ='none';
    lounTab[0].classList.add('active');
    lounTab[1].classList.remove('active');
    lounTab[2].classList.remove('active');
    tabMain[1].classList.add('active');
    tabMain[0].classList.remove('active');
    tabMain[2].classList.remove('active');
});
lounTab[1].addEventListener('click',function(e){ //디스틸러스
    e.preventDefault();
    diningC[6].style.display = 'flex';
    diningC[0].style.display = 'none';
    diningC[1].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[5].style.display = 'none';
    diningC[7].style.display = 'none';
    diningC[8].style.display = 'none';
    //탭메뉴
    lounTab[0].style.display ='inline';
    lounTab[1].style.display ='inline';
    lounTab[2].style.display ='inline';
    restTab[0].style.display ='none';
    restTab[1].style.display ='none';
    restTab[2].style.display ='none';
    restTab[3].style.display ='none';
    restTab[4].style.display ='none';
    lounTab[1].classList.add('active');
    lounTab[0].classList.remove('active');
    lounTab[2].classList.remove('active');
    tabMain[1].classList.add('active');
    tabMain[0].classList.remove('active');
    tabMain[2].classList.remove('active');
});
lounTab[2].addEventListener('click',function(e){ //이스큐즈라운지
    e.preventDefault();
    diningC[7].style.display = 'flex';
    diningC[0].style.display = 'none';
    diningC[1].style.display = 'none';
    diningC[2].style.display = 'none';
    diningC[3].style.display = 'none';
    diningC[4].style.display = 'none';
    diningC[5].style.display = 'none';
    diningC[6].style.display = 'none';
    diningC[8].style.display = 'none';
    //탭메뉴
    lounTab[0].style.display ='inline';
    lounTab[1].style.display ='inline';
    lounTab[2].style.display ='inline';
    restTab[0].style.display ='none';
    restTab[1].style.display ='none';
    restTab[2].style.display ='none';
    restTab[3].style.display ='none';
    restTab[4].style.display ='none';
    lounTab[2].classList.add('active');
    lounTab[0].classList.remove('active');
    lounTab[1].classList.remove('active');
    tabMain[1].classList.add('active');
    tabMain[0].classList.remove('active');
    tabMain[2].classList.remove('active');
});