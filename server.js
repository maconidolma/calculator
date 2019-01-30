const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');
const DBService = require('./services/DBService');


let dbService = new DBService();

let server;

module.exports = app.prepare()
    .then(async () => {
        server = express();
        await dbService.init();
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: false }));

        // GET handlers
        server.get('/expressions', async function (req, res) {
            res.json( await dbService.getAll());
        });

        // POST handler
        server.post('/expressions', async function (req, res) {
            await dbService.addEntry(req.body.operation);
            res.json({ok:true})
        });

        // DELETE handler
        server.delete('/expressions', async function (req, res) {
            let isSuccess = true;
            if (req.body.indexToDelete === -1) {
                await dbService.deleteAll();
            } else {
              await dbService.deleteEntry(req.body.indexToDelete);
            }
            res.json({huiiii: isSuccess});
        });

        // GET handlers
        server.get('*', (req, res) => {
            return handle(req, res)
        });

        return server.listen(3000);
    });