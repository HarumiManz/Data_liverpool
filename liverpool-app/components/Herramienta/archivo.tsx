"use client";
import React, { useState } from "react";

export default function Archivo() {
  const [file, setFile] = useState<File | null>(null);
  const [fileResponse, setfileResponse] = useState<any>(null);

  const [data, setData] = useState(null);

  const handleSubmitFile = async () => {
    if (file) {
      try {
        const form = new FormData();
        form.append("file", file);
        //cambiar url siempre que se corra el server.py
        const response = await fetch("http://10.48.111.223:5000/upload", {
          method: "POST",
          body: form,
        });
        const data = await response.json();
        if (!data.error) {
          setfileResponse(data);
          console.log("Resultado : ", data);
        } else {
          console.log("error subiendo archivo");
        }
      } catch (err) {
        console.log("error subiendo archivo");
      }
    }
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
          <div className=" bg-pink-50 shadow-md rounded-md p-10 m-5">
            <h1 className="text-2xl font-medium text-pink-950">
              Cargar Archivo
            </h1>
            <p className="text-xl font-light text-gray-800 pt-3">
              Solo archivos .xlsx con menos de 1 Gb
            </p>
            <div className="rounded-md border-dashed border-pink-500 border-2 p-2 m-5">
              <input
                type="file"
                accept=".csv,.xls"
                placeholder="Archivo CSV"
                className="m-8 block"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <div className="px-8 flex justify-center items-center">
                <button
                  onClick={handleSubmitFile}
                  className="py-2.5 px-10 mr-2 mb-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-pink-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-pink-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-pink-700"
                >
                  Subir Archivo
                </button>
              </div>

              <div className="px-10 text-center">
                {fileResponse
                  ? fileResponse.message + " lineas : " + fileResponse.lines
                  : "No se ha subido archivo"}
              </div>
            </div>
          </div>
          <div className=" bg-pink-50 shadow-md rounded-md p-10 m-5">
            <h2 className="text-2xl font-medium text-pink-900">
              Descarga tu nuevo Excel
            </h2>
            <h1 className="text-xl font-light text-gray-800 pt-3">
              {" "}
              Puedes Descargar tu nuevo excel con la nueva columna agregada con
              el resultado de tu predicción
            </h1>
            <div className=" rounded-md border-dashed border-pink-500 border-2 p-2 m-5">
              <h3 className="py-5 px-3">Nuevo excel</h3>
              <div className="px-8 flex justify-center items-center">
                <button className=" py-2.5 px-10 mr-2 mb-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-pink-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-pink-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-pink-700">
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
