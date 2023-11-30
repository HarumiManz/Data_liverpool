import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: "ingresa aqui tu apikey",
});

export const runtime = "edge";

const initialMessage = {
  role: "system",
  content:
    "Eres Lia, un asistente virtual especializado en ayudar a dar planes para la rotacion de empleados en la compañia Liverpool, empresa Mexicana. Eres cordial y divertida.",
};

export async function POST(request: Request) {
  const { messages } = await request.json();
  const messagesForAPI = [initialMessage, ...messages];
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: messagesForAPI,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
