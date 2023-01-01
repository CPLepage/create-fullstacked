import Server from "fullstacked/server";
import express from "express"

const app = express();

app.get("/hello-express", (req, res) => {
    res.send("Hello from express");
});

const { handler, resolver } = Server.promisify(app);

// express bottoms out here
app.use(resolver);

Server.listeners.push({
    title: "express",
    handler
});
