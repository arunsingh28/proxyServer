module.exports = knowDomain = (req) => {
    const protocall = req.protocol;
    const host = req.hostname;
    return { protocall, host };
};