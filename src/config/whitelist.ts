const whitelist = process.env.CORS_WHITELIST
  ? process.env.CORS_WHITELIST.split(",").map((url) => url.trim())
  : [];

module.exports = whitelist;