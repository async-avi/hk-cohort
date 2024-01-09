import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "working",
  });
});

app.get("/si", async (req, res) => {
  let principal = parseInt(req.query.p);
  let rate = parseInt(req.query.r);
  let time = parseInt(req.query.t);
  let si = (principal * rate * time) / 100;
  let amount = principal + parseInt(si);
  res.json({
    totalAmount: amount,
    interestEarned: si,
  });
});

app.listen(port, () => console.log(`Listening on ${port}`));
