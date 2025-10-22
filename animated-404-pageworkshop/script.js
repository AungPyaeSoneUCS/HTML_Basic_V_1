var tl = new TimelineMax(),
    split404 = new SplitText(".textB", {type:"chars"}),
    splitPage = new SplitText(".textA", {type:"chars"}),
    splitBack = new SplitText(".textC", {type:"chars"});

    split404.split({type:"chars"});
    splitPage.split({type:"chars"});
    splitBack.split({type:"chars"});

    tl.set('.hide', {opacity: 0})
      .set('.box', {scale: 0, transformOrigin: "50% 50%"})
      .set(".hide.big-white-circle", {scale: 0,  transformOrigin: "50% 50%"})
.set(".hide.top-triangles", {opacity: 0, y: 20})

  .set(".sq-bottom", {drawSVG:0})
  .set(".sq-top", {drawSVG:0})

      .to('.box', 2, {scale: 1, ease: Elastic.easeOut.config(1, 0.5)})
.to(".hide.grow-circles", 1, {opacity:1}, "-=0.5")

      // staggering in the 404 Text
      .staggerFrom(split404.chars, 1, {opacity: 0, scaleX: 0, ease: Power4.easeOut}, 0.05, "-=1")
      .staggerTo(split404.chars, 1, {opacity: 1, scaleX: 1, ease: Power4.easeOut}, 0.05, "-=1")
      // staggering in the Page Not Found Text
      .staggerFrom(splitPage.chars, 1, {opacity: 0, scaleX: 0, ease: Power4.easeOut}, 0.05, "-=1")
      .staggerTo(splitPage.chars, 1, {opacity: 1, scaleX: 1, ease: Power4.easeOut}, 0.05, "-=1")
      // staggering in the Go Back Text
      .staggerFrom(splitBack.chars, 1, {opacity: 0, scaleX: 0, ease: Power4.easeOut}, 0.05, "-=1.5")
      .staggerTo(splitBack.chars, 1, {opacity: 1, scaleX: 1, ease: Power4.easeOut}, 0.05, "-=1.5")
      
 .set(".hide.bottom-triangles", {scale: 0, rotation: 720,  transformOrigin: "50% 50%"})
 .to(".hide.bottom-triangles", 2, {opacity: 1, scale: 1, rotation: 0}, "-=1.5")
  .to(".hide.squiggles", 1, {opacity: 1, y: 0}, "-=1.25")
  .to(".sq-bottom", 1, {drawSVG:"100%"}, "-=1")
  .to(".sq-top", 1, {drawSVG:"100%"}, "-=1")

.to(".hide.left-lines", 1, {opacity:1}, "-=1.5")
.staggerFrom(".left-lines line", 0.75, {drawSVG:0}, 0.1, "-=1")


      .to('.hide.big-white-circle', 1, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.5)}, "-=1.5")
      .to(".hide.tri-dots", 1, {opacity: 1}, "-=1.5")
.to(".hide.top-triangles", 1, {opacity: 1, y: 0}, "-=1.25")

  .to('.grow-circles circle:nth-child(even)', 1, { transformOrigin: "50% 50%", scale: 1, ease:Linear.easeNone})
  .to('.grow-circles circle:nth-child(odd)', 1, { transformOrigin: "50% 50%", scale: 0.3, ease:Linear.easeNone}, "-=1")
  .to('.hide.grow-circles circle:nth-child(even)', 1, { transformOrigin: "50% 50%", scale: 0.3, ease:Linear.easeNone})
  .to('.hide.grow-circles circle:nth-child(odd)', 1, { transformOrigin: "50% 50%", scale: 1, ease:Linear.easeNone}, "-=1")


 .to(".back-button", 1, {fill: "#f62c72", transformOrigin: "50% 50%", scale: 1.1, ease: Elastic.easeOut.config(1, 0.2)}, "-=1.5")
  .to(".textC", 1, {color: "#043AB2", scale: 1.1}, "-=1.5")
      



// create repeating timeline for spinning circles
var tlSpin = new TimelineMax({repeat: -1});
    tlSpin.set('.hide.spin-circles', {rotation: 0, transformOrigin: "50% 50%", opacity: 1})
    .to('.hide.spin-circles', 3.5, {rotation: 360, ease:Linear.easeNone})