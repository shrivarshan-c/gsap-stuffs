
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

tl.from(".imagediv img",{

    x:100,
    opacity:0,
     duration:1,
    rotate:45,
    stagger:0.6
})


tl.to(".page2 .img4",{
    
 
     borderRadius:"0%",
    width:"100%",
    height:"100%",
    duration:2,
  
    rotate:0,
    opacity:1,
     ease: "power1.inOut",
    scrollTrigger:{
 scroller:"body",
        trigger:".page2",
       scrub:3,
      start:"top 0",
      end:"top -100%",
      pin:true  
    }


})




gsap.to(".page3 h1",{

xPercent:-150,
scrollTrigger:{
trigger:".page3",
scroller:"body",
start:"top 0",
end:"top -200%",
scrub:4,
pin:true


}








}

)