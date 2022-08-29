import React from 'react'
import "./dashbord.css"
export default function Dashboard() {
  return (
  <>
  <section> 
        <div class="box">
            <div class="skill">
                <div class="graph" style={{height: "85%"}}>
                    <div class="percent">85%</div>
                </div>
                <div class="name">Day</div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "92%"}}>
                    <div class="percent">92%</div>
                </div>
                <div class="name">week</div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "72%"}}>
                    <div class="percent">72%</div>
                </div>
                <div class="name">Month</div>
            </div>
            <div class="skill">
                <div class="graph" style={{height: "80%"}}>
                    <div class="percent">80%</div>
                </div>
                <div class="name">year</div>
            </div>
            
        </div>
    </section>
  </>
  )
}
