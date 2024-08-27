import PropTypes from 'prop-types';
import { useState } from 'react';

export default function QuoteForm({addNewQuote}) {
    const [newQuote, setNewQuote] = useState({
        text: '',
        author: '',
    })

    const handleInputChange = (e) => {
        // Almacena el valor de los inputs en el estado de la quote
        setNewQuote({ ...newQuote, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Valida que los inputs no estén vacíos
        if (newQuote.text === '' || newQuote.author === '') {
            alert('Todos los campos son obligatorios')
            return
        }
        addNewQuote(newQuote)
        setNewQuote({ text: '', author: '' })
    }

    return (
        <>
            <h2 className="text-left text-xl font-bold mb-4">Crear nueva quote</h2>
            <form className="flex gap-2 mb-8" onSubmit={handleSubmit}>
                <InputGroup
                    id="text"
                    placeholder="Escribe tu Quote"
                    value={newQuote.text}
                    onChange={handleInputChange}
                />
                <InputGroup
                    id="author"
                    placeholder="Autor"
                    value={newQuote.author}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="py-3 px-4 block border border-gray-200 bg-orange-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none hover:bg-orange-400 transition"
                >
                    Crear Quote
                </button>
            </form>
        </>
    );
}

QuoteForm.propTypes = {
    addNewQuote: PropTypes.func
};

function InputGroup({ id, placeholder, value, onChange }) {
    return (
        <div className="max-w-sm space-y-3">
            <input
                type="text"
                placeholder={placeholder}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
            />
        </div>
    );
}

InputGroup.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};
