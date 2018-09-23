import React from 'react';
import addTargetCard from './hoc/addTargetCard'

 class SetDifficulty extends React.Component {
    render(){
        return (
             <div className='add-target__card-difficulty'>
                <h3 className = 'add-target__card-title'>Определите сложность цели</h3>
                <div className="set-difficulty">
                    <input className='set-difficulty__input' type='radio' name='difficulty' id='simple' onChange={this.props.onDifficultyChange} value={0}/><label className='set-difficulty__label set-difficulty__label--easy' htmlFor='simple'>Простая</label>
                    <input className='set-difficulty__input' type='radio' name='difficulty' id='medium' onChange={this.props.onDifficultyChange} value={1}/><label className='set-difficulty__label set-difficulty__label--medium' htmlFor='medium'>Средняя</label>
                    <input className='set-difficulty__input' type='radio' name='difficulty' id='hard' onChange={this.props.onDifficultyChange} value={2}/><label className='set-difficulty__label set-difficulty__label--hard' htmlFor='hard'>Сложная</label>
                </div>
            </div>
        )
    }
}

export default addTargetCard(SetDifficulty);