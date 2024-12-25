'use client'
import React from 'react'
import Link from '@node_modules/next/link'
import Image from '@node_modules/next/image'
import { useState, useEffect } from 'react'
import{ useSession, signIn, signOut, getProviders } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='flex flexbetween w-full pt-3 mb-16'>
      <Link href="/" className='flex flex-center gap-2'>
      <Image
      src="/assets/images/logo.svg"
      alt="Logo"
      className='object-contain'
      width={30}
      height={30}
      />
      <p className='logo_text'>PromptPlatz</p>
        </Link>
    </nav>
  )
}

export default Nav