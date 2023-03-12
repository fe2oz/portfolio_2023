// 변수 선언
var header = document.querySelector('.at-header');
var circle = document.querySelector('.main_circle');
var section = document.querySelectorAll('.section'); // 메인 각 섹션
var scTwo_Li = document.querySelectorAll('.section02 .con-box li'); // 섹션02 - 최근 작업물
var work = document.querySelectorAll('.workModal-wrap .comm');


// 로딩 후 이벤트
window.onload = function(){
    document.querySelector('.section01').classList.add('ani');
    document.querySelector('.main_circle').classList.add('ani');
}

// 스크롤 이벤트
window.addEventListener('scroll', function(){
    var scrollTop = window.scrollY;
    // 스크롤 값이 헤더 높이 값보다 커지면 클래스 추가, 삭제
    // if(scrollTop >= header.offsetHeight){ 
    //     header.classList.add('scroll');
    // }else{
    //     header.classList.remove('scroll');
    // }

    // 메인 각 섹션에 스크롤 닿을 시 ani 클래스 추가
    for(var i=0; i<section.length; i++){
        var scLocation = section[i].offsetHeight;
        var sc02_Location = document.querySelector('.section02 .txt-box').offsetHeight;
        if(scrollTop >= scLocation){
            section[i].classList.add('ani');
        }else if(scrollTop >= sc02_Location){ // 섹션02의 경우 txt-box에 스크롤 닿을 시 ani 클래스 추가
            document.querySelector('.section02').classList.add('ani');
        }else{
            document.querySelector('.section02').classList.remove('ani');
        }
    }
    // 섹션02 txt-box에 스크롤 닿을 시 메인 circle에 클래스 추가, 아니면 제거
    if(scrollTop >= document.querySelector('.section02 .txt-box').offsetHeight){
        circle.classList.add('move');
        document.querySelector('.section01').classList.add('move');
    }else{
        circle.classList.remove('move');
        document.querySelector('.section01').classList.remove('move');
    }
});

// 메인 섹션02 - 최근 작업물
for(var i=0; i<scTwo_Li.length; i++){
    scTwo_Li[i].addEventListener('mouseover', function(){ // 각 섹션 마우스 호버 시 클래스 추가, 제거
        this.classList.add('hover');
    });
    scTwo_Li[i].addEventListener('mouseout', function(){
        this.classList.remove('hover');
        //this.classList.remove('active');
    });
}
function toggleWork(scTwo_Li){
    for(var i=0; i<scTwo_Li.length; i++){
        scTwo_Li[i].addEventListener('click', function(e){
            var conLi = this;
            console.log(conLi);
            
            for(var i=0; i<scTwo_Li.length; i++){
                if(conLi != scTwo_Li[i]){
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


