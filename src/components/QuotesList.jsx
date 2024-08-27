import PropTypes from 'prop-types';
import QuoteCard from './QuoteCard';

export default function QuotesList({ quotesList, handleClick, handleDelete }) {

    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quotesList.map((quote) => (
                <QuoteCard
                    key={quote.text}
                    quote={quote}
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                />
            ))}
        </div>
    );
}

QuotesList.propTypes = {
    quotesList: PropTypes.array,
    handleClick: PropTypes.func,
    handleDelete: PropTypes.func,
};
