// 변수 선언
var header = document.querySelector('.at-header');
var section02_conLi = document.querySelectorAll('.section02 .con-box li'); // 섹션02 - 최근 작업물
var work = document.querySelectorAll('.comm');

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

// 메인 섹션02 - 최근 작업물
for(var i=0; i<section02_conLi.length; i++){
    section02_conLi[i].addEventListener('mouseover', function(){ // 각 섹션 마우스 호버 시 클래스 추가, 제거
        this.classList.add('hover');
    });
    section02_conLi[i].addEventListener('mouseout', function(){
        this.classList.remove('hover');
        //this.classList.remove('active');
    });
}
function toggleWork(section02_conLi){
    for(var i=0; i<section02_conLi.length; i++){
        section02_conLi[i].addEventListener('click', function(e){
            var conLi = this;
            console.log(conLi);
            
            for(var i=0; i<section02_conLi.length; i++){
                if(conLi != section02_conLi[i]){
                    conLi[i].classList.remove('active');
                    work[i].classList.remove('show');
                }else if(conLi.classList.contains('active') === true){
                    conLi.classList.remove('active');
                    work[i].classList.remove('show');
                }else{
                    conLi.classList.add('active');
                    work[i].classList.add('show');
                }
            }
        });
    }
}
toggleWork(document.querySelectorAll('.section02 .con-box li'))


