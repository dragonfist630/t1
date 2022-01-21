import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV || "development"}`
}); // development default

console.log(`USING ENVIRONMENT: ${process.env.NODE_ENV}`);
