import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl"> Get in Touch </motion.h1>
        <div className="text-center tracking-tighter mb-20">
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className='my-4 '>Location : {CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='my-4 '>Contact no : {CONTACT.phoneNo}</motion.p>
            <motion.a 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            href='https://mail.google.com/mail/parthiv20soni@gmail.com' className='mb-20'>Email : {CONTACT.email}</motion.a>
        </div>

    </div>
  )
}

export default Contact