import PropTypes from 'prop-types';
import { capitalize } from '../../utils';

const DescriptionCard = ({ description, game }) => {

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6 text-center text-gray-800 dark:text-gray-200">
            {description}
            <p className="bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full w-fit mx-auto mt-4">
                {capitalize(game)}
            </p>
        </div>
    )
}

DescriptionCard.propTypes = {
    description: PropTypes.string.isRequired,
    game: PropTypes.string
}

export default DescriptionCard