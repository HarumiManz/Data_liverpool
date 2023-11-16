import { NextResponse } from "next/server";

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

//conectas con la api de open AI 
const openai = new OpenAI({
  apiKey: "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",
});


//indica que el endpoint va a correr en conjunto con el front 
export const runtime = "edge";

//end point que manda peticion a openAi 
export async function POST(request: Request) {
  const { messages } = await request.json();
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", //modelo barato, no mover 
    stream: true, //pasa el texto por palabras 
    messages,
  });

  
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
