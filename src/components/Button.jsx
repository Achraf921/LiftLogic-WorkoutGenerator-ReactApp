import React from 'react'

export default function Button(props) {
const {text, func}= props;
  return (
    <button className='duration-150 mx-auto px-8 py-4 rounded-md border-2 border-blue-400  border-solid bg-slate-950 blueShadow'>
          <p onClick={func}>{text}</p>
    </button>
  )
}
