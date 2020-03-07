console.log('OK');

let prevLinkId;

// Initialize player
const player = new Plyr('#player', {

    controls: ['play', 'current-time', 'progress', 'volume'],
    autoplay: true,
    muted: true,
    loop: { active: true }

});

let linkArray = ["#navLinkHome", "#navLinkInfo", "#navLinkCast", "#navLinkLinks"];

for (const navLink of linkArray) {

    let linkElement = document.querySelector(navLink);

    linkElement.addEventListener('click', (event) => {

        if (prevLinkId) {
            document.querySelector("#" + prevLinkId).classList.remove("active");
        }

        prevLinkId = event.target.id;

        linkElement.classList.add("active");
    });
}


let split = Splitting({
    target: '#info'
});


var tl = gsap.timeline(),

    chars = split[0].chars;

gsap.set("#info", { perspective: 300 });

tl.from(chars, { duration: 10, opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: "back", stagger: 0.01 }, "+=0");