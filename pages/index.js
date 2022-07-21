import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from './components/Map'
import tw from 'tailwind-styled-components'


export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header> Cotizador de servicios </Header>
        <InputButton>
          Punto de partida 
        </InputButton>
        <InputButton>
          Punto de destino 
        </InputButton>
        <ActionButton>
          Calcular  
        </ActionButton>
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`

const ActionItems = tw.div`
flex-1
`

const Header = tw.div`
text-xl
text-center
mt-10
`

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-3
`

const ActionButton = tw.div`
h-7 bg-black-200 text-2xl p-4 flex items-center mt-3
`
