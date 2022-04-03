import { Link } from 'react-router-dom';

import '../styles.css';

const ContestFooter = () => {
    return (
        <section id='nav-buttons-footer' className='grid-x footer'>
            <article  className='cell large-2 medium-4 small-12 test'>
                <Link to="/legal"><input type="button" value="Terms and Conditions"></input></Link>
            </article>
    
            <article className='cell large-2 medium-4 small-12'> 
                <p>Place holder for Sign In Link</p>
            </article>
            
            <article className='cell large-6 medium-2 small-12'></article>

            <article className='cell large-2 medium-4 small-12'>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
            </article>

        </section>
    )
};

export default ContestFooter