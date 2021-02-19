class Clock {
    constructor() {
        // 1. Create a Date object.
        this.date = new Date();

        // 2. Store the hours, minutes, and seconds.
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        
        // 3. Call printTime.
        this.printTime();

        // 4. Schedule the tick at 1 second intervals.
        
        // this._tick.call()
        debugger
        setInterval(this._tick.bind(this), 1000);

    }

    printTime() {
        // Format the time in HH:MM:SS
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
        // Use console.log to print it.
    }

    _tick() {
        // 1. Increment the time by one second.
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        
        // 2. Call printTime.
        this.printTime();
    }
}

const clock = new Clock();