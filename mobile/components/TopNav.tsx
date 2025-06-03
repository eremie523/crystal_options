"use client"
import { useTheme } from '@/contexts/ThemeContext'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

const TopNav = () => {
    const { theme, setTheme } = useTheme();
    return (
        <header className="sticky top-0 w-screen flex items-center justify-center p-2 z-20">
            <nav className="mx-auto sm:bg-[#ffffff99] bg-white backdrop-blur-2xl border shadow border-primary w-full max-w-[30rem] rounded-3xl flex justify-between items-center px-5 py-4">
                <h1 className="text-lg text-primary font-bold">Crystal Options</h1>
                <div className="flex gap-2">
                    <ul>
                        <li className="">
                            <motion.a href={"#"} className="text-sm p-2 rounded-lg bg-primary text-[#ffffff] hover:bg-transparent duration-300"
                                whileHover={{
                                    scale: 0.95,
                                    background: "#ffffff",
                                    color: "var(--color-primary)"
                                }}
                                whileTap={{
                                    scale: 1.05,
                                    background: "var(--color-primary)",
                                    color: "#ffffff"
                                }}
                            >Team</motion.a>
                        </li>
                    </ul>
                    <button>
                        {
                            theme == "dark" ?
                                <Sun className='hover:text-primary duration-200' onClick={() => setTheme("light")} /> :
                                <Moon className='hover:text-primary duration-200' onClick={() => setTheme("dark")} />
                        }
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default TopNav