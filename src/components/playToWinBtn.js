import { Link } from 'react-router-dom';

import '../styles.css';

const PlayToWinBtn = () => {
    return(
        <button className='button' > <Link to="/contest">Play To Win</Link> </button>
    )
}

export default PlayToWinBtn