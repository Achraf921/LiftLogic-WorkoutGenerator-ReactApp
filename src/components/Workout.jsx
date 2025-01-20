import React from 'react'
import SW from './SW.jsx'
import ExeCard from './ExeCard.jsx'

export default function Workout(props) {
  const{workout} = props;
  return (
    <SW header={"WELCOME TO"} title={['The', 'DANGER', 'zone']} id='workout'>
      <div className='flex flex-col gap-4'>
        {workout.map((exe,ind)=>{
          return(
          <ExeCard exercise={exe} key={ind} index={ind}></ExeCard>

        )})}
      </div>
    </SW>
    
  )
}
