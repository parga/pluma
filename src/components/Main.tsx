import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Route, Switch } from 'react-router-dom';
import { useQuestions } from '../hooks/useQuestions';
import { Home } from './Home';
import { Question } from './Question';

export function Main() {
  const intl = useIntl();
  const [userId, setUserId] = useState('');
  const questions = useQuestions({intl, userId});
  return (
    <div className="App">
      <Switch>
        {questions.map((question, i) =>(
          <Route key={i} path={`/${question.id}`} >
            <Question question={question} />
          </Route>
        ))}
        <Route path="/" >
          <Home userId={userId} setUserId={setUserId}/>
        </Route>
      </Switch>
    </div>
  )
}
