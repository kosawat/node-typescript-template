import OpenAI from "openai";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const openaiApiKey = process.env.OPENAI_API_KEY || "My API Key";

export const generateChatResponse = async (prompt: string) => {
  try {
    if (!prompt || typeof prompt !== "string") {
      throw new Error("Invalid prompt provided");
    }

    // Initialize OpenAI client
    const client = new OpenAI({ apiKey: openaiApiKey });
    const chatResponse = await client.responses.create({
      model: "gpt-4.1",
      input: prompt,
    });

    return chatResponse.output_text;
  } catch (error) {
    console.error("Error generating chat response:", error);
    throw new Error("Failed to generate chat response");
  }
};
