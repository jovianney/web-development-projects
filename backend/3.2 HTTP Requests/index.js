import banana from "express"; 
const apple = banana();
const port = 3000;

apple.get("/", (req, res) => {
  res.send("<h1>Hola Puto</h1>");
});

apple.listen(port, () => {
  console.log(`Server started on port ${port}`);
});