import React from 'react'
import 'animate.css';

export const MoonSolid = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className='animate__rotateIn' style={{width: '21px'}} viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
</svg>
  )
}

export const MoonOutline = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className='animate__rotateOut' style={{width: '21px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>
  )
}