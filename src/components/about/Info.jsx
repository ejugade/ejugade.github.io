import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Master's in CS (2024-2026)</h3>
            <span className="about__subtitle">Purdue University - West Lafayette</span>
        </div>

        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Engineering Analyst - 1 YOE</h3>
            <span className="about__subtitle">Goldman Sachs</span>
        </div>

        <div className="about__box">
        <i class='bx bx-support about__icon'></i>
            <h3 className="about__title">Graduate Research</h3>
            <span className="about__subtitle">Cognitive Robot Autonomy and Learning Lab</span>
        </div>
    </div>
  )
}

export default Info