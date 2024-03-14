import React from 'react'
import { Header } from '../../shared/components/header/header'
import { Footer } from '../../shared/components/footer/footer'
import Welcome from '../../shared/components/Welcome/welcome'
import DataContainer from './components/dataContainer/dataContainer'

export default function DetailsPage() {
  return (
    <>
      <Header />
      <main>
        <Welcome />
        <DataContainer id={5}/>
      </main>
      <Footer />
    </>
  )
}
