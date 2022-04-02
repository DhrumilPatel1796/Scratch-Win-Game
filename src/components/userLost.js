import '../styles.css';

const UserLost = () => {
    return (
        <article>
            <h2 className='result-message'>Sorry! Try again in 72 hours</h2>
            <aside className='coupon'>
                <h1>Save $2</h1>
                <p className='green-text'>on any purchases of $50</p>
                <div>
                    <p>only valid at</p>
                    <img src={require('../images/png/logo-raw-cabbage-on-a-stick-hut.png')} />
                </div>
            </aside>
        </article>
    )
};

export default UserLost;