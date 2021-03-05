import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useQuestions } from '../hooks/useQuestions';
import { Home } from './Home';
import { Question } from './Question';
import { Recommendations } from './Recommendations';

export function Main() {
  const intl = useIntl();
  const [userId, setUserId] = useState('');
  const questions = useQuestions({ intl, userId });
  const history = useHistory();
  if(!userId) {
    history.push('/');
  }
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/">
          <Home userId={userId} setUserId={setUserId} />
        </Route>
        {questions.map((question, i) => (
          <Route key={i} path={`/${question.id}`}>
            <Question question={question} />
          </Route>
        ))}
        <Route path="/recommendations">
          <Recommendations userId={userId} />
        </Route>
      </Switch>
    </div>
  );
}
