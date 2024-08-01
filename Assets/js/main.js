
// Set the date we're counting down to
var countDownDate = new Date("Mar 30, 2026 10:33:34").getTime();

// update the count down every 1 second 
var x = setInterval(function () {
    // get tody's date and time
    var now = new Date().getTime();
    // find the distance between now and the count down date 
    var distance = countDownDate - now;
    // Time calculation for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // var z = document.getElementById("demo").innerHTML ='<span id ="days">' + days + '</span>' + '<span id ="hours">' + hours + '</span>' +'<span id ="minutes">' + minutes + '</span>' + '<span id ="seconds">' + seconds + '</span>';

    var z = document.getElementsByClassName("demos");
    for (var i = 0; i < z.length; i++) {
        z[i].innerHTML =
            '<span id ="days">' + days + '</span>'
            + '<span id ="hours">' + hours + '</span>' +
            '<span id ="minutes">' + minutes + '</span>' +
            '<span id ="seconds">' + seconds + '</span>';

    }

    if (distance < 0) {
        clearInterval(x);
        // document.getElementById("after-expired").setAttribute("id", "offer-expired-text");
        // document.getElementById("after-expired-inner").setAttribute("id", "offer-expired-text-inner");
        // document.getElementById("offer-expired-text-inner").style.backgroundColor = "#caca14";
        // document.getElementById("offer-expired-text-inner").innerHTML = "پیشنهاد ویژه محصول به پایان رسیده!" + '<i class= "fas fa-sad-tear ps-1">' + "" + '</i>';
        // document.getElementById("demo").innerHTML =
        //     '<span id ="days">' + "00" + '</span>' +
        //     '<span id ="hours">' + "00" + '</span>' +
        //     '<span id ="minutes">' + "00" + '</span>' +
        //     '<span id ="seconds">' + "00" + '</span>';
        // document.getElementById("offer-blur").style.filter = "blur(1px)";
        // demos
        var y = document.getElementsByClassName("demos");
        for (var i = 0; i < z.length; i++) {
            y[i].innerHTML = '<span id ="days">' + "00" + '</span>' +
                '<span id ="hours">' + "00" + '</span>' +
                '<span id ="minutes">' + "00" + '</span>' +
                '<span id ="seconds">' + "00" + '</span>';

        }
        // document.getElementById("after-expired").setAttribute("id","offer-expired-text");
        var g = document.getElementsByClassName("after-expired");
        for (var i = 0; i < z.length; i++) {
            g[i].classList.add("offer-expired-text");

        }
        var m = document.getElementsByClassName("after-expired-inner");
        for (var i = 0; i < z.length; i++) {
            m[i].classList.add("offer-expired-text-inner");

        }
        var f = document.getElementsByClassName("offer-expired-text-inner");
        for (var i = 0; i < z.length; i++) {
            f[i].innerHTML = "پیشنهاد ویژه محصول به پایان رسیده!" + '<i class= "fas fa-sad-tear ps-1">' + "" + '</i>';
        }
        var h = document.getElementsByClassName("offer-blur");
        for (var i = 0; i < z.length; i++) {
            h[i].style.filter = "blur(1px)";
        }

    }
}, 1000);
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        rtl: true,
        nav: true,
        dots: true,
        center: false,
        items: 4,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        slideBy: 3,
        autoplayHoverPause: true,
        // URLhashListener:true,
        // autoplayHoverPause:true,
        // startPosition: 'URLHash'
        responsive: {
            0: {
                items: 1,
                nav: true,
                slideBy: 1,

            },
            600: {
                slideBy: 2,
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                slideBy: 2,
                nav: true,
                loop: true,
                center: true,

            },
            1200: {
                items: 4,
                slideBy: 4,
                nav: true,
                loop: true,
                center: false,

            }
        }
    });
});

// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// $('.tt').tooltip('show');
// $('.tot').toast('show');


// const popover = new bootstrap.Popover('.example-popover', {
//     container: 'body'
//   })

// $('.popover').popover('show');
//         const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
//         const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

