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

  const inputField =
    question.input.type !== "radio" ? (
      <Text
        placeholder={question.input.placeholder}
        onChange={question.onChange}
        currentValue={question.input.currentValue}
        type={question.input.type}
      />
    ) : (
      <Radio
        options={question.input.options}
        onChange={question.onChange}
        currentValue={question.input.currentValue}
      />
    );

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
          onClick={() => {
            question.onNext()
            navigate(next)
          }}
          disabled={!question.input.currentValue}
        >
          {formatMessage(messages.next)}
        </button>
      </div>
    </div>
  );
}

function Text({placeholder, onChange, currentValue, type}) {
  const emailType = type === 'email' ? 'email' : ''
  return (
    <input
      className="p-input d-block mt8 wmx6"
      placeholder={placeholder}
      onChange={onChange}
      value={currentValue}
      type={emailType}
    />
  );
}

function Radio({options, onChange, currentValue}) {
  return (
    <div className="p-label-container mt8">
      {options.map((option, i) => (
        <div key={i}>
          <input
            id={`default-${i}`}
            className="p-radio"
            type="radio"
            value={option.value}
            onChange={onChange}
            checked={currentValue === option.value}
          />
          <label htmlFor={`default-${i}`} className="p-label">
            {option.label}
          </label>
        </div >
      ))}
    </div>
  );
}