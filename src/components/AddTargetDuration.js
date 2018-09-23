import React from 'react';
import moment from 'moment';
moment.locale('ru');
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import addTargetCard from './hoc/addTargetCard';

class AddTargetDuration extends React.Component {
    state = {
        currentTab: '',
        startAt:moment(),
        endAt: moment(),
        calendarFocused: null
    }
    onTabChange = (e) => {
        e.persist();
        this.setState(() => ({
            currentTab: e.target.value,
            endAt: moment().add(e.target.value, 'days')
        }));
        this.props.setCardReady();
        this.props.onDurationChange(e.target.value);
    }
    onDatesChange = ({startDate, endDate}) => {
        this.setState(() => ({
            startAt: startDate,
            endAt:endDate
        }))
    }
    onFocusChange = (focused) => {
        this.setState(() => ({calendarFocused: focused}))
    }
    render(){
        return (
                <div className='card-duration'>
                    <h3 className = 'add-target__card-title'>Выберите длительность цели</h3>
                    <div className="card-duration__content">
                        <div className='card-duration__tabs'>
                            <input type='radio' id='duration30' className='card-duration__tabs-radio' name='duration' onChange={this.onTabChange} value={30}/>
                            <label htmlFor='duration30' className='card-duration__tabs-label'>
                                <span className='card-duration__option-icon'><img src="./images/icons/prince.svg" alt=""/></span>
                                <span className='card-duration__option-name'>Месяц</span>
                            </label>
                            <input type='radio' id='duration90' className='card-duration__tabs-radio'  name='duration' onChange={this.onTabChange} value={90}/>
                            <label htmlFor='duration90' className='card-duration__tabs-label'>
                                <span className='card-duration__option-icon'><img src="./images/icons/viking.svg" alt=""/></span>
                                <span className='card-duration__option-name'>Квартал</span>
                            </label>
                            <input type='radio' id='duration360' className='card-duration__tabs-radio' name='duration'onChange={this.onTabChange} value={360}/>
                            <label htmlFor='duration360' className='card-duration__tabs-label'>
                                <span className='card-duration__option-icon'><img src="./images/icons/knight.svg" alt=""/></span>
                                <span className='card-duration__option-name'>Год</span>
                            </label>
                        </div>
                        {this.state.currentTab && <div className="card-duration__current-duration">
                            {/* <span className="card-duration__current-duration-label">Начало</span><span type="text" className="card-duration__current-duration-input">Сегодня</span> */}
                            {/* <span className="card-duration__current-duration-label">Конец</span><span type="text" className="card-duration__current-duration-input">{moment().add(this.state.currentTab, 'days').format('l')}</span> */}
                            <div className="card-duration__dates-picker">
                                <DateRangePicker
                                    startDate={this.state.startAt}
                                    startDateId="start_date_input"
                                    endDate={this.state.endAt}
                                    endDateId="end_date_input"
                                    onDatesChange = {this.onDatesChange}
                                    focusedInput = {this.state.calendarFocused}
                                    onFocusChange = {this.onFocusChange}
                                    numberOfMonths = {1}
                                    isOutsideRange = {() => false}
                                />
                            </div>
                        </div> }        
                        {this.state.currentTab == 30 && <div className="card-duration__description">
                            <p className="card-duration__description-paragraph">За месяц можно что-то и успеть. Но это не точно</p>
                        </div>}
                        {this.state.currentTab == 90 && <div className="card-duration__description">
                            <p className="card-duration__description-paragraph">Многие программы тренировок составляются на 90 дней. За это время ты успеешь увидеть результат и не поедешь кукухой. </p>
                        </div>}
                        {this.state.currentTab == 360 && <div className="card-duration__description">
                            <p className="card-duration__description-paragraph">Начинаешь новую жизнь в новом году? Врят ли у тебя получится. </p>
                        </div>}
                        {this.state.currentTab == '' && <div className="card-duration__no-description">
                            <div className="card-duration__no-description-icon"><img src="./images/icons/meditation.svg" alt=""/></div>
                            <div className="card-duration__no-description-message">Здесь появтяся детали</div>
                        </div>}
                    </div>
                    
                </div>
        )
    }
}


export default addTargetCard(AddTargetDuration);