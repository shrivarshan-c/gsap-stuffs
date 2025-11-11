
var tl = gsap.timeline();

tl.from(".line h1",{

    y:150,
    stagger:0.3,
    opacity:1,
    duration:1

})

tl.from(".preloader ,.line h2" ,{

    y:-350,
    opacity:0.2,
    onStart:function() {

var loader = document.querySelector(".preloader h5").textContent;
var count=0;


   var counter =  setInterval((element) => {
            if(count<100)
            {
                count++;
                document.querySelector(".preloader h5").textContent= count;

                console.log(count);
            }
            else
            {
                count=100;
                document.querySelector(".preloader h5").textContent= count;
                clearInterval(counter);

            }

        },35);

    }

})
tl.to(".loader",{


    delay:3,
    duration:0.8,

    display:"none"
})

tl.from(".page1",{
y:1200,
opacity:0

})


tl.to(".loader",{
    display:"none"
})
