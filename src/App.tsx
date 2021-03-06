import '@popsure/dirty-swan/dist/index.css';
import { ReactElement, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {IntlProvider} from 'react-intl';
import {default as englishDictionary} from './__locales__/en.json';
import {default as spanishDictionary} from './__locales__/es.json';
import { Header } from './components/Header';
import { Main } from './components/Main';

const messages = {
  'en': englishDictionary,
  'es': spanishDictionary
}


function App(): ReactElement {
  const [locale, setLocale] = useState('en');
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router basename="/pluma">
        <Header setLocale={setLocale} locale={locale}/>
        <Main/>
      </Router>
    </IntlProvider>
  );
}




export default App;
