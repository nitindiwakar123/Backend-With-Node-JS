class CustomEventEmitter {
    constructor() {
        this._events = {};

    }

    on(event = [], handler) {
        if (event in this._events) {
            this._events[event].push({
                handler: handler,
                once: false
            });
        } else {
            this._events[event] = [
                {
                    handler: handler,
                    once: false
                }
            ];
        }

    }

    once(event=[], handler) {
        if (event in this._events) {
            this._events[event].push({
                handler: handler,
                once: true
            });
        } else {
            this._events[event] = [
                {
                    handler: handler,
                    once: true
                }
            ];
        }
    }

    emit(event, ...params) {
        if (event in this._events) {
            this._events[event].map((handlerObj) => {
                handlerObj.handler(...params);
                if(handlerObj.once === true) {
                    delete this._events[event];
                }
            });
        } return
    }


}

const customEmitter = new CustomEventEmitter();

customEmitter.on('foo', (e) => {
    console.log("Hello from foo!");
console.log(e);
});
customEmitter.once('keypress', (e) => {
    console.log('You pressed a key!');
    console.log(e);
})

console.log(customEmitter._events);
customEmitter.emit('keypress', "R");
console.log(customEmitter._events);
