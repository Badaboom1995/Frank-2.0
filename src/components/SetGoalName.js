import React from 'react';
import addTargetCard from './hoc/addTargetCard'

 class SetGoalName extends React.Component {
    onNameChange = (e) => {
        e.persist();
        console.log(e.target.value.length);
        this.props.onNameChange(e.target.value);
        console.log(window);
        if(e.target.value.length > 5) {
            this.props.setCardReady();
        } else {
            this.props.setCardNotReady();
        }
        
    }
    render(){
        return (
            <div className='add-target__card-name'>
                <h3 className = 'add-target__card-title'>Сформулируйте вашу цель</h3>
                <div className="set-goal-name">
                    <input type='text' placeholder = 'Купить малиновый пиджак' onChange = {this.onNameChange} className='set-goal-name__input'/>
                    <div className="set-goal-name__rules">
                        <h4 className="set-goal-name__rules-title">Правильная цель:</h4>
                        <ul className="set-goal-name__rules-list">
                            <li className="set-goal-name__rules-item"><b>Конкретная</b>: Какого именно результата вы хотите достигнуть?</li>
                            <li className="set-goal-name__rules-item"><b>Измеримая</b>: Как вы узнаете, что цель достигнута?</li>
                            <li className="set-goal-name__rules-item"><b>Достижимая</b>: Это цель которую вы действительно можете достигнуть?</li>
                            <li className="set-goal-name__rules-item"><b>Значимая</b>: Эта цель отражает ваши жизненные ценности?</li>
                            <li className="set-goal-name__rules-item"><b>Значимая</b>: Эта цель отражает ваши жизненные ценности?</li>
                            <li className="set-goal-name__rules-item"><b>Значимая</b>: Эта цель отражает ваши жизненные ценности?</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default addTargetCard(SetGoalName)