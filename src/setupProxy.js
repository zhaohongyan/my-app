const { createProxyMiddleware } = require("http-proxy-middleware");

const target = "http://localhost:3000";

module.exports = app => {
  app.use(
    "/api",
    createProxyMiddleware({
      target,
      changeOrigin: true,
      changeHost: true,
    })
  );
}