import React from 'react'

function SkillDisplayComponent(props){
    return (
        <div className="skill-disp">
            <label className="skill">{props.skill}</label>
            <div className="skill-bar">
                <div className="skill-fill" style={{"width": props.percentage+"%"}} ></div>
            </div>
        </div>
    )
}

export default SkillDisplayComponent;