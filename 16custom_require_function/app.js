const { log } = require('console');

const a = loadModule("./math");



function loadModule(path) {
    const fs = require('fs');
    const vm = require('vm');
    if (path.endsWith('.js') === false) {
        path += '.js';
    }
    // console.log("PATH: ", path);

    const fileContent = fs.readFileSync(path).toString();
    // console.log(fileContent);
    return (function (send) {

        vm.runInNewContext(fileContent, { send, loadModule, console })
        // eval(fileContent)
        // console.log(send);
        
        return send
    })({});
}

// flow: app.js >> math.js >> sum.js >> math.js >> app.js