"use client";

import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle.component";
import { CloudIcon, SunIcon } from "@heroicons/react/16/solid";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  
  const [weather, setWeather] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
          );
          const { temperature, windspeed, precipitation } = response.data.current_weather;
  
          if (temperature > 15 && windspeed < 20 && precipitation < 1) {
            setWeather("Yes! Enjoy the ride!");
          } else {
            setWeather("No, better keep it up.");
          }
        } catch (error) {
          console.error("Error fetching weather:", error);
          setWeather("Couldn't fetch weather data.");
        } finally {
          setLoading(false);
        }
      }); 
    } else {
      setWeather("Geolocation is not supported.");
      setLoading(false);
    }
  }, []);
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark p-4">
      <h1 className="text-4xl font-bold text-oslo-blue dark:text-oslo-blue-dark">Weather or Not</h1>
      <ThemeToggle />
      {loading ? (
        <p className="text-highlight">Loading weather...</p>
      ): (
        <div className="flex flex-col items-center mt-5">
          {weather?.includes("Yes") ? (
            <SunIcon className="h-16 w-16 text-yellow-400" />
          ): (
            <CloudIcon className="h-16 w-16 text-blue-400" />
          )}
          <p className="mt-4 text-xl font-semibold text-highlight">{weather}</p>
        </div>
      )}

    </main>
  );
}
