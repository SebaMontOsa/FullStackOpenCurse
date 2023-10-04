import React from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {
  return (
    <>
    <h1>{props.course}</h1> 
    </> 
  )
}

const Content = (props) => {
  return(
    <>
    <p>{props.part[0]} {props.excercises[0]}</p>
    <p>{props.part[1]} {props.excercises[1]}</p>
    <p>{props.part[2]} {props.excercises[2]} </p>
    </>
  )
}

const Total = (props) => {  
  return(
    <>
    <p>Number of exercises {props.totalExercises} </p>
    </>
  )
  }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content part={[part1,part2,part3]} excercises={[exercises1,exercises2,exercises3]}/>
      <Total totalExercises={exercises1+exercises2+exercises3}/>
    </div>
  )
}

//                          How it should look 
//    const App = () => {
//    const-definitions
//    return (
//    <div>
//    <Header course={course} />
//    <Content ... />
//    <Total ... />
//    </div>
//    )
//    }
ReactDOM.render(<App />, document.getElementById('root'))