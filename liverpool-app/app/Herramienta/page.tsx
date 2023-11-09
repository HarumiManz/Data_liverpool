"use client";
import React, { useState } from "react";
import Tabla from "@/components/Herramienta/Tabla";
import { Machine } from "@/components/Herramienta";
import { Archivo } from "@/components/Herramienta";
import Visualizacion from "../Visualizacion/page";

export default function Herramienta() {
  return (
    <>
      <Machine />
      <Archivo />
      <Tabla />
      <Visualizacion/>
    </>
  );
}
