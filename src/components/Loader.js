import React from 'react'
import sun from '../sun.png'
export default function Loader() {
  return (
    <>
    <div id='preview'>
      <img src={sun} alt=""id = 'preview_image' />
    <div id="request"><span id='welcome'>Welcome!</span>Explore Current Weather of Your Favourit Cities!</div>
    </div>
    </>
  )
}
