import PropTypes from 'prop-types';

export default function QuoteCard({ quote, handleClick, handleDelete }) {
    return (
        <article className="relative">
            <button
                className="absolute w-6 h-6 rounded-full top-2 right-3 text-red-600 border border-red-600"
                onClick={() => handleDelete(quote)}
            >
                X
            </button>
            
            <div
                onClick={() => handleClick(quote)}
                className="max-w-sm rounded-xl cursor-pointer overflow-hidden border border-gray-200 px-6 pt-8 pb-4 flex gap-4 flex-col justify-between hover:shadow-md"
            >
                <h3 className="font-bold">{`"${quote.text}"`}</h3>
                <p>{quote.author.replace(', type.fit', '')}</p>
            </div>
        </article>
    );
}

QuoteCard.propTypes = {
    quote: PropTypes.object,
    handleClick: PropTypes.func,
    handleDelete: PropTypes.func,
};
