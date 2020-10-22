//@desc Logs request 
const logger = (req, res, next) => {
    req.hello = 'Hey BB';
    console.log(`${req.method} ${req.protocal}://${req.get('host')}${req.originalUrl}`);
    next();
};

module.exports = logger;
