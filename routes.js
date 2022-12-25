const displayContent = (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");

  if (url == "/profile") {
    res.write("<p> Welcome to profile page </p>");
    return res.end();
  } else if (url == "/") {
    res.write("<p> Hey buddy </p>");
    return res.end();
  } else if (url == "/settings" && method == "POST") {
    res.write(
      '<h1>Form was submitted</h2> '
    );
    return res.end();
  } else if (url == "/settings") {
    res.write(
      '<h1>Settings</h2> <form action="/settings" method="POST"> <input type="text"> <button type="submit">Press me </button> </form>'
    );
    return res.end();
  }
  res.write("<p> Page not found </p> ");
};

module.exports = displayContent;
