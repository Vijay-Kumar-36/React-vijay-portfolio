import React from 'react'
import './style.css'
export const Education = () => {
  const pad={
    marginBottom:"20px"
    
  }
  return (
    <div><section className="education" id="education">
    <h1 className="heading"> My Education </h1>
    <div className="box-container">
      <div className="box">
        <i className="fas fa-graduation-cap" />
        <span>2013</span>
        <h3>SSLC</h3>
<p style={pad}>i done my SSLC in Kadathur Goverment High School Nambiur.</p>
<span >84%</span>
      </div>
      <div className="box">
        <i className="fas fa-graduation-cap" />
        <span>2015</span>
        <h3>HSC</h3>
        <p style={pad}>I done my HSC in Sri Ragavendra Higher Scoundry School Sathyamangalam.</p>
      <span>66%</span>
      </div>
      <div className="box">
        <i className="fas fa-graduation-cap" />
        <span>2018</span>
        <h3>Bachelor</h3>
        <p style={pad}>I done my B.Sc Computer Science in Bharathidasan College of Arts & Science Erode.</p>
        <span>62%</span>
      </div>
      <div className="box">
        <i className="fas fa-graduation-cap" />
        <span>2020</span>
        <h3>Masters</h3>
        <p style={pad}>I done my M.Sc Computer Science in Bharathidasan College of Arts & Science Erode.</p>
        <span>68%</span>
      </div>
      <div className="box">
        <i className="fas fa-graduation-cap" />
        <span>2022</span>
        <h3>React js</h3>
        <p style={pad}>I completed React js cource in Udemy.</p>
        <p>Certificate Link</p>
        <span >Link</span>
      </div>
      <div className="box">
        <i className="fas fa-graduation-cap" />
        <span>2022</span>
        <h3>Front End Development</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
      </div>
    </div>
  </section></div>
  )
}
