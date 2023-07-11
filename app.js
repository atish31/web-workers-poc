console.log('here');

function onMessage(ww, evt) {
    console.log(evt);
    ww.postMessage('Hey there')
}

function init() {
    const ww = new Worker('web-worker.js');
    ww.addEventListener('message', onMessage(ww));
}

init();


