

var text = document.querySelectorAll(".page2 h1");


// var splitText = text.split("");


var res;

text.forEach(function(element)
{

    var Single_Element = "";

    res = element.textContent.split("");
   console.log(res);



res.forEach(function(element)
{
   Single_Element+=`<span>${element}</span>`

}


)

element.innerHTML = Single_Element;
})

console.log(res)

// var result="";
// splitText.forEach(function(element){

//     result+=`<span>${element}</span>`;

// })

// console.log(result);


// document.querySelector("h1").innerHTML=result;


gsap.to(".page2 h1 span",{

    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top -10%",
        scrub:2,
    }
    

})