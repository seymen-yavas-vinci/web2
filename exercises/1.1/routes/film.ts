import { Router } from "express";
const router = Router();

type Film = {
  id: number;
  title: string;
  director: string;
  duration: number;
  budget?: number;
  description?: string;
  imageUrl?: string;
};

const films: Film[] = [
  { id: 1, title: "Film A", director: "Alice", duration: 120 },
  { id: 2, title: "Film B", director: "Bob",   duration: 95  },
  { id: 3, title: "Film C", director: "Charly",duration: 110 },
];

router.get("/", (_req, res) => res.json(films));

export default router;
