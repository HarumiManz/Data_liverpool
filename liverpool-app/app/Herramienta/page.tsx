"use client";
import React, { useState } from "react";
import Tabla from "@/components/Herramienta/Tabla";
import { Machine } from "@/components/Herramienta";
import { Archivo } from "@/components/Herramienta";
import { Dashboard, Tabla2} from "@/components/Herramienta";

export default function Herramienta() {
  return (
    <>
      <Machine />
      <Archivo />
      <Tabla />
      <Tabla2/>
      <div>
        <Dashboard />
      </div>
    </>
  );
}
