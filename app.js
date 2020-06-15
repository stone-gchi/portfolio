// //initial controller
// const controller = new ScrollMagic.Controller();

// //loop through all elements with the class "fade-in"
// const fadeIn = document.querySelectorAll(".fade-in");

// fadeIn.forEach((e) => {
//     //build a tween
//     let tl = gsap.from(e, {
//         duration: 0.5,
//         autoAlpha: 0,
//         ease: ""
//     });
//     //build a scene
//     let scene = new ScrollMagic.Scene({
//             //define trigger element
//             triggerElement: e,
//             triggerHook: 0.6,
//         })
//         .setTween(tl)
//         .addTo(controller);
//     scene.addIndicators({
//         colorTrigger: "red",
//         colorStart: "red",
//         colorEnd: "red",
//         indent: 5,
//     });
// });

// // nav bar scrollTo
// const navBtn = document.querySelectorAll("nav .nav-link");
// gsap.registerPlugin(ScrollToPlugin);

// navBtn.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//         gsap.to(window, {
//             scrollTo: {
//                 y: ".section" + (index + 1),
//                 offsetY: 55,
//             },
//             duration: 1,
//             ease: "expo.out",
//             // y: -500,
//         });
//     });
// });



//section1 jumbotron objects animation
let movingObj = document.querySelectorAll(".moving-object li");

movingObj.forEach((obj) => {
    //mouseover to add red light
    obj.addEventListener("mouseover", () => {
        obj.style.boxShadow = "10px 10px 20px 0px red";
    });
    //mouseout back to white light
    obj.addEventListener("mouseout", () => {
        obj.style.boxShadow = "10px 10px 20px 0px";
    });

    obj.addEventListener("click", () => {
        //click to disappear
        obj.style.display = "none";
        // appear again after 4 seconds
        setInterval(() => {
            obj.style.display = "block";
        }, 4000);
    });
});