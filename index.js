const express = requeri('express');

const server = express();

server.get('/teste', (req, res) => {
    return res.json({ hello: "Wordl" });
});

server.listen(3000);