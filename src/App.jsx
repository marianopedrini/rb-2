import Footer from './components/Footer';
import Header from './components/Header';

import './App.css';

import data from './data.json';
import Quote from './components/Quote';
import { useState } from 'react';

function App() {
    const [quote, setQuote] = useState(data[0]);

    const setRandomQuote = () => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setQuote(data[randomNumber]);
    };

    return (
        <>
            <Header />

            <main>
                <Quote quote={quote.quote} author={quote.author} />

                <button onClick={setRandomQuote}>Cambiar quote</button>
            </main>

            <Footer text="Mi App de quotes!" />
        </>
    );
}

export default App;
