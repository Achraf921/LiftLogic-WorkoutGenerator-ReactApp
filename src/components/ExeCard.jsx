import React, {useState} from 'react'

export default function ExeCard(props) {
    const {exercise, index} = props
    const[setsCompleted, setSetsCompleted] = useState(0);

    function handleIncrement(){
        setSetsCompleted((setsCompleted+1)%5);  

    }

  return (
    <div className='p-4 rounded-md flex flex-col gap-4 bg-slate-950 sm:flex-wrap'>
        <div className=' flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
        <h4 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400 hidden sm:inline'>{'0'+(index+1)}</h4>
        <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 md:text-center'>{exercise.name.replaceAll('_',' ')}</h2>
        <p className='text-sm text-slate-400 capitalize'>{exercise.type}</p>
        </div>
        <h3 className='text-slate-400 text-sm'>Muscle Groups</h3>
        <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
        <div className='flex flex-col bg-slate-950 rounded gap-2'>
        {exercise.description.split('___').map((val)=>{
            return(
                <div className='text-sm'>
                    {val}
                </div>
            )
        })}
        </div>
        <div className='flex flex-col'>
        <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
            {['reps' ,'rest','tempo'].map(info=>{
                return(
                <div className='flex flex-col p-2 rounded border-[1.5px] border-solid border-slate-900 w-full' key={info}>
                    <h3 className='capitalize text-slate-400 text-sm'>{info ==='reps'?`${(exercise.unit)}`:info}</h3>
                    <p className='font-medium'>{(info ==='rest')?`${Math.floor((exercise[info]*2.75)/60)}min${(Math.floor(exercise[info]*2.75)%60<10?'0'+Math.floor(exercise[info]*2.75)%60:Math.floor(exercise[info]*2.75)%60)}`:exercise[info]}</p>{/*I multiply the rest time by 3 since studies have proven that longer rest times improves growth*/}
                </div>)
            })}
            <button onClick={handleIncrement} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-blue-900 hover:border-blue-600 w-full duration-200'>
                <h3 className='text-slate-400 text-sm capitalize'>Sets completed :</h3>
                <p className='font-medium'>{`${setsCompleted}/4`}</p>
            </button>
        </div>

        </div>

    </div>
  )
}
