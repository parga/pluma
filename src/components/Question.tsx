import { ReactElement } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { Question as QuestionType } from '../hooks/useQuestions'

interface QuestionParams {
  question: QuestionType
}

const messages = defineMessages({
    previous: {
        id: 'Question.previous',
        defaultMessage: '< Previous'
    },
    next: {
        id: 'Question.next',
        defaultMessage: 'Next >'
    }
})

export function Question ({question}: QuestionParams): ReactElement {
  const {previous, next, question: label} = question;
  const {formatMessage} = useIntl();
  const history = useHistory();
  const navigate = (url) => history.push(url);

  return (<>
    <div>{label}</div>
    <button className='p-btn--primary' onClick={() => navigate(previous)}>{formatMessage(messages.previous)}</button>
    <button className='p-btn--primary' onClick={() => navigate(next)}>{formatMessage(messages.next)}</button>
  </>
  )
}
