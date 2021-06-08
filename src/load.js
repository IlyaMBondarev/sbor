function loadScript(url, callback, type = 'module') {
    if (loaded.length && loaded.findIndex(a => a === url) >= 0) {
        callback();
    } else {
        loaded.push(url);
        const element = document.createElement("script");
        element.type = type;
        element.src = url;
        element.onload = callback;

        document.body.appendChild(element);
    }
}

let loaded = [];