"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type themeContextType = {
    theme: "light" | "dark",
    setTheme: Dispatch<SetStateAction<"light" | "dark">>
}

const initialTheme: themeContextType = {
    theme: "light",
    setTheme: () => { }
}

const themeContext = createContext(initialTheme);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    return (
        <themeContext.Provider value={{
            theme,
            setTheme
        }}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(themeContext);
}