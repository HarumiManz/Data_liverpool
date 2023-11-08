"use client";
import React, { useState } from "react";

export default function Herramienta() {
  const [file, setFile] = useState<File | null>(null);
  const [fileResponse, setfileResponse] = useState<any>(null);

  const [data, setData] = useState(null);
  const handleClick = async () => {
    try {
      let response = await fetch("http://10.48.104.11:5000/ping");
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
        const response = await fetch("http://10.48.104.11:5000/upload", {
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
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Herramienta
          </h1>
        </div>
      </header>
      <div>
        <button onClick={handleClick}>LCicke</button>
        <input
          type="file"
          accept=".csv,.xls"
          placeholder="Archivo CSV"
          className="my-8 block"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button onClick={handleSubmitFile} className="block my-10">Subir Archivo</button>
        <div>{fileResponse ? fileResponse.message + " lineas : " + fileResponse.lines :"No se ha subido archivo"}</div>
      </div>
    </>
  );
}
