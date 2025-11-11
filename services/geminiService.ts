import { GoogleGenAI } from "@google/genai";

// FIX: Refactor to align with @google/genai guidelines.
// The API key is sourced directly from process.env.API_KEY, and related checks are removed,
// assuming the key is always present in the environment as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const enhancePromptWithGemini = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Enhance the following creative prompt for an AI image/video generator. Make it more descriptive, vivid, and cinematic, but keep the core subject. Return ONLY the enhanced prompt itself, without any introductory text. Prompt: "${prompt}"`,
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to enhance prompt. Please check your API key and network connection.");
  }
};
