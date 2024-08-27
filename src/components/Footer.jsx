import PropTypes from 'prop-types';

export default function Footer({text}) {
  return (
    <footer>
        <p>Footer!</p>
        <p>{text}</p>
    </footer>
  )
}

Footer.propTypes = {
    text: PropTypes.string
};
