//IIFE(즉시실행함수표현식)
;(function($, window, document, undefined){//매개변수
    //ECMA script 5 
           
        //객체화 작업
        var brando = {           
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
              
                var $window      = $(window); 
                var imgW         = $('#main #section09 .gallery-item').innerWidth(); // 갤러리이미지 박스 너비
                var $galleryItem = $('#main #section09 .gallery-item'); //이미지박스  
                var per          = 0.75;
                var imgH         = imgW * per; //이미지 박스의 높이
                    $galleryItem.css({ hegiht: imgH });
                var $gllBtn      = $('.gll-btn');     
                
                
                
                //이미지 너비에 따라 높이의 변화
                //이미지 박스높이 = 이미지 박스의 너비 * 0.75%
                    function resizeFn(){
                        imgW  = $('#main #section09 .gallery-item').innerWidth();
                        imgH  =  imgW * per;
                        $galleryItem.css({ height: imgH });
                        
                    }
                    resizeFn();//로딩시 1회 실행
                    $window.resize(function(){    //반응형 높이 넓이 변경시마다 계속사용
                        resizeFn(); 
                    });



                    //갤러리 버튼 클릭 이벤트
                    $gllBtn.on({
                        click: function(){
                            var $this = $(this);
                            $gllBtn.removeClass('addNav');
                            $this.addClass('addNav');
                        }
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
