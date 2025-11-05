
let tl = gsap.timeline();

tl.from("nav h3",{

    y:-50,
    duration:1,
    opacity:0,
 
    stagger:0.2
    
})


tl.from(".home h1 ",{

    x:-500,
    duration:0.8,
    opacity:0,
   
    stagger:0.2
})

tl.from("img",{

    x:100,
    opacity:0,
     duration:1,
    rotate:45,
    stagger:0.6
})