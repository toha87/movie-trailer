console.log('OK');

// Initialize player
const player = new Plyr('#player', {

    controls: ['play', 'current-time', 'progress', 'volume'],
    autoplay: true,
    muted: true,
    loop: { active: true }

});