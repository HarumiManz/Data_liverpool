"use client";
import React, { useState } from "react";
import { Galeria } from "@/components/Pasos";

export default function Pasos() {
  
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Pasos
          </h1>
        </div>
      </header>
      <Galeria/>
    </>
  );
}
