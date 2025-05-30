import { TEAM_MEMBER_TYPE } from '@/constants'
import { Linkedin, Mail, Twitter } from 'lucide-react'
import { motion } from "motion/react";
// import Image from 'next/image'
import React from 'react'

const MemberCard = (props: TEAM_MEMBER_TYPE) => {
    return (
        <motion.article className='relative shadow rounded-t-2xl rounded-b-lg' whileTap={{ scale: 0.95 }}>
            <div className='flex sm:flex-col gap-1 items-center bg-[#f5f4f4] duration-500 hover:scale-[102%] hover:border border-primary p-2 rounded-xl relative z-10'>
                <div className='w-[100px] h-[100px] p-1'>
                    <img width={100} height={100} src={props.photo} alt={props.name.split(" ")[0]} className='w-full h-full object-cover rounded-full overflow-hidden' />
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
                        <motion.a href={props.twitter} target="_blank" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className='bg-primary p-1 sm:p-2 rounded-lg'>
                            <Twitter size={14} className='text-white sm:hidden' />
                            <Twitter size={18} className='text-white hidden sm:flex' />
                        </motion.a>
                        <motion.a href={props.linkedin} target="_blank" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className='bg-primary p-1 sm:p-2 rounded-lg'>
                            <Linkedin size={14} className='text-white sm:hidden' />
                            <Linkedin size={18} className='text-white hidden sm:flex' />
                        </motion.a>
                        <motion.a href={`mailto:${props.email}`} target="_blank" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} className='bg-primary p-1 sm:p-2 rounded-lg'>
                            <Mail size={14} className='text-white sm:hidden' />
                            <Mail size={18} className='text-white hidden sm:flex' />
                        </motion.a>
                    </div>
                </div>
            </div>
            <div className='absolute w-full -bottom-0.5 rounded-b-xl bg-primary h-[1rem]'></div>
        </motion.article>
    )
}

export default MemberCard