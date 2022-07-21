import React from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWRyaS1lciIsImEiOiJjbDV2OGM1NzYwNzloM2lwNGk3eXZwbHA4In0.ZWO8wfAVbwCUsByz3ld5zA'

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })
  })

  return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1
`
