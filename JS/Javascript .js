
var nav =  document.querySelector(".nav-main");
var colors =  document.querySelector(".colors");
var toggledBar = document.querySelector(".Toggled-bar");

function navM(){
    toggledBar.style.display="grid";
    toggledBar.style.animation= "l2r .5s 0s forwards";
    colors.style.display="flex";
    colors.style.animation= "l2r .07s 0s forwards";
};


function navT(){
    nav.style.display="none";
    toggledBar.style.animation= "r2l .5s 0s forwards";
    colors.style.display="none";
    
}






// var cards= ["#card-1","#card-2","#card-3","#card-4"];
//     var card =document.getElementById("card-arrow-prev");
//     var count= cards.length-4; 

// function prev_package(){
//         count=count+1;
//         if(count > cards.length-1){
//             count=cards.length-4;
//             card.href= cards[count];}
//             else{card.href= cards[count];}
// }







    var whats= ["#whats-1","#whats-2","#whats-3"];
    var what =document.getElementById("whats-arrow-prev");
    var count2= whats.length-3; 

function prev_whats(){
        count2=count2+1;
        if(count2 > whats.length-1){
            count2=whats.length-3;
            what.href= whats[count2];}
            else{what.href= whats[count2];}
}


var shops= ["#shop-1","#shop-2","#shop-3","#shop-4"];
var shop =document.getElementById("shops-arrow-prev");
var count3= shops.length-shops.length; 

function prev_shops(){
    count3=count3+1;
    if(count3 > shops.length-1){
        count3=shops.length-shops.length;
        shop.href= shops[count3];}
        else{shop.href= shops[count3];}
}





                                                   /* IMAGE SLIDER  START */

    // var photos = ["/images/slide 1.jpg","/images/slide 2.jpg","/images/slide 3.jpg"];
    // var imgTag = document.querySelector(".slide");
    // var time = 3000;
    // var count = 0;

    // imgTag.src= photos[count] ;


    

    // function prev(){
    //     count= count-1 ;

    //     if(count <0){
    //         count=photos.length-1;
    //         imgTag.src= photos[count] ;}
    //         else{imgTag.src= photos[count] ;}

        
    // }

    

    // function next(){
    //     count= count+1 ;

    //     if(count >photos.length-1 ){
    //         count=0;
    //         imgTag.src= photos[count] ;
             
    //     }

    //     else{imgTag.src= photos[count] ;
    //     }
        
    // }

    // setInterval(next, 4000 );

 







                                                   /* IMAGE SLIDER  END */


                                                //    OWL CAROUSAL START

<script src="JS/owl.carousel.min.js"></script>
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

    
                                                //    OWL CAROUSAL END