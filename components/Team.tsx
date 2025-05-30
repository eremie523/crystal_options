"use client"
import { TEAM, TEAM_MEMBER_TYPE } from '@/constants'
import { useFilter } from '@/contexts/FilterProvider'
import React, { useEffect, useState } from 'react'
import MemberCard from './MemberCard';
import { useActiveMember } from '@/contexts/ActiveMember';
import { motion, AnimatePresence } from "framer-motion";
import MemberDetailsModal from './MemberDetailsModal';

const Team = () => {
    const { filters, setFilters } = useFilter();
    const { detailsIsOpen, setDetailsIsOpen, member, setMember } = useActiveMember();
    const [team, setTeam] = useState(TEAM);
    const [pageIndex, setPageIndex] = useState({
        startIndex: 0,
        endIndex: 5,
        total: TEAM.length
    });

    useEffect(() => {
        let filteredTeam = TEAM;

        if (filters.departments.length > 0) {
            filteredTeam = filteredTeam.filter(member =>
                filters.departments.includes(member.department)
            );
        }

        if (filters.jobType !== "all") {
            filteredTeam = filteredTeam.filter(member => member.type.toLowerCase().replace("-", "_").replace(" ", "_") === filters.jobType);
        }

        const offset = (filters.page - 1) * 6;
        const startVal = 0 + offset;
        const endVal = startVal + 6;

        setPageIndex({
            startIndex: startVal,
            endIndex: endVal > filteredTeam.length ? filteredTeam.length : endVal,
            total: filteredTeam.length
        });

        setTeam(filteredTeam.slice(startVal, endVal));
    }, [filters])

    // Close details when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (detailsIsOpen && !target.closest('.member-details')) {
                setDetailsIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [detailsIsOpen, setDetailsIsOpen]);

    const generateNumberArray = (stopIndex: number): number[] => {
        return Array.from({ length: stopIndex }, (_, index) => index + 1);
    };

    return (
        <div className="pt-1 pb-3 flex-grow-1">
            <h4 className="text-sm">Showing <span>{pageIndex.startIndex + 1}</span> to <span>{pageIndex.endIndex}</span>  of <span>{pageIndex.total}</span></h4>
            <ul className="grid sm:grid-cols-2 gap-4 sm:gap-8 pt-4">
                {team.map((memberData: TEAM_MEMBER_TYPE) => (
                    <motion.li
                        key={memberData.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => {
                            if (member?.id == memberData.id && detailsIsOpen) {
                                setDetailsIsOpen(false);
                            } else {
                                setMember(memberData);
                                setDetailsIsOpen(true);
                            }
                        }}
                    >
                        <MemberCard {...memberData} />
                    </motion.li>
                ))}
            </ul>

            <AnimatePresence>
                {detailsIsOpen && <MemberDetailsModal />}
            </AnimatePresence>

            {Math.ceil(pageIndex.total / 5) > 1 && (
                <motion.footer
                    className="flex justify-center pt-5 gap-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {generateNumberArray(Math.ceil(pageIndex.total / 5)).map((pageNum) => (
                        <motion.span
                            key={pageNum}
                            className={`w-[30px] h-[30px] flex items-center justify-center cursor-pointer ${filters.page === pageNum
                                ? 'bg-primary! text-white border-primary'
                                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                                } border`}
                            onClick={() => {
                                setFilters(prev => ({ ...prev, page: pageNum }));
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            animate={{
                                scale: filters.page === pageNum ? 1.1 : 1,
                                backgroundColor: filters.page === pageNum
                                    ? 'var(--primary)'
                                    : 'transparent'
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            {pageNum}
                        </motion.span>
                    ))}
                </motion.footer>
            )}
        </div>
    )
}

export default Team