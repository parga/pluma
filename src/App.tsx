import React, { ReactElement, useState } from 'react';
import './App.css';
import '@popsure/dirty-swan/dist/index.css';
import {Input} from '@popsure/dirty-swan'
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import {IntlProvider, useIntl} from 'react-intl';
import { useQuestions, Question } from './hooks/useQuestions';
import {default as englishDictionary} from './__locales__/en.json';
import {default as spanishDictionary} from './__locales__/es.json';

const messages = {
  'en': englishDictionary,
  'es': spanishDictionary
}

interface QuestionRendererParams {
  question: Question
}


function App(): ReactElement {
  const [locale, setlocale] = useState('en');
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router basename="/pluma">
        <header className="App-header">
        </header>
        <Main />
      </Router>
    </IntlProvider>
  );
}

function Main() {
  const intl = useIntl();
  const questions = useQuestions({intl});
  return (
    <Switch>
      {questions.map((question, i) =>(
        <Route key={i} path={`/${question.id}`} >
          <QuestionRenderer question={question} />
        </Route>
      ))}
      <Route path="/" >
        <Home />
      </Route>
    </Switch>
  )
}

function QuestionRenderer ({question}: QuestionRendererParams): ReactElement {
  const {previous, next, question: label} = question;
  const history = useHistory();
  const navigate = (url) => history.push(url);

  return (<>
    <div>{label}</div>
    <button className='p-btn--primary' onClick={() => navigate(previous)}>Previous</button>
    <button className='p-btn--primary' onClick={() => navigate(next)}>Next</button>
  </>
  )
}

function Home () {
  const history = useHistory();
  const navigate = (url) => history.push(url);
  return (<>
    <button className='p-btn--primary' onClick={() => navigate("/firstName")}>Let's start</button>
  </>)
}


export default App;
