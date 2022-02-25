import React from 'react'
import './style.css'
export const About = () => {
    
  return (
    <div>
  
  <section className="about" id="about">
  <h1 className="heading"> About Me</h1>
        <div className="row">
          <div className="info">
    <table>
     <tr>
     <th ><h3>Name </h3></th>
     <td><h3 style={{color:"white"}}> :  Vijaykumar.M</h3></td>
     </tr>
     <tr>
     <th ><h3>Age </h3></th>
     <td><h3 style={{color:"white"}}> :  23</h3></td>
     </tr>
     <tr>
     <th ><h3>qualification </h3></th>
     <td><h3 style={{color:"white"}}> :  M.Sc Computer Science</h3></td>
     </tr>
     <tr>
     <th ><h3>Post </h3></th>
     <td><h3 style={{color:"white"}}> :  React js Developer</h3></td>
     </tr>
   
 
      
    </table>
          
             {/* <h3>  name :  vijaykumar.M </h3>
            <h3>  age :  23 </h3>
            <h3>  qualification :  M.Sc </h3>
            <h3>  post :  React js developer </h3>
            <h3>  language :  hindi </h3> */}
            <a href="#"><button className="btn"> Download CV <i className="fas fa-download" /> </button></a>
          </div>
          <div className="counter">
         
           
      <div className="skills">
        <div className="skills-bar">
          <div className="bar">
            <div className="info">
              <span>HTML & CSS</span>
            </div>
            <div className="progress-line"><span className="html" /></div>
            <div className="bar">
              <div className="info">
                <span>BOOTSTRAP</span>
              </div>
              <div className="progress-line"><span className="css" /></div>
              <div className="bar">
                <div className="info">
                  <span>JAVASCRIPT</span>
                </div>
                <div className="progress-line"><span className="bootstrap" /></div>
                <div className="bar">
                  <div className="info">
                    <span>REACT JS</span>
                  </div>
                  <div className="progress-line">
                    <span className="javascript" />
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>NEXT JS </span>
                    </div>
                    <div className="progress-line"><span className="c" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </section></div>
  )
}