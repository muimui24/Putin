import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { prisma } from '../lib/prisma'

async function Home(params:any) {
  
  await prisma.user.create({
    data: {
      name: 'Rich',
      
    },
  })
  const allUsers = await prisma.user.findMany({
    select: {
      name: true
    },
  })

  return (
  

  )
}

export default Home
