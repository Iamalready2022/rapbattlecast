const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
async function test() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Test: Is the API key working?");
    console.log(result.response.text());
  } catch (error) {
    console.error("Error:", error.message);
  }
}
test();