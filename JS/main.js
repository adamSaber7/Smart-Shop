$(document).ready(function () {

    // Feature Products Carousel فقط
    $('.special-offer-container > .container .owl-carousel').owlCarousel({
        // loop: true,            // لازم لو عايز يدور
        margin: 20,             // مسافة بين الكروت
        // nav: true,              // أسهم التنقل
        dots: false,            // إخفاء النقاط
        navText: [
            "<i class='fa-solid fa-angle-left'></i>",
            "<i class='fa-solid fa-angle-right'></i>"
        ],
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1000: { items: 3 }   // زي الموقع الأصلي
        }
    });
    
    // باقي الكاروسيلز (Popular & Recommended)
    $('#popular-products .owl-carousel').not('.special-offer-container .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        // nav: true,
        dots: false,
        navText: [
            "<i class='fa-solid fa-angle-left'></i>",
            "<i class='fa-solid fa-angle-right'></i>"
        ],
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            767: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
        }
    });
    
});


$('#pro-nav .container .owl-carousel').owlCarousel({
    loop: true,            // لازم لو عايز يدور
    margin: 20,             // مسافة بين الكروت
    nav: true,              // أسهم التنقل
    dots: false,            // إخفاء النقاط
    navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>"
    ],
    responsive: {
        0: { items: 2 },
        480: { items: 3 },
        576: { items: 4 },
        768: { items: 5 },
        992: { items: 6 },
        1200: { items: 8 }   // زي الموقع الأصلي
    }
});

$('#posts .container .owl-carousel').owlCarousel({
    loop: true,            // لازم لو عايز يدور
    margin: 20,             // مسافة بين الكروت
    // nav: true,              // أسهم التنقل
    dots: false,            // إخفاء النقاط
    navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>"
    ],
    responsive: {
        0: { items: 1 },
        480: { items: 2 },
        992: { items: 3 },
        1200: { items: 4 }   // زي الموقع الأصلي
    }
});

$('#prands .container .owl-carousel').owlCarousel({
    loop: true,            // لازم لو عايز يدور
    margin: 20,             // مسافة بين الكروت
    // nav: true,              // أسهم التنقل
    dots: false,            // إخفاء النقاط
    navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>"
    ],
    responsive: {
        0: { items: 2 },
        480: { items: 3 },
        767: { items: 4 },
        992: { items: 5 },
    }
});



















// $(document).ready(function () {
    
//     // Feature Products Carousel فقط
//     $('#popular-products .container .special-offer-container .container .owl-carousel').owlCarousel({
//         // loop: true,
//         margin: 20,             // مسافة أكبر بين الكروت زي الموقع الأصلي
//         nav: true,              // أسهم التنقل
//         dots: false,            // مخفي الدوتس تحت
//         navText: [
//             "<i class='fa-solid fa-angle-left'></i>",
//             "<i class='fa-solid fa-angle-right'></i>"
//         ],
//         responsive: {
//             0: { items: 1 },
//             600: { items: 2 },
//             1000: { items: 3 }   // 4 كروت على Desktop زي الموقع الأصلي
//         }
//     });

//     // باقي الكاروسيلز (Popular & Recommended)
//     $('#popular-products .owl-carousel').owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: true,
//         dots: true,           // لو عايز الدوتس لبقية الكاروسيلز
//         responsive: {
//             0: { items: 1 },
//             600: { items: 3 },
//             1000: { items: 5 }
//         }
//     });

// });












// // $(document).ready(function () {
// //     $('.owl-carousel').owlCarousel({
// //         loop: true,
// //         margin: 10,
// //         responsiveClass: true,
// //         responsive: {
// //             0: {
// //                 items: 1,
// //                 nav: true
// //             },
// //             600: {
// //                 items: 3,
// //                 nav: true
// //             },
// //             1000: {
// //                 items: 5,
// //                 nav: true,
// //                 // loop: false
// //             }
// //         }
// //     })

// //     $('#popular-products .owl-carousel').owlCarousel({
// //         loop: true,
// //         margin: 20,
// //         responsive: {
// //             0: { items: 1 },
// //             600: { items: 2 },
// //             1000: { items: 4 }
// //         }
// //     });






// // });



