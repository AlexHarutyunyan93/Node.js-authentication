const whitelist = ["http://localhost:9090"];
const corsOptions = {origin: (origin, callback) => {
        if(whitelist.indexOf(origin) != -1) {
            callback(null, true)
        } else {
            callback(new Error( "Not allowed by CORS"))
        }
    }
};
module.exports = corsOptions;