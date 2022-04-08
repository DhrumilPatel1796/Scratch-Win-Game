import '../styles.css';

const UserLost = () => {
    return (
        <article className='user-lost cell large-6'>
            <h2 className='result-message'>Sorry! Try again in 72 hours</h2>
            <img className='coupon' src={require('../images/png/coupon.png')} />
        </article>
    )
};

export default UserLost;