const url = require('url');

class Routes {
    #io
    constructor(io){
        this.#io = io;
    }

    async post(req, res)  {
        const { headers } = req;
        const { query: { socketId }} = url.parse(req.url, true)

        const onFinish = (res, redirectTo) => {
            res.writeHead(303, {
                Connection: 'close',
                Location: `${redirectTo}?msg=Files uploaded with success!`
            })

            res.end();
        }

        return onFinish(res, headers.origin);
    }
}

module.exports = Routes