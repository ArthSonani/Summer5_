import express from "express";
import {
  products,
  getProductBySlug,
  getProductsByCategory,
} from "../data/products.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/category/:category", (req, res) => {
  const list = getProductsByCategory(req.params.category);
  res.json(list);
});

router.get("/:slug", (req, res) => {
  const product = getProductBySlug(req.params.slug);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

export default router;
