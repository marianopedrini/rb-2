import PropTypes from 'prop-types';

export default function Quote({quote, author}) {
  return (
    <div>
        <h3>{quote}</h3>
        <p>{author}</p>
    </div>
  )
}

Quote.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string
};

