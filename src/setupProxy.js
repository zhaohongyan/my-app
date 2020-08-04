const { createProxyMiddleware } = require("http-proxy-middleware");

const target = "http://www.example.org";

module.exports = app => {
  app.use(
    "/api",
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
}