const express = require("express");
const router  = express.Router();

router.get('/',(req,res) => {
    res.send(JSON.stringify({
        firstName: "Alex",
        lastName: "Harutyunyan"
    }))
});

module.exports = router;