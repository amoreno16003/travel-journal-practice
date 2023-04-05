import React from 'react'
import Pinpoint from '../images/pinpoint.png'
import '../styles/Experience.css'
const Experience = (props) => {
  return (
    <div className='ExperienceRoot'>
        <img src={props.item.image} alt="" className='cover-image'/>
        <div className='experience-elements'>
            <div className='location'>
                <img src={Pinpoint} alt="" className='pinpoint' />
                <p>{props.item.title}</p>
                <a href={props.item.googleMapsLink}>View on Google Maps</a>
            </div>
            <div>
                <h1>
                    {props.item.location}
                </h1>
            </div>
            <div>
                <h2 className='date'>{props.item.startDate} to {props.item.endDate}</h2>
            </div>
            <div>
                <p className='description'>
                    {props.item.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Experience