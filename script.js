let nav = document.querySelector("nav");

nav.addEventListener("mouseenter", function() {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", { 
        height: "24vh",
     })
    tl.set(".nav-part2 h5", { 
        display: "block" 
    })
    tl.fromTo(".nav-part2 .nav-elem h5 span", { 
        y: 25, 
        opacity: 0 
    }, 
    { 
        y: 0, 
        opacity: 1, 
        stagger: { 
            amount: 0.6 
        }
    });
});

nav.addEventListener("mouseleave", function() {
    let tl = gsap.timeline();
    tl.to(".nav-part2 .nav-elem h5 span", { 
        y: 25, 
        opacity: 0, 
        stagger: { 
            amount: 0.1 
        }
    })
    tl.set(".nav-part2 h5", { 
        display: "none",
        duration: 0.1
    })
    tl.to("#nav-bottom", { 
        height: "0vh",
        duration: 0.2 
    });
});

