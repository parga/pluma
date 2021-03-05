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

  const inputField = question.input.type === 'text'?
    <Text placeholder={question.input.placeholder} /> :
    <Radio options={question.input.options} />;

  return (
    <div className="question">
      <h4 className="p-h4">{label}</h4>
      {inputField}
      <div className="buttons">
        <button
          className="p-btn p-btn--primary mt16 ws2"
          onClick={() => navigate(previous)}
        >
          {formatMessage(messages.previous)}
        </button>
        <button
          className="p-btn--primary mt16 ws2"
          onClick={() => navigate(next)}
        >
          {formatMessage(messages.next)}
        </button>
      </div>
    </div>
  );
}

function Text({placeholder}) {
  return (
    <input className="p-input d-block mt8 wmx6" placeholder={placeholder} />
  );
}

function Radio({options}) {
  return (
    <div className="p-label-container mt8">
      {options.map((option, i) => (
        <>
          <input key={i+1} id={`default-${i}`} className="p-radio" type="radio" />
          <label key={(i+1)*2} htmlFor={`default-${i}`} className="p-label">
            {option}
          </label>
        </>
      ))}
    </div>
  );
}
