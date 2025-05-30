"use client"
import { DEPARTMENTS } from '@/constants'
import { useFilter } from '@/contexts/FilterProvider'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "motion/react"

const FilterNav = () => {
    const [filerTabIsOpen, setFilterTabIsOpen] = useState<boolean>(true);
    const { setFilters, filters } = useFilter();

    useEffect(() => {
        if (document.body.clientWidth < 640) setFilterTabIsOpen(false);
    }, [])

    return (
        <section aria-label="Filter" className="pt-1 pb-1 min-w-[300px]">
            <div className="flex justify-between items-center">
                <h4>Filter By</h4>
                <button
                    className="text-sm text-primary"
                    onClick={() => setFilterTabIsOpen(!filerTabIsOpen)}
                    aria-expanded={filerTabIsOpen}
                >
                    <motion.div
                        animate={{ rotate: filerTabIsOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDown size={16} />
                    </motion.div>
                </button>
            </div>
            <AnimatePresence initial={false}>
                {filerTabIsOpen && (
                    <motion.div
                        className="flex flex-col gap-4 pt-3 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                                height: { duration: 0.4, ease: "easeInOut" },
                                opacity: { duration: 0.3, delay: 0.1 }
                            }
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                height: { duration: 0.3, ease: "easeInOut" },
                                opacity: { duration: 0.2 }
                            }
                        }}
                        transition={{ type: "tween" }}
                    >
                        <motion.label
                            htmlFor="job_type"
                            className="flex flex-col gap-1"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15 }}
                        >
                            <select
                                id="job_type"
                                className="w-full border rounded-lg py-2 px-2"
                                value={filters.jobType}
                                onChange={(e) => {
                                    setFilters(prev => ({
                                        ...prev,
                                        jobType: e.target.value as "all" | "full_time" | "part_time" | "contract" | "internship"
                                    }));
                                }}
                            >
                                <option value="all">Job Type</option>
                                <option value="full_time">Full-time</option>
                                <option value="part_time">Part-time</option>
                                <option value="contract">Contract</option>
                                <option value="internship">Internship</option>
                            </select>
                        </motion.label>

                        <FilterByDepartment />

                        <motion.div
                            className='flex gap-4'
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <motion.button
                                className='w-full py-2 px-3 border border-primary text-primary'
                                whileHover={{ backgroundColor: "#f0f0f0" }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Clear Filters
                            </motion.button>
                            <motion.button
                                className='w-full py-2 px-3 bg-primary text-white'
                                whileHover={{ backgroundColor: "#2563eb" }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Apply Filters
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default FilterNav

export const FilterByDepartment = () => {
    const { setFilters, filters } = useFilter();
    return (
        <section aria-label="filter-by-category" className='flex flex-col gap-1 w-full'>
            <div className="flex flex-row justify-between">
                <span className=''>Categories</span>
            </div>
            <div className={`flex flex-col w-full border-dark-tertiary/40 py-0 overflow-hidden`}>
                {DEPARTMENTS.map(department => {
                    const identifier = "category_" + department.title.replace(" ", "_").toLowerCase();
                    return (
                        <label key={department.id} htmlFor={identifier} className='flex flex-row gap-2 py-1 cursor-pointer'>
                            <input name={identifier} id={identifier} type="checkbox" {...(filters.departments.includes(department.title)) && { checked: true }} onChange={(e) => {
                                if (e.target.checked) {
                                    setFilters(prev => ({
                                        ...prev,
                                        departments: [...prev.departments, department.title]
                                    }));
                                } else {
                                    setFilters(prev => ({
                                        ...prev,
                                        departments: prev.departments.filter(dep => dep !== department.title)
                                    }));
                                }
                            }} />
                            <span className='capitalize'>{department.title}</span>
                        </label>
                    );
                })
                }
            </div>
        </section>
    )
}