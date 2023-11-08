"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Archivo() {
  const [file, setFile] = useState<File | null>(null);
  const [fileResponse, setfileResponse] = useState<any>(null);

  const [data, setData] = useState(null);
  const handleClick = async () => {
    try {
      let response = await fetch("http://10.48.108.34:5000/ping");
      let data = await response.json();
      console.log(data);
      setData(data.message);
    } catch (err) {
      console.log("Ha habido un error");
    }
  };

  const handleSubmitFile = async () => {
    if (file) {
      try {
        const form = new FormData();
        form.append("file", file);
        const response = await fetch("http://10.48.108.34:5000/upload", {
          method: "POST",
          body: form,
        });
        const data = await response.json();
        if (!data.error) {
          setfileResponse(data);
          console.log("Resultado : ", data);
        } else {
          console.log("error subienod archivp");
        }
      } catch (err) {
        console.log("error subienod archivp");
      }
    }
  };

  return (
    <>
      <div className="bg-white px-20 py-10">
        <div>
          <h1 className="pb-10 text-3xl font-bold tracking-tight text-gray-800">
            Herramienta de predicción
          </h1>
        </div>
        <button onClick={handleClick}>LCicke</button>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-2">
          <div className=" bg-pink-100 rounded-md p-10">
            <h1 className="text-2xl font-medium text-pink-950"> Cargar Archivo </h1>
            <p className="text-xl font-light text-gray-800 pt-3"> Solo archivos .xlsx con menos de 1 Gb</p>
            <input
              type="file"
              accept=".csv,.xls"
              placeholder="Archivo CSV" 
              className="my-8 block"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
            <button onClick={handleSubmitFile} className="block my-10">
              Subir Archivo
            </button>
            <div>
              {fileResponse
                ? fileResponse.message + " lineas : " + fileResponse.lines
                : "No se ha subido archivo"}
            </div>
          </div>
          <div>
            <Image
              src="/images/bolo1.png"
              alt="analitica "
              width={300}
              height={300}
              className="px-10"
            />
          </div>
        </div>
      </div>
    </>
  );
}
