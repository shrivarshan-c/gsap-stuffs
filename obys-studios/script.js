gsap.from(".line h1",{

    y:150,
    stagger:0.4,
    opacity:1,
    duration:1

})


var loader = document.querySelector(".preloader h5").textContent;

var count=0;
setInterval((element) => {
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
        clearInterval(count);


    }

},35);

console.log(loader);



