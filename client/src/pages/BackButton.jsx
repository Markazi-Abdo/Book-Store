import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <div>
        <Link to={'/'}>
            <button className='bg-lime-600 px-4 py-1 w-fit rounded-lg'>
                <FontAwesomeIcon icon={faHome} />
            </button>
        </Link>
    </div>
  )
}
