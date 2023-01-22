import React from 'react'
import UrlShorter from '../UrlShorter/UrlShorter'
import Details from '../Details/Details'
import Promo from '../Promo/Promo'

function Main() {
  return (
    <main className="app__container">
        <UrlShorter/>
        <Details/>
        <Promo/>
    </main>
  )
}

export default Main