import '../styles.css';
import React from 'react';

class UserWon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            win: true
        };
    }

    handleMath() {
        let userAnswer = document.getElementById("math").value;
        let winningContainer = document.querySelector(".skill-testing");
        let resultInstructions = document.querySelector(".result-instructions");
        // console.log(userAnswer);
        if (userAnswer == 4) {
            winningContainer.innerHTML = `<p>You will receive your BMDs in the next 6-8 weeks</p><p>Thanks for playing! Play again in 72 hours!</p>`
            resultInstructions.style.display = "none";
        } else {
            winningContainer.innerHTML = `<p>We're sorry, you did not pass the skill-testing question :(.</p><p>Thanks for playing! Play again in 72 hours!</p>`
            resultInstructions.style.display = "none";
        }
    }

    render () {
        return (
            <article>
                <h2>You've won XXX BMDs!</h2>
                <aside className='skill-testing'>
                    <p>Please answer the simple skill testing question to claim your prize</p>
                    <p>
                        <label htmlFor='math'>2 + 2 =</label>
                        <input type='number' name='math' id='math'></input>
                    </p>
                    <input type='submit' className='button' id='submit' value='Submit' onClick={this.handleMath}></input>
                </aside>
                <p className='result-instructions'>You will receive your BMDs in the next 6-8 weeks</p>
            </article>
        )
    }
}

export default UserWon;