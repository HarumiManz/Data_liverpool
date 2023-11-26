"use client";
import { useChat } from "ai/react";
import { Recomendaciones } from "@/components/ChatIA";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <>
      <main className="bg-white h-[80vh] p-5">
        <div className="flex-1 flex-row pt-10 mx-10 ">
          <h1 className="text-[#d14b8e] text-4xl font-bold">Habla con LIA!</h1>
          <h2 className="text-black pt-2 text-xl pb-5">
            Ella te ayudará a formular las mejores estrategias! Cuidemos nuestro talento generando
            planes de acción específicos para la retención de talento.
          </h2>
        </div>
        <div className="flex flex-9 h-full relative justify-center content-center mb-10">
          <div className="overflow-auto h-[60vh] w-[70%] text-black">
            {messages.map((m) => (
              <div className="bg-pink-50 m-4 p-3 rounded-xl" key={m.id}>
                <div className=" flex flex-row items-center justify-start gap-2 font-bold capitalize">
                  <img
                    src={
                      m.role == "user" ? "/images/user.png" : "/images/lia.png"
                    }
                    className="w-8 h-8 rounded-xl"
                  />
                  {m.role == "user" ? "Usuario" : "Lia"} :{" "}
                </div>

                <div className="mt-2 ml-2">{m.content}</div>
              </div>
            ))}
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-row absolute bottom-[6.5rem] left-1/2 transform translate-x-[-50%] border-2 border-pink-400 p-3 self-center content-center align-middle justify-center gap-2 rounded-xl"
          >
            <input
              value={input}
              placeholder="Hola Lia!"
              onChange={handleInputChange}
              className="w-[40vw] bg-transparent placeholder:text-slate-500 text-lg focus:outline-none text-black"
            />
            <button type="submit">
              <svg
                className="h-8 w-8 text-pink-400"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" />{" "}
                <line x1="12" y1="8" x2="8" y2="12" />{" "}
                <line x1="12" y1="8" x2="12" y2="16" />{" "}
                <line x1="16" y1="12" x2="12" y2="8" />
              </svg>
            </button>
          </form>
        </div>
      </main>
      <div className=" bg-white py-20">
        <hr className=""/>
        <Recomendaciones/>
      </div>
    </>
  );
}
