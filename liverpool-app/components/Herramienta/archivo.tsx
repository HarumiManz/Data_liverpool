//npm install --save @lottiefiles/react-lottie-player

"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import cat from "@/assets/gatito.json";

export default function Archivo() {
  const [file, setFile] = useState<File | null>(null);
  const [fileResponse, setfileResponse] = useState<any>(null);

  const [fileUploading, setfileUploading] = useState(false);

  const handleSubmitFile = async () => {
    if (file) {
      try {
        const form = new FormData();
        form.append("file", file);
        setfileUploading(true);
        //cambiar url siempre que se corra el server.py
        const response = await fetch("http://localhost:8082/upload", {
          method: "POST",
          body: form,
        });
        const data = await response.json();
        setfileUploading(false);  
        if (!data.error) {
          setfileResponse(data);
          console.log("Resultado : ", data);
        } else {
          console.log("Resultado : ", data);
          console.log("error subiendo archivo");
        }
      } catch (err) {
        console.log("error subiendo archivo");
      }
    }
  };

  const downloadFile = async () => {
    //cambiar url siempre que se corra el server.py 
    const response = await fetch("http://localhost:8082/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ fileId: fileResponse.fileId }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", "file.xlsx"); // Set the file name
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };

  return (
    <>
      <div className="bg-white px-20 py-20">
        <div>
          <h1 className=" text-3xl font-bold tracking-tight text-pink-900">
            Herramienta de predicción
          </h1>
        </div>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <div className=" bg-pink-50 shadow-xl rounded-md p-10 m-5">
            <h1 className="text-2xl font-medium text-pink-950 text-center">
              Cargar Archivo
            </h1>
            <p className="text-xl font-light text-gray-800 pt-3">
              Solo archivos csv o xlxs con menos de 1 Gb.
            </p>
            {fileUploading ? (
              <div className="w-[60%] h-full justify-center content-center flex flex-row">
                <div className="">
                  <Lottie animationData={cat} />
                </div>
              </div>
            ) : (
              <div className="rounded-md border-dashed border-pink-500 border-2 p-2 m-5">
                <input
                  type="file"
                  accept=".csv,.xls,.xlsx"
                  placeholder="Archivo CSV"
                  className="m-8 block"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <div className="px-8 flex justify-center items-center">
                  <button
                    onClick={handleSubmitFile}
                    className="py-2.5 px-10 mr-2 mb-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-pink-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-pink-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-pink-700"
                  >
                    Procesar archivo
                  </button>
                </div>

                <div className="px-10 text-center">
                  {fileResponse
                    ? fileResponse.message + " lineas : " + fileResponse.lines
                    : "No se ha procesado "}
                </div>
              </div>
            )}
          </div>
          <div className=" bg-pink-50 shadow-xl rounded-md p-10 m-5">
            <h2 className="text-2xl font-medium text-pink-900 text-center">
              Descarga tu nuevo archivo
            </h2>
            <h1 className="text-xl font-light text-gray-800 pt-3">
              {" "}
              Descarga tu archivo con la nueva columna "estatus" para conocer la probabilidad 
              de rotación de tus empleados.
            </h1>
            <div className=" rounded-md border-dashed border-pink-500 border-2 p-2 m-5">
              <h3 className="py-5 px-3">Nuevo archivo</h3>
              <div className="px-8 flex justify-center items-center">
                <button
                  onClick={downloadFile}
                  className=" py-2.5 px-10 mr-2 mb-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-pink-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-pink-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-pink-700"
                >
                  Descargar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
