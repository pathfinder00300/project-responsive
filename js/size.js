var screenSize = $(window).width();  //가로 해상도
 
function screenW(){     
    if(screenSize>1280){  //와이드 pc 1281px~ 이상
        $('.per_img').attr('src','./images/main/performance1.jpg');
        $('.per_img').attr('src','./images/sub1/sub1_intro.jpg');
        $('.story_img1').attr('src','./images/sub1/story_1.jpg');
        $('.story_img2').attr('src','./images/sub1/story_2.jpg');
        $('.story_img3').attr('src','./images/sub1/story_3.jpg');
        $('.intro_img').attr('src','./images/sub1/sub1_intro.jpg');
    }else if(screenSize>1199){  //와이드 pc 1281px~ 이상
        $('.per_img').attr('src','./images/main/performance1.jpg');
        $('.per_img').attr('src','./images/sub1/sub1_intro.jpg');
        $('.story_img1').attr('src','./images/sub1/story_1_1200.jpg');
        $('.story_img2').attr('src','./images/sub1/story_2_1200.jpg');
        $('.story_img3').attr('src','./images/sub1/story_3_1200.jpg');
        $('.intro_img').attr('src','./images/sub1/sub1_intro.jpg');
    }else if(screenSize>1024){  //일반pc 1025~ 1280px
        $('.per_img').attr('src','./images/main/performance2.jpg');
        $('.heritage_img1').attr('src','./images/main/heritage1.jpg');
        $('.heritage_img2').attr('src','./images/main/heritage2.jpg');
        $('.heritage_img3').attr('src','./images/main/heritage3.jpg');
        $('.heritage_img4').attr('src','./images/main/heritage4.jpg'); 
        $('.intro_img').attr('src','./images/sub1/sub1_intro_1280.jpg');  
        $('.grid_img1').attr('src','./images/sub3/sec2_1.jpg');
        $('.grid_img2').attr('src','./images/sub3/sec2_2.jpg');  
        $('.grid_img3').attr('src','./images/sub3/sec2_3.jpg');  
        $('.grid_img4').attr('src','./images/sub3/sec2_4.jpg');  
        $('.motor1').attr('src','./images/sub5/motor1.jpg');  
        $('.motor2').attr('src','./images/sub5/motor2.jpg');   
        $('.motor3').attr('src','./images/sub5/motor3.jpg'); 
        
    }else if(screenSize>768){ //테블릿 769px~ 1024px
        $('.per_img').attr('src','./images/main/performance2.jpg');
        $('.heritage_img1').attr('src','./images/main/heritage1_1024.jpg');
        $('.heritage_img2').attr('src','./images/main/heritage2_1024.jpg');
        $('.heritage_img3').attr('src','./images/main/heritage3_1024.jpg');
        $('.heritage_img4').attr('src','./images/main/heritage4_1024.jpg');   
        $('.intro_img').attr('src','./images/sub1/sub1_intro_768.jpg');  
        $('.grid_img1').attr('src','./images/sub3/sec2_1_1024.jpg');
        $('.grid_img2').attr('src','./images/sub3/sec2_2_1024.jpg');  
        $('.grid_img3').attr('src','./images/sub3/sec2_3_1024.jpg');  
        $('.grid_img4').attr('src','./images/sub3/sec2_4_1024.jpg');   
        $('.feature_img1').attr('src','./images/sub2/feature1.jpg');
        $('.feature_img2').attr('src','./images/sub2/feature2.jpg');  
        $('.motor1').attr('src','./images/sub5/motor1_640.jpg');  
        $('.motor2').attr('src','./images/sub5/motor2_640.jpg');   
        $('.motor3').attr('src','./images/sub5/motor3_640.jpg');  
    }else if(screenSize>640){ //소형테블릿 641px~ 768px
        $('.per_img').attr('src','./images/main/performance1.jpg');
        $('.heritage_img1').attr('src','./images/main/heritage1_768.jpg');
        $('.heritage_img2').attr('src','./images/main/heritage2_768.jpg');
        $('.heritage_img3').attr('src','./images/main/heritage3_768.jpg');
        $('.heritage_img4').attr('src','./images/main/heritage4_768.jpg');
        $('.intro_img').attr('src','./images/sub1/sub1_intro_768.jpg');
        $('.grid_img1').attr('src','./images/sub3/sec2_1_640.jpg');
        $('.grid_img2').attr('src','./images/sub3/sec2_2_640.jpg');  
        $('.grid_img3').attr('src','./images/sub3/sec2_3_640.jpg');  
        $('.grid_img4').attr('src','./images/sub3/sec2_4_640.jpg');    
        $('.motor1').attr('src','./images/sub5/motor1_1024.jpg');  
        $('.motor2').attr('src','./images/sub5/motor2_1024.jpg');   
        $('.motor3').attr('src','./images/sub5/motor3_1024.jpg');  
        $('.feature_img1').attr('src','./images/sub2/feature1_768.jpg');
        $('.feature_img2').attr('src','./images/sub2/feature2_768.jpg');    
    }else if(screenSize>480){ //소형테블릿 481px~ 640px
        $('.per_img').attr('src','./images/main/performance1.jpg');
        $('.story_img1').attr('src','./images/sub1/story_1_640.jpg');
        $('.story_img2').attr('src','./images/sub1/story_2_640.jpg');
        $('.story_img3').attr('src','./images/sub1/story_3_640.jpg');
        $('.motor1').attr('src','./images/sub5/motor1_1024.jpg');  
        $('.motor2').attr('src','./images/sub5/motor2_1024.jpg');   
        $('.motor3').attr('src','./images/sub5/motor3_1024.jpg');  
    }else{   //모바일
        $('.per_img').attr('src','./images/main/performance1.jpg');
        $('.motor1').attr('src','./images/sub5/motor1_640.jpg');  
        $('.motor2').attr('src','./images/sub5/motor2_640.jpg');   
        $('.motor3').attr('src','./images/sub5/motor3_640.jpg');  
    }
}
screenW();  //함수호출    -> 해당페이지가 처음 뜰 때 1번
    
$(window).resize(function(){  //브라우저의 너비값이 변경되는 발생되는 이벤트
screenSize = $(window).width(); //윈도우 크기가 변결될떄 마다 브라우저의 너비값을 계산
    
screenW();//함수호출
});     


