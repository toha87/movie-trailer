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