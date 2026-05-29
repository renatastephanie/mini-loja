import express from "express";
import cors from "cors";
import dontenv from "dotenv";
import { connectDatabase } from "./config/database";
import { routes } from "./routes";

dontenv.config();

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.get("/", (req, res) => {
  res.json({ message: "Mini Loja API rodando!" });
});

const PORT = process.env.PORT ?? 3333;

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
