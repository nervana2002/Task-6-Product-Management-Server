const appLogger = (req, res, next) => {
const now = new Date().toISOString();
console.log(`[AppLogger] ${now} - ${req.method} ${req.originalUrl}`);
next();
};

module.exports = { appLogger };