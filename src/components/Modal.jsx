import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

export function Modal({ onClose, isOpen, children }) {
    return createPortal( //not to render inside root app
        <>
            {isOpen && (
                <>
                    <div className='m-auto relative z-50 min-h-[200px] max-w-[80%] bg-white p-4'>
                        <div className='flex'>
                            <AiOutlineClose onClick={onClose} className='text-2xl justify-end' />
                        </div>
                        {children}
                    </div>
                    <div onClick={onClose} className='backdrop-blur h-screen w-screen absolute top-0 z-40'/>
                </>
            )}
        </>
    ,document.getElementById("modal-root"))
}
