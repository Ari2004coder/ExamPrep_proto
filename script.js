let tl=gsap.timeline()
tl.from("#page1 h1,#page1 #box",{
    opacity:0,
    y:40,
    duration:2,
    delay:1,
    stagger:0.3
})
gsap.to("#page1 #box",{
    
    
     x:100,
    rotate:360,

    // radius:"50%",
    scrollTrigger:{
        trigger:"#page1 #box",
        scroller:"body",
        markers:true,
        start:"top 20%",
        end:"top 5%",
       scrub:1


    }
   
    
})
gsap.from("#page2 h1,#page2 section,#page2 #container1",{
    opacity:0,
    y:40,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:false,
        start:"top 30%",
        end:"top 10%",
        scrub:2,
}
});
const year=document.querySelectorAll(".dropdown-item");
year.forEach(function(item){
   item.addEventListener("click",function(e){
   
    if(e.target.id==="N23"){
        
        window.open("/Math/M\(IT\)302_2023.pdf");}
    
   })
})
