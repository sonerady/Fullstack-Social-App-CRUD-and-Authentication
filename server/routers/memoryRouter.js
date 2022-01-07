import express from "express";
import mongoose from "mongoose";

import Memory from "../db/memoryModel.js";

const router = express.Router();

// get all memories from db

router.get("/", async (req, res) => {
  try {
    const memories = await Memory.find();

    res.status(200).json(memories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Get single  memory from db

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "memory id is not valid" }); // Geçerli olmayan id'lerde bunu döndürecek.

    const memory = await Memory.findById(id); // Eğer id geçerli ise bunu döndirecek.Döndürülmesi gereken budur.
    if (!memory) return;

    res.status(200).json(memory);
  } catch (error) {
    res.status(404).json({ message: "memory not found" });
  }
});

// Create a memory

router.post("/", async (req, res) => {
  try {
    const memory = req.body;
    const createdMemory = await Memory.create(memory);
    res.status(201).json(createdMemory);
  } catch (error) {
    res.json({ message: "Create memory failed" });
  }
});

// Update a memory

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "memory id is not valid" }); // Geçerli olmayan id'lerde bunu döndürecek.

    const { title, content, creator, image } = req.body;
    const updateMemory = await Memory.findByIdAndUpdate(
      id,
      {
        title,
        content,
        creator,
        image,
        _id: id,
      },
      { new: true }
    );
    res.status(200).json(updateMemory);
  } catch (error) {
    res.json({ message: "Update failed" });
  }
});

// Update a memory

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      res.status(404).json({ message: "memory id is not valid" }); // Geçerli olmayan id'lerde bunu döndürecek.
    await Memory.findByIdAndDelete(id);

    res.status(200).json({ message: "Memory has been deleted" });
  } catch (error) {
    res.json({ messsage: error.message });
  }
});

export default router;
