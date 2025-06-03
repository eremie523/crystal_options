"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type initialFilterStateType = {
    filters: {
        departments: string[],
        jobType: "all" | "full_time" | "part_time" | "contract" | "internship",
        page: number,
    },
    setFilters: Dispatch<SetStateAction<{
        departments: string[],
        jobType: "all" | "full_time" | "part_time" | "contract" | "internship",
        page: number
    }>>
}

const initialFilterState: initialFilterStateType = {
    filters: {
        departments: [],
        jobType: "all",
        page: 1,
    },
    setFilters: () => { }
}

const filterContext = createContext(initialFilterState);

const FilterProvider = ({ children }: { children: ReactNode }) => {
    const [filters, setFilters] = useState(initialFilterState.filters);
    return (
        <filterContext.Provider value={{
            filters,
            setFilters
        }}>
            {children}
        </filterContext.Provider>
    )
}

export default FilterProvider;

export const useFilter = () => {
    return useContext(filterContext);
}