const Heroku = require('heroku-client');
const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN });

class HerokuClient {
    constructor() {
        if(module.herokuClient !== undefined) throw new TypeError("Tried to instantiate more than one heroku client!");
        module.herokuClient = this;
    }

    static getInstance() {
        if(module.herokuClient === undefined) throw new TypeError("There is no instance of the heroku client!");
        return module.herokuClient;
    }

    restartDyno(appName) {
        return heroku.delete('/apps/' + appName.toString() + '/dynos')
    }
}

module.exports = { HerokuClient };
