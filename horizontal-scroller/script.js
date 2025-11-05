gsap.to(".page2 h1",{

xPercent:-110,

scrollTrigger:{

    trigger:".page2",
    scroller:"body",
    start:"top 0",
    end:"top -100%",
    scrub:4,
    markers:true,
    pin:true

    
}


})