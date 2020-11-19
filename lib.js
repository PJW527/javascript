function over2(obj){
    obj.src="./images/pengsu02.jpg"
}

function out2(obj){
    obj.src="./images/pengsu03.jpg"
}


 //    var img4 = document.getElementById("img4");                 // 외부 자바스크립트 2번(요즘 방식)과 연계
 //       img4.addEventListener("mouseover",                                 // img3.이벤트와 동일                                                    
 //      function() {                                                       
 //           this.src ="./images/pengsu02.jpg"                                

 //      });
 //       img4.addEventListener("mouseout",
 //      function() {
 //         this.src ="./images/pengsu03.jpg"                                  
 //     });


var img4 = document.getElementById("img4");             // 아니면....


img4.addEventListener("mouseover", over3);

img4.addEventListener("mouseout", out3);

function over3() {
    img4.src ="./images/pengsu02.jpg"   
}

function out3() {
    img4.src="./images/pengsu03.jpg"  
}