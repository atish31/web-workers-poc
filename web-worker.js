"use strict";

self.postMessage('Hello');
self.onmessage = function(event) {
    console.log(event);
}