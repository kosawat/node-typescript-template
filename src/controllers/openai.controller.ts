import { Request, Response } from "express";
import { generateChatResponse } from "../services/openai.service";

export const getChatResponse = async (req: Request, res: Response) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "Invalid prompt provided" });
  }

  const chatResponse = await generateChatResponse(prompt);
  res.status(200).json({ response: chatResponse });
};
