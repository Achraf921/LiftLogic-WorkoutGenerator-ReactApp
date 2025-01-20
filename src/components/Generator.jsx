import {useState} from 'react';
import SW from './SW.jsx';
import {WORKOUTS, SCHEMES}  from '../util/LLS.js';
import Button from './Button.jsx'

function Header(props){
  const{index, title, description}=props;
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-2 justify-center flex-col'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
          <h4 className='text-xl sm:text-2xl mad:text-3xl'>{title}</h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )

}

export default function Generator(props) {

  const {poison, setPoison, group, setGroup, goals, setGoals, updateWorkout} = props;
  const [showModal, setShowModal] = useState(false);



  function toggleModal(){
    setShowModal(!showModal);
  }

  function updateMuscles(muscleGroup){
    //Removal feature 
    if(group.includes(muscleGroup)){
      setGroup(group.filter(val=> val!==muscleGroup))
      return
    }

    //allows to only select a single workout for plans that are not individual. 
    if(poison!=='individual'){
      setGroup([muscleGroup])
      setShowModal(false)
      return
    }

    //closes the menu if 3 or more groups are being selected
    if(group.length>2){
      setShowModal(false)
      return
    }

    setGroup([...group, muscleGroup])

    //closes menu when 3 groups were selected since useState updates asynchronously (after the function is terminated).
    if(group.length===2){
      setShowModal(false);
    }
  }

  return (
    <>
      <SW header={"Generate your workout"} title={['It\'s', 'Huge', 'o\'clock']} id={'generate'}>
        <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure'}></Header>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {Object.keys(WORKOUTS).map((type,Index)=>{
          return(
          //Different Workout buttons (PPL, Bro split ...)
          (<button onClick={()=>{setPoison(type);setGroup([]);}}key={Index} className={'bg-slate-950 border-blue-400 border  py-3 px-4 rounded-lg duration-200 hover:border-blue-700 '+((type===poison)?'border-blue-600':'border-blue-400') }>
            <p className='capitalize'>{type.replaceAll('_'," ")}</p>
          </button>)
        )})}   
        </div>
      <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation.'}></Header>
        <div className='bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col'>
          {/*toggle rolling menu button*/}
          <button onClick={toggleModal} className='relative flex p-3 item-center justify-center '>
          <p className='capitalize'>{(group.length===0)?'Select muscle groups':group.join(' ')}</p>
            <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2 "></i> 
          </button>
          {showModal?(
            <div className='flex flex-col px-3 pb-3'>{(poison==='individual'?WORKOUTS['individual']:Object.keys(WORKOUTS[poison])).map((muscleGroupe,muscleGroupeIndex)=>{return(
              //Rolling menu buttons
            <button className={'hover:text-blue-400 duration-200 '+(group.includes(muscleGroupe)?'text-green-400':'')} key={muscleGroupeIndex} onClick={()=>{updateMuscles(muscleGroupe);}}>
              <p className='capitalize'>{muscleGroupe}</p>
            </button>)})}</div>
          ):null}
        </div>
        <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'}></Header>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
          return(
          (<button onClick={()=>{setGoals(scheme)}}key={schemeIndex} className={'bg-slate-950 border-blue-400 border  py-3 px-4 rounded-lg duration-200 hover:border-blue-700 '+((scheme===goals)?'border-blue-600':'border-blue-400')}>
            <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
          </button>)
        )})} 
        </div>
        <Button text={'Generate !'} func={updateWorkout}/>
        </SW>
    </>
  )
}
