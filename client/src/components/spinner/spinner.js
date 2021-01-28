import React from 'react'
import './style/spinner.style.css'

export const Spinner = () => {
  return (
    <>
      <div className='spinner'>
        <div className='bounce1' />
        <div className='bounce2' />
        <div className='bounce3' />
      </div>
    </>
  )
}