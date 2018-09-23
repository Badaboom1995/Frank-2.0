import React from 'react';

const addTargetCard = (Component) => {
    return class AddTargetCard extends React.Component {
        state = {
            cardIsReady: true
        }
        setCardReady = () => {
            console.log(this.state.cardIsReady);
            this.setState(() => ({
                cardIsReady: true
            }))
        }
        setCardNotReady = () => {
            console.log(this.state.cardIsReady);
            this.setState(() => ({
                cardIsReady: false
            }))
        }
       
        render() {
            return (
                <div className='add-target__form-card-wrapper'>
                    <div className="add-target__form-card">
                        <Component {...this.props} setCardReady = {this.setCardReady} setCardNotReady = {this.setCardNotReady}/>
                        <button onClick = {this.props.next} disabled = {!this.state.cardIsReady} className='button button--blue add-target__card-button-forward'>Дальше</button>
                    </div>
                </div>
            )
           
        }
    }
}

export default addTargetCard;