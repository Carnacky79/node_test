const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send({
        "status": res.statusCode,
        "data": {
            "url": {
                "domain": req.get('host'),
                "path": req.originalUrl
            },
            "response": {
                "headers": {
                    "Request Type": req.method
                }
            },
            "request":{

            }
        }
    })
});

router.post('/', (req, res, next) => {
    res.send({
        "status": res.statusCode,
        "data": {
            "url": {
                "domain": req.get('host'),
                "path": req.originalUrl
            },
            "response": {
                "headers": {
                    "Request Type": req.method
                }
            },
            "request":{

            }
        }
    })
});


module.exports = router;