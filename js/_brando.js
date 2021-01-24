//IIFE(즉시실행함수표현식)
;(function($, window, document, undefined){//매개변수
    //ECMA script 5 
           
        //객체화 작업
        var brando = {  
          /*   x:100,
            y:'변수값 내용',
            z:100, */
            
            init:    function(){   //메소드(리터럴 함수)
                this.smoothScrollFn();
                this.headerFn();
                this.section01234Fn();  //섹션 01,02,03,04 반응형               
                
                this.section06Fn();
                this.section07Fn();

                this.section09Fn();
                this.section10Fn();
                this.section11Fn();
                this.section12Fn();
                this.section13Fn();
                this.section14Fn();
            }, 

            smoothScrollFn: function(){//브란도 전체 공용 함수smoothScrolling Event 함수
               
                //변수설정: 이크마 6에서는 let을쓰지만 호환성이 좋은 var쓴다
                var $smoothBtn =  $('.smoothBtn');
                var $htmlBody  =  $('html,body');
                var $mobile    =  $('.mobile');
                   /*  alert(this.y); */

                    //버튼 클릭이벤트
                    //이거는 하나밖에 못씀
                    $smoothBtn.on({
                        click:  function(event){
                            event.preventDefault(); // event.stopPropergation();자식요소 이벤트가 부모에게로 전파를 차단.
                            $this = $(this);        // 현재 클릭한 이것 버튼
                            
                            // 클릭한 버튼(a링크)의 href속성(Attribute어트리뷰트=Property프로퍼티)을 가져온다.
                            // var url = $(this).prop('href'); //변수 주소까지 다나옴                        
                            // $('html,body').stop().animate({scrollTop:$('#section02').offset().top},800);
                            var url = $this.attr('href'); // #section02....                       
                            $htmlBody.stop().animate({scrollTop:$(url).offset().top-60},800,'easeInOutExpo');
                        
                            //모바일 메뉴 안보이게 처리
                            $mobile.stop().slideUp(300);
                        }
                    });
                
                    /*  .on('mouseenter',function(event){
                        event.preventDefault();
                        alert('마우스 엔터');
                    });
                    .on('mouseover',function(event){
                        event.preventDefault();
                        alert('마우스 오버시');
                    }); */

                    //이거는 다양하게 쓸수있음mouseenter,click
                        /*  $('.smoothBtn').on({ 
                        click:function(event){
                            event.preventDefault(event);
                            alert(' 클릭');
                        },
                        mouseenter: function(event){
                            event.preventDefault(event);
                            alert('마우스 엔터');
                        },
                        mouseleave: function(event){
                            event.preventDefault(event);
                            alert('마우스 오버시');
                        }
                
                    }); */
            },
            headerFn: function(){
                 //헤더영역 스크롤 이벤트 (패럴럭스)

                var $window     = $(window);
                var $header     = $('#header');
                var $mobilebtn  = $('.mobilebtn');
                var $mobile     = $('.mobile');

                    //DOM(도큐먼트 오브젝트 모델링) Document Object Modelling
                    //BOM(브라우저 오브젝트 모델링) Brower Object Modelling
                    //마우스로 스크롤값이 아래로 30픽셀이상 내려가면 
                    //헤더영역에 효과 이벤트가 발생하게 하라
                    
                    $window.scroll(function(){
                        //console.log( $(window).scrollOTop() );//스크롤 탑값 확인
                        
                        if($window.scrollTop()>=30){//마우스로 스코롤값이 아래로 30픽셀이상
                            $header.addClass('addHeader');//레더에 클래스 추가                
                        }
                        else{
                            $header.removeClass('addHeader');//추가된 클래스 삭제
                        }
                    });
                    //모바일버튼 클릭이벤트 슬라이드 업 다운
                    $mobilebtn.on({
                        click: function(){
                            $mobile.stop().slideToggle(300);//슬라이드 업/다운이 다 됨
                        }
                    });

                    //모바일 메뉴가 창너비980초과일때 노출될경우
                    //slideUp시켜서 강제로 사라지게 처리함
                   function resizeFn(){
                            if( $window.innerWidth() > 980 ){
                                $mobile.stop().slideUp(0);
                            }
                        }
                        setTimeout( resizeFn,100);//로딩시

                        $window.resize(function(){ //창크기 변경시                        
                          resizeFn();                           
                    }); 
               


            },
            section01234Fn:    function(){
                //섹션1의 높이를 창(window)높이로 설정하되 반응형으로 설정해라
                //데스크탑 , 태블릿, 모바일등의 크기(resize()리사이즈)에 반응하도록
                
                var $window      = $(window);              
                var $section1234 = $('#main #section01,#main #section02,#main #section03,#main #section04');
                var $winH        = $window.innerHeight();  // 창높이
                var $box         = $('#main .section0234 .box');
                var $boxH        = $box.innerHeight();    //박스높이 섹션 2,3,4에서만 사용하는것
               
                function resizeFn(){
                    $winH = $window.innerHeight();  //창높이를 즉시 가져오기 
                    $boxH = $box.innerHeight();    //박스높이           
                    if( $winH < $boxH+80 ){//박스높이+80
                        $winH = $boxH+80;//박스높이+80
                    }
                    $section1234.css({ height:$winH }); //섹션1234의 높이 창높이로 설정
                    $box.css({ marginTop:-($boxH/2) }); //박스높이( marginTop-275px값)의 50%=  -(박스높이$boxH/2)로 설정
                     //console.log(-($boxH/2));                 
                }

                setTimeout( resizeFn,100 ); 

                //창크기가 변경될때만 반응하고 실행한다.
                $window.resize(function(){
                    resizeFn();                  
                }); 

                
            },          
          
            section06Fn:function(){

                var  $bgImg = $('#main #section06 .bg-img'); //섹션6영역 안에서만 사용

                //이미지(.bg-img) 위에 마우스 올리면 이벤트 발생
                $bgImg.on({
                    mouseenter: function(){
                        var $this = $(this);
                            $bgImg.removeClass('addHover');
                            $this.addClass('addHover');
                    },
                     //먼저 HTML에서 'tabindex="0" 설정하고 
                    //'키보드 접근 focus   반대는 (blur 또는 focusout)
                    focusin: function(){ 
                        var $this = $(this);
                            $bgImg.removeClass('addHover');
                            $this.addClass('addHover');
                    }
                });
            },
            section07Fn:function(){
                var $profileGap = $('#main #section07 .profile-gap'); //섹션7영역 안에서만 사용

              //이미지(.bg-img) 위에 마우스 올리면 이벤트 발생
              $profileGap.on({
                mouseenter: function(){
                    var $this = $(this);
                        $profileGap.removeClass('addProfile');
                        $this.addClass('addProfile');
                },
                 //먼저 HTML에서 'tabindex="0" 설정하고 
                //'키보드 접근 focus   반대는 (blur 또는 focusout)
                focusin: function(){ 
                    var $this = $(this);
                        $profileGap.removeClass('addProfile');
                        $this.addClass('addProfile');
                }
            });
            },
            section09Fn:function(){
              var tot           = $('#main #section09 .gallery-item').length;//전체갤러리 갯수
              var hideCount     = 0;
              var n             = tot-hideCount;                             //숨긴요소를 제외한 실제 갯수
              var cols          = 4;                                         //기본칸수
              var imgW          = 0;                                         //이미지너비
              var imgH          = imgW*0.75;                                 //이미지 높이 600/이미지박스 너비800 = 0.75
              var rows          = Math.ceil(n/cols);                         //줄수
              var $gllBtn       = $('#main #section09 .gll-btn');            //갤러리버튼 
              var idx           = 0;                                         //내비게이션 첫번째 버튼
              var $winW         = $(window).innerWidth();                    //창 너비
              var $s9GalItem    = $('#main #section09 .gallery-item');       //갤러리 항목(li)
              var $galContainer = $('#main #section09 .gallery-container');  //갤러리 전체 컨테이너 박스
              var $section09    = $('#main #section09');                     //섹션09
              var a             = [];                                        //show() 배열 요소 인덱스번호 li.show()
              var h             = [];                                        //hide() 배열 요소 인덱스번호 li.hide()
              
                //   코딩 간략식(구문 간략식)
                //0. 모든요소의 변수화
                //1. 숨긴요소를 제외한 실제 갯수 함수 
                //2. 버튼 클릭시 동작해서 감춰진(hide)갯수 실제 보이는 요소(show) 구분
                //   - n의 갯수 변화   
                //   - attr('data-hide',버튼번호).hide();   
                //   - removeAttr('data-hide')   
                //   - if($('갤러리아이템 li').attr('data-hide')){
                //        
                //    }   
                
                
                //3. 간략식 : 규칙적인 변화의 수치 증감 분석
                //4. 간략식 : 불규칙적인 변화의 수치는 분석해서 배열처리해서 규칙변화로 구성하여 사용.
                //5. 간략식 : 배열 매서드 사용 처리
                //6. 간략식 : 반복문, 조건문 코딩
                //7. 간략식 구현 결과 확인 디버깅 절차 수행
                //8. 개발완료


                    //갤러리 반응형함수
                    function resizeFn(){
                        //창의 너비를 즉각 반영하도록 너비를 가져오기
                        $winW = $(window).innerWidth();

                        if( $winW > 1200 ){
                            cols=4;
                        }
                        else if( $winW >= 990 ){
                            cols=3;
                        }
                        else if ($winW > 760 ){
                            cols=2;
                        }
                        else{
                            cols=1;
                        }

                        imgW = $winW/cols;
                        imgH = imgW*.75;
                       
                        
                        $s9GalItem.removeClass('addScale');
                        $s9GalItem.css({width:imgW, height:imgH});   //갤러리 이미지 너비 높이 구함
                       
                     
                     
                            switch( idx ){
                              case  0:  // all 8개
                                    h = [];//배열초기화
                                    a = [0,1,2,3,4,5,6,7];
                                    break;  
                              case  1://Breakfast 6개 0, 2 delect
                                    h = [0,2];
                                    a = [1,3,4,5,6,7];
                                    break;  
                              case  2://DINNER
                                    h = [1,3,4,5];                                                      
                                    a = [0,2,6,7];
                                    break;  
                              case  3://DRINKS
                                    h = [0,2,5];
                                    a = [1,3,4,6,7];
                                    break;  
                             default://LUNCH
                                    h = [0,1,3,6];
                                    a = [2,4,5,7];
                            }//switch() 끝

                           
                            //항상 switch문 끝나는 밑에해야 전체줄수 읽을 수 있음
                            
                            
                            //1. hide 요소
                            $s9GalItem.removeAttr('data-hide');         //이전에 감춰진 속성 data-hide
                            for(var i=0; i<h.length; i++){
                                $s9GalItem.eq(h[i]).attr('data-hide',idx).stop().hide();   
                            } 
                            
                            //2. n변수 감춰진 요소 뺀 갯수
                            //2. n변수의 변화되는 함수 호출
                            hideCountFn();      // 여기에 적용된다.
                            n = tot - hideCount;// show() 보이는갯수
                            
                            //3. show요소
                            rows = Math.ceil(n/cols);                   //줄수= 전체갤러리 갯수
                            $galContainer.css({height:imgH*rows});    //갤러리 전체박스 높이를 구함
                            


                            var k=-1;                                    
                            for(var i=0; i<rows; i++){
                                for(var j=0; j<cols; j++){
                                    k++;                       // 0 1 2 3 4 5
                                    if( k>a.length-1 ) break;  // 반복문 종료
                                    $s9GalItem.eq(a[k]).stop().show().animate({left:imgW*j,top:imgH*i});
                                }
                            }

                            $s9GalItem.addClass('addScale');

                        }//resizeFn()끝
                        
                        
                        //n변수 변화
                          function hideCountFn(){
                            hideCount = 0;//함수를 호출할때 마다 초기값을 0으로 셋팅
                            $s9GalItem.each(function(){ //반복처리each문
                               // console.log( $(this).attr('data-hide') );   //속성 가져오기 string
                                if( $(this).attr('data-hide') ){
                                    hideCount++;
                                }
                            });
                        } 
                        
                        $(window).resize(function(){
                            resizeFn();//첫실행때 반응형시 갤러리 사진 보임
                        });
                        //resizeFn();// 반응형 함수 평상시에 갤러리 사진보임
                        setTimeout(resizeFn,100);  //0.1초 후에 강제 실행
                        
                      

                    //갤러리 네비게이션 버튼 클릭 이벤트
                     $gllBtn.each(function(index){
                        $(this).on({
                            click: function(event){
                                event.preventDefault();
                                $gllBtn.removeClass('addNav');
                                $(this).addClass('addNav');
                        

                             idx = index;   //switch() 변수idx에 버튼번호 index를전달   
                            resizeFn();

                        } //click event 끝
                    });
                });

                        
            },
            section10Fn:function(){

            },
            section11Fn:function(){

            },
            section12Fn:function(){

            },
            section13Fn:function(){

            },
            section14Fn:function(){

            }
        };//객체 끝

        //브란도 객체.메서드 실행
        brando.init();//초기실행함수
     


})(jQuery,window,document);//아규먼트 brando.js
