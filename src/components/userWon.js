import '../styles.css';

const UserWon = () => {
    return (
        <article>
            <h2>You've won XXX BMDs!</h2>
            <aside className='skill-testing'>
                <p>Please answer the simple skill testing question to claim your prize</p>
                <p>
                    <label htmlFor='math'>2 + 2 =</label>
                    <input type='number' name='math' id='math'></input>
                </p>
                <input type='submit' className='button' id='submit' value='Submit'></input>
            </aside>
            <p>You will receive your BMDs in the next 6-8 weeks</p>
        </article>
    )
};

export default UserWon;