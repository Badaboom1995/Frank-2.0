import React from 'react';
import Slider from 'react-slick';
import uuid from 'uuid';
import AddTargetDuration from './AddTargetDuration';
import SetGoalName from './SetGoalName';
import SetAreas from './SetAreas';
import SetDifficulty from './SetDifficulty';
import { connect } from 'react-redux';
import { addGoal } from '../actions/goals';


class AddTarget extends React.Component {
    // Конструктор объявлен для того чтобы работал слайдер. Так в примере было :)
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    componentWillMount() {
        
    }
    state = {
        targetDuration: 0,
        targetName: '',
        targetAreas: '',
        targetDifficulty: '',
        targetPriority: '',
        activeSlide:0,
        isStarted: false
    }
    settings = {
        infinite: false,
        speed: 500,
        accessibility: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        arrows: false,
        swipe: false,
        speed: 750,
        beforeChange: (oldIndex ,newIndex) => {
                this.setState({activeSlide: newIndex });
        }
    };
    start = (e) => {
        e.preventDefault();  
        this.slider.slickNext();

        this.setState(() => ({
            isStarted: true,
        }))
        
    }
    next(e) {
    e.preventDefault();    
    this.slider.slickNext();
    }
    previous(e) {
    e.preventDefault();   
    this.slider.slickPrev();
    }
    goTo(slide) {
        this.slider.slickGoTo(slide)
    }
    addGoal = (e) => {
        e.preventDefault();
        this.props.dispatch(addGoal(
        {
            name : this.state.targetName,
            duration : this.state.targetDuration,
            areas: this.state.targetAreas,
            difficulty: this.state.targetDifficulty

        }))
    }
    onDurationChange = (value) => {
        this.setState(() => ({
            targetDuration: value
        }))
    }
    onDifficultyChange = (e) => {
        e.persist();
        this.setState(() => ({
            targetDifficulty: e.target.value
        }))
        console.log(this.state);
    }
    onNameChange = (e) => {
        this.setState(() => ({
            targetName: e
        }))
    }
    onAreaChange = (e) => {
        e.persist();
        if (e.target.checked) {
            this.setState(() => ({
                targetAreas: [
                    ...this.state.targetAreas,
                    e.target.value
                ]
            }))
        } else {
            this.setState(() => {
                const newAreas = this.state.targetAreas.filter((area) => {
                    return area!=e.target.value
                })
                return { targetAreas: newAreas }
            })
            console.log(this.state);
        }
        
        
    }
    render() {
        return (
            <div className='add-target'>
                <form className = 'add-target__form'>
                    {this.state.activeSlide != 0 && <span className='add-target__step'>Шаг {this.state.activeSlide}</span>}
                    <Slider className='add-target__form-cards' ref={c => (this.slider = c)} {...this.settings}>
                        <div className='add-target__form-card-wrapper'>
                            <div className='add-target__form-card'>
                                <div className="add-target__form-card-img"><img src="Finn_the_Human.png" alt=""/></div>
                                <h3 className = 'add-target__card-title add-target__card-title--speech'>Пришло время создать первую цель!</h3>
                                <p className = 'add-target__form-card-paragraph'>Через <b>5 простых шагов</b> у вас будет четко сформулированная цель, которая позволит вам оставаться мотивированным и удерживать фокус.</p>
                                <button onClick = {this.start} className='button button--blue add-target__form-card-start'>Начать</button>
                            </div>
                        </div>
                        <SetGoalName onNameChange = {this.onNameChange} next = {this.next}/>
                        <AddTargetDuration onDurationChange = {this.onDurationChange} next = {this.next}/>
                        <SetAreas onAreaChange={this.onAreaChange} next = {this.next}/>
                        <SetDifficulty onDifficultyChange = {this.onDifficultyChange} next = {this.next} />
                        <div className='add-target__form-card-wrapper'>
                            <div className='add-target__form-card'>
                                <h3 className = 'add-target__card-title'>Великолепно! <br/> Теперь вы готовы действовать!</h3>
                                <br/>
                                <br/>
                                <div className="add-target__form-card-img"><img src="./images/success.svg" alt=""/></div>
                                <p className = 'add-target__form-card-paragraph'>Только <b>3%  людей</b> записывают свои цели.Мама всегда знала, что вы особенный.</p>
                                <p className = 'add-target__form-card-paragraph'>Мы запомнили ваш подвиг! В новых версиях приложения вы получите награду.</p>
                                <button onClick = {this.addGoal} className='button button--blue add-target__form-card-start'>Завершить</button>
                            </div>
                            
                        </div>
                    </Slider>
                    {(this.state.activeSlide > 1) && <button onClick = {this.previous} className='add-target__card-button-back'></button>}
                    {(this.state.activeSlide != 4 && this.state.activeSlide != 0) && <button onClick = {this.next} className='button button--blue add-target__card-button-forward'>Вперед</button>}
                </form>
                {/* {console.log(this.props.dispatch)} */}
                {/* {this.props.dispatch(addGoal({name: 'Water bill', duration: 100}))} */}
            </div>
        )  
    }
}

const mapStateToProps = state => ({
    goals: state.goals
  });

export default connect(mapStateToProps)(AddTarget);


   


