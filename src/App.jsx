import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

import { useState, useEffect } from 'react';
import QuotesList from './components/QuotesList';
import Quote from './components/Quote';
import QuoteForm from './components/QuoteForm';

function App() {
    const [quote, setQuote] = useState({});
    const [quotesList, setQuotesList] = useState([]);

    useEffect(() => {
        // Función que carga las quotes
        const loadQuotes = async () => {
            // Busca las quotes en localStorage
            const storedQuotes = localStorage.getItem('quotes');

            if (storedQuotes && storedQuotes !== '[]') {
                // Si hay quotes y no es un array vacío se setean en el estado
                setQuotesList(JSON.parse(storedQuotes));
            } else {
                // Si no hay quotes se hace una petición a  
                // la api y se almacenan en localStorage
                try {
                    const res = await fetch('https://type.fit/api/quotes');
                    const data = await res.json();
                    setQuotesList(data);
                    localStorage.setItem('quotes', JSON.stringify(data));
                } catch (error) {
                    console.log('Error fetching quotes!', error);
                }
            }
        };

        // Ejecuta la función
        loadQuotes();
    }, []);

    const addNewQuote = (newQuote) => {
        // Agrega una nueva quote al array y actualiza el localStorage
        const updatedQuotes = [newQuote, ...quotesList];
        setQuotesList(updatedQuotes);
        localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    };

    const setSelectedQuote = (quote) => {
        // Setea la quote clickeada
        setQuote(quote);
    };

    const deleteQuote = (quote) => {
        // Elimina la quote del array y actualiza el localStorage
        const updatedQuotes = quotesList.filter((q) => q.text !== quote.text);
        setQuotesList(updatedQuotes);
        localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    };

    return (
        <>
            <Header />

            <main>
                <QuoteForm addNewQuote={addNewQuote} />

                {quote && <Quote quote={quote.text} author={quote.author} />}

                <QuotesList
                    quotesList={quotesList}
                    handleClick={setSelectedQuote}
                    handleDelete={deleteQuote}
                />
            </main>

            <Footer text="Mi App de quotes!" />
        </>
    );
}

export default App;
