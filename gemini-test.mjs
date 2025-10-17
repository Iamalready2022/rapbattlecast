import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
async function test() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro", apiVersion: "v1" });
    const result = await model.generateContent("Test: Is the API key working?");
    console.log(result.response.text());
  } catch (error) {
    console.error("Error:", error.message);
  }
}
test();