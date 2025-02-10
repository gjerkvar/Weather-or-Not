"use client";

import { useEffect, useState } from "react";

export const ThemeToggle = () => {
    
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if(savedTheme === "dark")  {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    },[])

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        if(!isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return(
        <button className="mt-5 p-2 bg-oslo-blue text-white rounded-md dark: bg-oslo-blue-dark" onClick={toggleDarkMode}>
            {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
    )
}