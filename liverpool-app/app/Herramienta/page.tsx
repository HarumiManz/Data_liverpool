"use client";
import React, { useState } from "react";
import Tabla from "@/components/Herramienta/Tabla";
import { Machine } from "@/components/Herramienta";
import { Archivo } from "@/components/Herramienta";

export default function Herramienta() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Herramienta
          </h1>
        </div>
      </header>
      <Machine />
      <Archivo />
      <Tabla />
    </>
  );
}
