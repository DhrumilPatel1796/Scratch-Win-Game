import '../styles.css';
import React from 'react';
import mathData from '../data.json';
// create random number for math question
let randNum = Math.floor(Math.random() * 10);

class UserWon extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            win: true,
            userPrize: this.props.userPrize
        };
    }

    handleMath() {
        // get dom elements for skill testing question
        let userAnswer = document.getElementById("math").value;
        let winningContainer = document.querySelector(".skill-testing");
        let questionContainer = document.querySelector(".puzzle");
        let initialInstructions = document.querySelector(".initial-instructions");
        let resultInstructions = document.querySelector(".result-instructions");
        let questionData = document.querySelector(".submit");
        let correctAnswer = questionData.getAttribute('id');

        // check if user got answer correct
        if (userAnswer === correctAnswer) {
            // show details on win
            winningContainer.innerHTML = `<div class="puzzle"><p>You will receive your BMDs in the next 6-8 weeks</p><p>Thanks for playing! Play again in 72 hours!</p></div>`
            // hide question
            resultInstructions.style.display = "none";
            initialInstructions.style.display = "none";
            questionContainer.style.display = "none";
        } else {
            // show details on loss
            winningContainer.innerHTML = `<div class="puzzle"><p>We're sorry, you did not pass the skill-testing question :(.</p><p>Thanks for playing! Play again in 72 hours!</p></div>`
            // hide question
            resultInstructions.style.display = "none";
            initialInstructions.style.display = "none";
            questionContainer.style.display = "none";
        }
    }

    render () {
        return (
            <article className="user-won cell large-6">
                <h2>You've won {this.props.userPrize} BMDs!</h2>
                {mathData.mathData.map((data, key) => {
                    return (
                        <aside key={key} className='skill-testing'>
                            {data.id === randNum  &&
                                <div className='puzzle'>
                                    <p className='initial-instructions'>Please answer the simple skill testing question to claim your prize</p>
                                    <p>
                                        <label htmlFor='math'>{data.question}</label>
                                        <input type='number' name='math' id='math' />
                                    </p>
                                    <input type='submit' className='button submit' id={data.answer} value='Submit' onClick={this.handleMath}></input>
                                </div>
                            }
                        </aside>
                )})}
                <p className='result-instructions'>You will receive your BMDs in the next 6-8 weeks</p>
            </article>
        )
    }
}

export default UserWon;