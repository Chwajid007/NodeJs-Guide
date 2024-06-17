const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write("Hello World");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Click Me</button></input></body></form>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (data) => {
      console.log("data", data);
      body.push(data);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.write("Hello World");
  res.write("<html>");
  res.write("<head><title>Enter Message</title></head>");
  res.write("</html>");
  res.end();
};

module.exports = 
{handler : requestHandler,
  someText : "Some hard coded text"
}
