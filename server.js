const express = require("express");
const next = require("next");
const port = 4000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();
  // server.get("/", (req, res) => {
  //   app.render(req, res, "/");
  // });
  // server.get("/blog/:id", (req, res) => {
  //   const id = req.params.id;
  //   // console.log("serverID", id);
  //   const queryParams = {
  //     itemId: id,
  //   };
  //   app.render(req, res, "/Blog", queryParams);
  // });
  // server.get("/aboutUs", (req, res) => {
  //   app.render(req, res, "/AboutUs");
  // });
  // server.get("/careers", (req, res) => {
  //   app.render(req, res, "/Careers");
  // });
  // server.get("/archives", (req, res) => {
  //   app.render(req, res, "/Archives");
  // });
  server.all("*", (req, res) => {
    return handle(req, res, "/");
  });
  server.listen(4000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${4000}`);
  });
});
