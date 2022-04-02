import { Link } from 'react-router-dom';

import '../styles.css';

const PlayToWinBtn = () => {
    return(
        <article  className='playBtn'>
            <button className='button' > <Link to="/contest">Play To Win</Link> </button>
        </article>
    )
}

export default PlayToWinBtn