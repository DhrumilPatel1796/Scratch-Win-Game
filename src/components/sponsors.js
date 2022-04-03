import '../styles.css';

const Sponsors = () => {
    return (
        <article className='sponsors-box-card'>
            <h3>Check Out Our Sponsors</h3>
            <div className='sponsors-container'>
                <img src={require('../images/png/logo-taco-superstore.png')} />
                <img src={require('../images/png/logo-raw-cabbage-on-a-stick-hut.png')} />
                <img src={require('../images/png/logo-glorbotronic-burgers.png')} />
                <img src={require('../images/png/logo-fresh-kicks.png')} />
            </div>
        </article>
    )
};

export default Sponsors;