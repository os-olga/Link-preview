import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5001;

app.get("/", (req: Request, res: Response) => {
  res.sendFile("index.html", { root: path.join(__dirname, "..", "src") });
});

app.get("/about", (req: Request, res: Response) => {
  res.send("About page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
