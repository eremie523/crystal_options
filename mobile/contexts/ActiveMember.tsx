"use client"
import { TEAM_MEMBER_TYPE } from "@/constants";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

interface initialMemberType {
    detailsIsOpen: boolean,
    member: TEAM_MEMBER_TYPE | undefined,
    setMember: Dispatch<SetStateAction<TEAM_MEMBER_TYPE | undefined>>,
    setDetailsIsOpen: Dispatch<SetStateAction<boolean>>
}

const initialActiveMember: initialMemberType = {
    member: undefined,
    setMember: () => { },
    detailsIsOpen: false,
    setDetailsIsOpen: () => { }
}

const activeMemberContext = createContext(initialActiveMember);

const ActiveMemberProvider = ({ children }: { children: ReactNode }) => {
    const [member, setMember] = useState(initialActiveMember.member);
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    return (
        <activeMemberContext.Provider value={{
            member,
            setMember,
            detailsIsOpen,
            setDetailsIsOpen
        }}>
            {children}
        </activeMemberContext.Provider>
    )
}

export default ActiveMemberProvider;

export const useActiveMember = () => {
    return useContext(activeMemberContext);
}