import React from 'react';
import addTargetCard from './hoc/addTargetCard'

 class SetAreas extends React.Component {
    render(){
        return (
             <div className='add-target__card-areas'>
                <h3 className = 'add-target__card-title'>Какую область жизни улучшит цель?</h3>
                <div className="set-areas">
                    <p className="set-areas__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a pariatur harum ab, quia asperiores non labore eos laudantium similique nam enim minima sequi optio quo nostrum iure repellendus commodi?</p>
                    <input id='areaHealth' className='set-areas__input' type='checkbox' value='health' onChange = {this.props.onAreaChange}/><label className='set-areas__label set-areas__label--health' htmlFor='areaHealth'>Здоровье</label>
                    <input id='areaFamily' className='set-areas__input' type='checkbox' value='family' onChange = {this.props.onAreaChange}/><label className='set-areas__label set-areas__label--family' htmlFor='areaFamily'>Семья</label>
                    <input id='areaSpirit' className='set-areas__input' type='checkbox' value='spirit' onChange = {this.props.onAreaChange}/><label className='set-areas__label set-areas__label--spirit' htmlFor='areaSpirit'>Духовность</label>
                    <input id='areaCareer' className='set-areas__input' type='checkbox' value='career' onChange = {this.props.onAreaChange}/><label className='set-areas__label set-areas__label--career' htmlFor='areaCareer'>Карьера</label>
                </div>
            </div>
        )
    }
}

export default addTargetCard(SetAreas);