// import logo from './logo.svg';
// import './App.css';
// import User from './Users';

const { configure } = require("@testing-library/react")

// import { hover } from "@testing-library/user-event/dist/hover"
// import { Component, useState } from "react"

// function App() {


// function Apple()
// {
//   return(<div>Apple Component</div>)
// }
// return (
//   <div className="App">
//     <h1>Jsx </h1>
//     <User />
//     <Apple />
//   </div>
// );

// }
// export default App;      
 
  
//--jsx component---

    


//  import React from "React";

//   import './App.css';

 
//  function App() {
//    let data="babita ankush";
//   function apple()
//   {
//     data="peter";
//     alert(data);
//   }
//   return (
//     <div className="App">
//     <h1>{data}</h1>
//     <h2>Hello App</h2>
//     <button onClick={apple}>Click Me</button>
    

//     </div>
//   );
// }
// export default App;







// import logo from './logo.svg';
// import './App.css';



// function App() {
//   let data="babita ankush"
//   function apple()
//   {
//     data="peter";
//     alert(data);
  
//   }
//   return (
//     <div className='App'>
//       <h1>{data}</h1>
//        <button onclick={apple}>Click Me</button>  
//     </div>
//   );
// }

// export default App;

// // agr direct funtion call karna ho to pahle ("") funtion use karo















// ---(3) -- state in function commponet--


// import logo from './logo.svg';
//  import './App.css';

// function App() {
//   let data="babita";
//   function updateData()
//     {
// data= "ankush";
// alert(data)
//     }
  
//   return (
//     <div className='App'>
//       <h1>data</h1>
//        <button onClick={updateData}>Update Data</button>  
//     </div>
//   );
// }

// export default App;


//state ko difine karne ke liye react me import karge


// import {useState} from 'react'
// import logo from './logo.svg';
//  import './App.css';

// function App() {
//   const [data,setData]=useState("0")
//   function updateData()
//   {
//     setData(data+2)
//   }
//   console.warn("--------");
//   return (
//     <div className='App'>
//       <h1>{data}</h1>
//        <button onClick={updateData}>Update Data</button>  
//     </div>
//   );
// }
// export default App;

//kya mai  ak component state  ko state  bahr use kar sakte h ---nhi use kar sakte 
//state public hai ya  Private h -- state public hoti h 




//---(4)--class component--



// import React, {Component} from 'react'
// import logo from './logo.svg';
//  import './App.css';
// class App extends Component {

// render()
// {
//   return (
//     <div className='App'>
//       <h1>Hello Word !</h1>
//     </div>
//   );
// }

// } 

// export default App;



// -----(4)----difine state


// import React, {Component} from 'react'
// import logo from './logo.svg';
//  import './App.css';
// class App extends Component {

//   constructor()
//   {
//     super();
//     this.state={
// data:"babita"
//     }
//   }
// apple()
// {
// this.setState({data:"ankush"})
// }
// render()
// {
//   return (
//     <div className='App'>
//       <h1>{this.state.data}</h1>
//       <button on onClick={()=>this.apple()}>Update Data</button>
//     </div>
//   );
// }

// } 

// export default App;

// // interviw question kya ham react ke class componentke andr use state  use kar sakte h 



// ---(5)--- props with functional component---
//  jause ki ham function banate h kuch peramitter le kar us me kuch data pass kar kerte h usi tarike seagr ham koi component banayege
// aur uske andr data pass karana chahte h to ham props ki help se kar sakte h 
// props ko permitter bhi bol sakte ho



// ---(5)-- props ko pahle functional Component me dekhege


//  logo from './logo.svg';
//   import './App.css';
//   import Student from "./Student";import
 
//   function App() {
//     return (
//           <div className='App'>
//             <h1>Props in React :</h1>
//             <Student name={"babita"} email="babita@test.com" />
//             <Student name={"ankush"} />
//             <Student name={"Utkarsh"} />
//           </div>
//         );
//        }
   
      
    //  export default App;
  

// --(5--) button click

// import  React, {userState} from 'react'
// import logo from './logo.svg';
// import './App.css';
// import Student from "./Student";
// function App() {
//   const [name,setName]=useState("babita")
//   function apple()
//   {
//     alert("Hello")
//   }
//   return (
//     <div className="App">
//     <h1>Props in React :</h1>
//     <Student name={name}/>
//     <button onClick={()=>{setName("ankush")}} >Update Name</button>
//     </div>
//   )
// }
// export default App;


// --(6)--get input box value--


// import logo from './logo.svg';
// import './App.css';

// function App(){
//   const [data,setData]=useState(null)
//   const[print, setprint]=useState(false)
//   function getData(val){
//     console.log(val)
//     setData(val.target.value)
//     setprint(false);   //this is use for disable print 
//   }
//   return(
//     <div className="App">{
//       print?
//       <h1>{data}</h1>
      
//     :null
//       }
//       <input type="text" onChange={getData}/>
//       <button onClick={()=>setprint(true)}>print data</button>
//     </div>

//   )
//     }
    
//   export default App;





// ---(7)-- hide and show Element--
// .make adiv or any other Element.make state for hiding and show Element
// make Button 
// .update state on button click 
// element ya tag ko  kause hide show kar sakte h 
// hide karna yatogal karna kisi bhi front application basic chij hoti h 
// same buttom par work karne ko hi tog bolte h



// import logo from './logo.svg';
// import './App.css';
// import React from 'react'

// function App(){
//   const [status,setStatus]=React.useState()
//   return(
//     <div className="App">
//     {
//       status? <h1>Hello Sir</h1>:null
//     }
     
//       {/* <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button> */}
//       <button onClick={()=>setStatus(!status  )}>toggle</button>
//     </div>
//   );
// }
// export default App;

// agr ak hi buttom show karna h to ye dono button ko hide kar ke ak nichhe aur button banayege 
//   <button onClick={()=>setStatus(!status  )}>toggle</button> ture rahega to show aur flase rahega to hide



// ---(8)----basic Form 
// .make html filed 
// .add some filed
// .use state for filed data 
// .submit and control from 



// import './App.css';
// function App(){
//   const [name,setName]=useState("");
//   const [tnc,setTnc]=useState(false);
//   const [interest,setInterest]=useState("");
//   function getFromData(e)
//   {
//     console.log(name,tnc,interest)
//     e.preventDefault()
//   }

//   return(
// <div className="App">
//   <h1>Handle from in react</h1>
//   <from onSubmit={getFromData}>
//     <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/><br></br> <br></br>
//     <select onChange={(e)=>setInterest(e.target.value)}>
//       <option>select Option</option>
//       <option>Marvel</option>
//       <option>Dc</option>
//     </select><br></br> <br></br>
//     <input type ="checkbox"  onChange={(e)=>setTnc(e.target.checked)}></input>
//    <span>Accept Term and conditions</span>
//    <br></br> <br></br>
//    <button type="submit">submit</button>
//    <button>Clear</button>
//     </from>
// </div>

//  )
//  }
//  export default App;





// ---(9)-- conditional rendering if condition

// .make Component 
// .make state 
// .not Recommended way for condition 
// .correct way condition 
  


// import './App.css';
// import Profile from "./Profile";        

// function App() {       
//   return(                                            
//     <div className="App">
//  <Profile/>
//     </div>
//   )
// }

// export default App;




// import logo from './logo svg'
// import './App.css';
// import User from "./User";
// function App() {
//   return (
//     <div className="App">
//    <User />

//     </div>
//   );
// }

// export default App;




// (10)--- life cycle methods--
// feze to thin hi hote h butlife cycle etne sare  ho skte h 
// life cycle kb kb chalte h jb hamara life cycle loaded,,update with state and PaymentResponse,and removed


// phle ham log  class componet ke andr life cycle  method use karege uske bad  me functionl  componet me jayega aisa kyu 
// function commponet ke andr life cycle method ham dirtly  use  nhi kar sakte h  hame hooks use karne Padhege 
// aur secong chijfunctional  componet ke andrlifr cycle method use karte h to thora sa confign aata h  to uske liye sbse pahle class component 
// ke sath life cycle method use kr lege 



// ---(11)--- constructor life cycle Method
// .what is constructor 
// why this is important ?
// what we can do in this lifee cycle methode 

// interviw question ==== kya constructor life cycle h ans= ha 



// import React from 'react'
// import './App.css';
// class App extends React.Component{
//   constructor(){
//     super();
//     console.warn("come")
//   }
//     render(){
//       console.warn("Go")
//         return(
//             <h1>hello Sir</h1>
//         )
//     }
// }
// export default App;


//---------(13)-----------Render, Life Cycle Method------
//use of render Method
//.make class component
//.use state and props with render
// render ka matlb excute kar ke reperesent karna jo ham html likhte h oo render ke andr hi likha jata h 



// render methode kb kb call ho skta h jb bhi app kacomponent ready hoga ak bar 
// tb call hoga aur jb bhi status update hogi tb ya props update hoga tb 

// esko banne ke liye user me jana padega

import './App'
import User from './User'
import React from 'react';
import { useState } from 'react';


function App(){

  const[name,setName]=React.useState("sanya")
 
  return(
  <div className="App">
    <h1>Reder Mthod in React</h1>
    <User name={name}></User>
    <button onClick={()=>setName("Ridhika")}>updATE</button>
  </div>
  )
}
export default App;















































































































































































// mport './App.css';
// // eslint-disable-next-line no-unused-vars
// import logo from './logo.svg';



  ////--for state component--------------
  //at first import the data userState.

  // eslint-disable-next-line no-unused-vars


//-----(1)--------for click button------
// function App() {
//   function apple(){
//     alert ("function called");
//   }
//   return (
//     <div className="App">
//      <h1>start now first</h1>
//      <button  onclick={()=>apple()}>click  me</button>
     
//     </div>
//   );
// }

// export default App;



///-----(2)------------------------------------state in functional-----------

// function App(){
//   // eslint-disable-next-line no-unused-vars
//   let data="utkarsh";     //variable
//   function updateData()
//   {
//     data="chaurasia"
//     alert(data);
//   }
//   return (
//     <div className="App">
//     <h1>{data}</h1>
//     <button onClick={updateData}>updateData</button>
//     </div>
//   );
//   }
//   export default App;

///out put -- not change if click on button.




///-----------(3)------define state in -------

//so at first import state from react. 
// import {useState} from'react'

// eslint-disable-next-line no-unused-vars
// function App(){
//   const[data,setData]=useState("anil")
//   function updateData(){
//     setData("chaurasia")
//   }
//   console.warn("-------------");
//   return (
//         <div className="App">
//         <h1>{data}</h1>
//         <button onClick={updateData}>updateData</button>
//         </div>
//       );
//       }
//      export default App;






//----(4)-------State in class component:=>-------

// import React,{Component} from 'react'

// class App extends Component{
//  constructor()
//  {  
   
//   // /for state define.we have to use  constractor.
//    super(); 
//    this.state={
//      data:1 
//    }
//                   //super java scrit ki functinaty hoti hai .
//  }
//  apple(){
//    this.setState({data:this.state.data+1})
//  }
// render(){
//     return(
//       <div className="App">
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.apple()}>updATE DATA</button>
//      </div>
//   )
 
//   }

// }

// export default App;

//note---
//>>> State ko commponet ke bahar mat use karo .. waise kar skate hai par authtication tarika nahi hai.
//>>State public hota hai.




///-----------(5)--------------props with Fuctional component------

//props nothing but lust like a if pass value in fuction. and jab ak data ko dure componenet ya date me transfer karna hot ahia to prop ka use karte hai.
//usi tarh jab hai component banayen ke aur uske data pass karna chate hai to  prop ki help se kar skate hai.
//props means propaties.

//define props-
// at first  make ak components student

// import Student from './Student';

// function App(){
//   return(
//     <div className="App">
//       <h1>Prop in react:)</h1>
//       <Student name={"utkarsh" } email="ut@gmail.com"></Student>
//       <Student name={"peter" } email="pet@gmail.com"></Student>
//       <Student name={"priti" } email="prit@gmail.com"></Student>
//     </div>  //inside student we taken name ="utkarsh" this is porp
//   )
// }
// export default App;


///note:-
//>>>useState ko haim class componenet me nahi use kar skate hai.



////------(6)----props with Class Componennt.-----------------

// import Student from './Student';
// import React from 'react';
// function App(){
//   return(
//     <div className="App">
//       <h1>props</h1>
//       <Student anme="utkarsh"></Student>
//     </div>
//   )
// }
// export default App;

//note--
//>>jis componet ke andar ham prop ko recieve kar sakte hai waha par ham change nahi kar sakte ..butjaha se ham send kar hai waha se change kar skate hai.






//----------(7)-------Get Input Box Value----------
//.make input field
//.make fuction and get value..
//.make button and state..
//..get value on button Click
// import React,{useState} from 'react';
// function App(){
//   const [data,setData]=useState(null)
//   const[print, setprint]=useState(false)
//   function getData(val){
//     console.log(val)
//     setData(val.target.value)
//     setprint(false);   //this is use for disable print 
//   }
//   return(
//     <div className="App">{
//       print?
//       <h1>{data}</h1>
      
//     :null
//       }
//       <input type="text" onChange={getData}/>
//       <button onClick={()=>setprint(true)}>print data</button>
//     </div>

//   )
// }
// export default App;

//note...>Html ke andhar prop ko ham send kar sakte hai ..uke lia (this.prop.childrnname) add karna hogaa..







//------(8)-----Hide and show Element-------
//make a div  or any other element
//make state for hidinf=d and shoe element
//.make Buttoon
//update state on button click
// import React from 'react'

// function App(){
//   const [status,setStatus]=React.useState(false)
//   return(
//     <div className="App">
//     {
//       status? <h1>Hello Sir</h1>:"false"
//     }
     
//       {/* <button onClick={()=>setStatus(false)}>Hide</button>
//       <button onClick={()=>setStatus(true)}>Show</button> */}
//       <button onClick={()=>setStatus(!status  )}>toggle</button>
//     </div>
//   );
// }
// export default App;









//-----(9)----Basic from  and submit------


// import React,{useState} from 'react';
// function App(){
//   const [name,setName]=useState("");
//   const [tnc,setTnc]=useState(false);
//   const [interest,setInterest]=useState("");
//   function getFromData(e)
//   {
//     console.log(name,tnc,interest)
//     e.preventDefault()
//   }
//   return(
// <div className="App">
//   <h1>Handle from in react</h1>
//   <from onSubmit={getFromData}>
//     <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/><br></br> <br></br>
//     <select onChange={(e)=>setInterest(e.target.value)}>
//       <option>select Option</option>
//       <option>Marvel</option>
//       <option>Dc</option>
//     </select><br></br> <br></br>
//     <input type ="checkbox"  onChange={(e)=>setTnc(e.target.checked)}></input>
//    <span>Accept Term and conditions</span>
//    <br></br> <br></br>
//    <button type="submit">submit</button>
//     </from>
// </div>

//  )
//  }
//  export default App;








// ----(10)------Conditional Rendering  | if Condition
// .make component
// .use state
// .Not Recoommended Way for Consition
// ./Correct Way Conditioon

// look profile.js
// import './App';
// import Profile from './Profile';
// function App(){
//   return(
//     <div className="App">
//       <Profile></Profile>
//     </div>
//   )
// }
//export default App;







//------(11)----Life Cycle Method In React----
//when Component is loaded
//.when Component is updated with state and props
//when components is removed.




//---(12)-------Constructor Life Cycle Method
//.Constructor
//.important
//.we can  do in this life cycle method.

//note...
//at first we will be go class components  after that fuction component because life cycle can not use direct in function compponent .es me hook use karna hogaa
//jab bhi class banegaa tabhi contractor call ho jaayegaa.

// import React from 'react'
// class App extends React.Component{
//   constructor(){
//     super();
//     console.warn("come")
//   }
//     render(){
//       console.warn("Go")
//         return(
//             <h1>hello Sir</h1>
//         )
//     }
// }
// export default App;


//---------(13)-----------Render, Life Cycle Method------
//use of render Method
//.make class component
//.use state and props with render

//.note-
//jab ko state or props run hota hai to aatumatic ye call ho jata hai.
// look exp. of user.js number (2)
// import './App'
// import User from './User'
// import React from 'react';
// import { useState } from 'react';


// function App(){

//   const[name,setName]=React.useState("sanya")
 
//   return(
//   <div className="App">
//     <h1>Reder Mthod in React</h1>
//     <User name={name}></User>
//     <button onClick={()=>setName("Ridhika")}>updATE</button>
//   </div>
//   )
// }
// export default App;

//note:props ko ham kahi par le sakte hai...constractor ke bar yaa ander





//------(14)--------componentDidMount life cyclee method
//note---Api ka call karna hi didMount ka use hai.
//--pahale render call hhota usek bad didmount.

// import React from 'react'
// class App extends React.Component(){
//   constructor(){
//     super();
//     console.warn("constructor")
//   }
//   componentDidMount()
//   {
//     console.warn("render")
//   }
// render(){
//   return(
//     <div className="App">
//       <h1>Component Did Mount</h1>
//     </div>
//   )
// }
// }
// export default App; 


//note --Render  ke andar  state call nahi kanri hoti hoti hai ....kyuki ye infine loop chala degaa
//life cycle ke andar agar condition karni hai to api call kar skate hai.
//componentDidUpdate ke under karna hogaa.





///-------(14)------shold Component life cycle method..(shouldComonenetUpdate)
//when shold componetUpdate calledanduse
//it can stop rendindg.
//use with state and props.
// import React from 'react'

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       count:0
//     }
//   }
//   shouldComponentUpdate(){
//     if(this.state>5 && this.state.count<10){
//       return true;
//     }
//   }
//   //ese hamre render ki speed badegi.
//   render(){
//     return(
//       <div classname="App">
//         <h1>sholud componenet updated{this.state.count}</h1>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>update</button>
//       </div>
//     )
//   }
// }
// export default App;









///----(15)---------Hooks in Reacts js-----
//kuch fieatures hote hai jo class me hota hai  h but function  me nahi ho hai.. unhi sab ko 

// import React,{useState} from 'react'  
//     //this is hooks....look more hooks write {use} look all hooks. aur jaha bhi use aa jaay waha par hook hai.

//     function App(){
//       const [setData]=useState("Sanya")      //esi ko destructure karna kahte hai.
//       return(
//         <div className='App'>
//           <h1>hello worlk</h1>




//----(16)----useEffect in React js----
//jaise class componenet ke under life cycle method hote the naa jaise constractor,shouldcomponent,getDrivedStateffromProps usi tarha fuction componenet ke uder hota hai useeffect. ye all in onle package jhai. ese 
// import React from 'react'
// import {useEffect, useState} from 'react'

// function App(){
//   const[count,setCount]=useState(0)
//   useEffect(()=>{
//     alert("welcome Sir")
//   })
//   return(
//     <div className="App">
//       <h1>Please click it {count}</h1>
//       <button onClick={()=>setCount(count+1)}>update Conter</button>
//     </div>
//   )
// }
// export default App;






///-----(17)------UseEffect With Specific State and props------
//(1)-use with specific state
//-(2)-useEffect with Specific props

///////////-----------(1)---------

// import React, { useEffect,useState } from 'react'

// function App(){
//   const [data,setData]=useState(10);
//   const [count,setCount]=useState(100)
//   useEffect(()=>{
//     console.warn("use effect called")
//   },[data])      ///for specific data call  look out ..

//   return(
//     <div className='App'>
//     <h1>Count:: {count}</h1>
//     <h2>Data :: {data}</h2>
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//     </div>
//   )
// }
// export default App;



////-----------(19)------------
// import React, { useEffect,useState } from 'react'
// import User from './User'

// function App(){
//   const [data,setData]=useState(10);
//   const [count,setCount]=useState(100)
//   useEffect(()=>{
//     console.warn("use effect called")
//   })      ///for specific data call  look out ..

//   return(
//     <div className='App'>
   
//     <User count={count} data={data}></User>
//       <button onClick={()=>setCount(count+1)}>Update Count</button>
//       <button onClick={()=>setData(data+1)}>Update Data</button>
//     </div>
//   )
// }
// export default App;








