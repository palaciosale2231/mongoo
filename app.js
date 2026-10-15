import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = proccess.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`servidor listo en el puerto ${PORT}`);
});
