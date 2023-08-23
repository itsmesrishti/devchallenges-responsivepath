var heightCarousel = document.querySelector('body').scrollHeight;

document.getElementsByClassName("carousel")[0].style.height = heightCarousel + "px";


// OPEN CAROUSEL WITH CORRECT IMAGE
var imgCollection = document.querySelectorAll(".grid-img");

imgCollection.forEach(item => {
    item.addEventListener('click', function(event) {
        var imgID = event.target.id;
        var idNum = imgID[imgID.length - 1];

        var carouselImgID = "carousel-img-" + idNum;
        document.querySelector('.carousel').style.visibility = "visible";
        document.getElementById(carouselImgID).style.display = "block";

        // CLOSE CAROUSEL
        document.querySelector('.close-icon').addEventListener('click', function() {
            document.querySelector('.carousel').style.visibility = "hidden";
            document.getElementById(carouselImgID).style.display = "none";
        });

        // NAVIGATE CAROUSEL
        document.querySelector('.right-icon').addEventListener('click', function() {
            if (idNum == "6") {
                idNum = "0";   
            }

            document.getElementById(carouselImgID).style.display = "none";
            idNum = Number(idNum) + 1;
            carouselImgID =  "carousel-img-" + idNum;
            document.getElementById(carouselImgID).style.display = "block";
        });

        document.querySelector('.left-icon').addEventListener('click', function() {
            if (idNum == "1") {
                idNum = "7";   
            }

            document.getElementById(carouselImgID).style.display = "none";
            idNum = Number(idNum) - 1;
            carouselImgID =  "carousel-img-" + idNum;
            document.getElementById(carouselImgID).style.display = "block";  
        });
    })
})


// SETTING HEIGHT FOR TOP POSITION OF CAROUSEL WRAPPER DIV
function calcTopPosition(x) {
    if (x.matches) {
        window.addEventListener('resize', function() {
            var viewportHeight = window.innerHeight;
            var wrapperHeight = document.querySelector('.wrapper').clientHeight;
            var topPos = (viewportHeight - wrapperHeight) / 2;
            document.querySelector('.wrapper').style.top = topPos + "px";
        });
    }
}
  
var x = window.matchMedia("(min-width: 500px)");
calcTopPosition(x);
x.addEventListener('change', calcTopPosition);

