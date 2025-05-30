import { TEAM_MEMBER_TYPE } from '@/constants'
import { motion } from "motion/react";
// import Image from 'next/image'
import React, { ReactElement } from 'react'
import { SocialIcon } from './SocialIcon';

const MemberCard = (props: TEAM_MEMBER_TYPE) => {
    return (
        <motion.article className='relative shadow rounded-t-2xl rounded-b-lg' whileTap={{ scale: 0.95 }}>
            <div className='flex sm:flex-col gap-1 items-center bg-[#f5f4f4] duration-500 hover:scale-[102%] hover:border border-primary p-2 rounded-xl relative z-10'>
                <div className='w-[90px] h-[90px] rounded-full overflow-hidden'>
                    <img width={100} height={100} src={props.photo} alt={props.name.split(" ")[0]} className='w-full h-full object-cover flex items-center justify-center' />
                </div>
                <div className='flex-grow-1 h-full p-2'>
                    <h5 className='text-xl text-primary text-center'>{props.name}</h5>
                    <div className='flex flex-col pb-2 text-center'>
                        <span className='text text-gray-500'>{props.jobTitle}</span>
                        <div className="sm:flex justify-center items-center gap-2 mt-1 hidden">
                            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
                                {props.department}
                            </span>
                            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600">
                                {props.type}
                            </span>
                        </div>
                    </div>
                    <div className='flex sm:justify-center justify-end gap-1 mt-3'>
                        {
                            props.socials.map(({ href, icon }, i) => (
                                <motion.a key={i} href={href} target="_blank" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className='bg-primary p-1 sm:p-2 rounded-lg'>
                                    <SocialIcon icon={icon as ReactElement} />
                                </motion.a>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='absolute w-full -bottom-0.5 rounded-b-xl bg-primary h-[1rem]'></div>
        </motion.article>
    )
}

export default MemberCard