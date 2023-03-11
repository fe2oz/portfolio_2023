// 변수 선언
var header = document.querySelector('.at-header');

// 스크롤 이벤트
window.addEventListener('scroll', function(){
    var scrollTop = window.scrollY;
    // 스크롤 값이 헤더 높이 값보다 커지면 클래스 추가, 삭제
    if(scrollTop >= header.offsetHeight){ 
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
});