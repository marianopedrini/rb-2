import PropTypes from 'prop-types';

export default function Quote({ quote, author }) {
    return (
        <div className="rounded-xl overflow-hidden px-6 py-4 mb-12">
            {/* Valida que haya una quote y un author */}
            {quote && author ? (
                <>
                    <h1>{`"${quote}"`}</h1>
                    <p className="text-xl text-right mt-4 text-gray-600">
                        {author?.replace(', type.fit', '')}
                    </p>
                </>
            ) : (
                <h3 className='text-5xl'>Seleciona una quote!</h3>
            )}
        </div>
    );
}

Quote.propTypes = {
    quote: PropTypes.string,
    author: PropTypes.string,
};
