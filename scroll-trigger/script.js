gsap.to(".page1 .circle",{

    x:500,
    duration:2,
    delay:1,
    scale:0.2,

     scrollTrigger: {
    trigger: ".page1 .circle",  // which element to watch
    start: "top top",    // when animation should start
    end: "top 80%",      // when animation should end
    scrub: true,         // sync animation to scroll
    markers: true }



    
})


gsap.from(".page2 .circle",{

    x:500,
    duration:2,
    delay:1,
    scale:0.2,
   scrollTrigger: {
    trigger: ".page2 .circle",  // which element to watch
    start: "top 80%",    // when animation should start
    end: "top 30%",      // when animation should end
    scrub: true,         // sync animation to scroll
    markers: true }

    
})

gsap.from(".page3 .circle",{

    x:-500,
    duration:2,
    delay:1,
    scale:0.2,
  scrollTrigger: {
    trigger: ".page3 .circle",  // which element to watch
    start: "top 80%",    // when animation should start
    end: "top 30%",      // when animation should end
    scrub: true,         // sync animation to scroll
    markers: true }

    
}) 