let Express = require('express');
let bodyparser = require('body-parser');
let homeMiddleware = require('./middlewares/home');
let eventsMiddleware = require('./middlewares/events');
let app = Express();
app.use(bodyparser.urlencoded({ extends: false }));
app.use('/events', eventsMiddleware);
app.use('/', homeMiddleware);
app.listen(5000, () => {
    console.log("listening on 5000...");
});
