import { ReactElement } from "react";
import { defineMessages, useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { Question as QuestionType } from "../../hooks/useQuestions";
import styles from './question.module.scss';

interface QuestionParams {
  question: QuestionType;
}

const messages = defineMessages({
  previous: {
    id: "Question.previous",
    defaultMessage: "< Previous",
  },
  next: {
    id: "Question.next",
    defaultMessage: "Next >",
  },
});

export function Question({ question }: QuestionParams): ReactElement {
  const { previous, next, question: label } = question;
  const { formatMessage } = useIntl();
  const history = useHistory();
  const navigate = (url) => history.push(url);

  const inputField =
    question.input.type !== "radio" ? (
      <Text
        placeholder={question.input.placeholder}
        onChange={question.onChange}
        currentValue={question.input.currentValue}
        type={question.input.type}
        label={label}
      />
    ) : (
      <Radio
        options={question.input.options}
        onChange={question.onChange}
        currentValue={question.input.currentValue}
        label={label}
      />
    );

  return (
    <div className={styles.question}>
      {inputField}
      <div className={styles.buttons}>
        <button
          className="p-btn p-btn--primary mt16 ws2"
          onClick={() => navigate(previous)}
        >
          {formatMessage(messages.previous)}
        </button>
        <button
          className="p-btn--primary mt16 ws2"
          onClick={() => {
            question.onNext();
            navigate(next);
          }}
          disabled={question.validation()}
        >
          {formatMessage(messages.next)}
        </button>
      </div>
    </div>
  );
}

const isEmail = (value) =>
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  );

function Text({ placeholder, onChange, currentValue, type, label }) {
  const getErrorClass = (currentValue) => {
    return isEmail(currentValue) ? "p-input" : "p-input--error";
  };

  let generatedProps = {
    className: `p-input d-block mt8 wmx6`,
    type: "",
  };

  if (type === "email") {
    generatedProps = {
      type: "email",
      className: `d-block mt8 wmx6 ${getErrorClass(currentValue)}`,
    };
  }

  return (
    <>
      <label className="p-h4" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        placeholder={placeholder}
        onChange={onChange}
        value={currentValue}
        {...generatedProps}
      />
    </>
  );
}

function Radio({ options, onChange, currentValue, label }) {
  return (
    <>
      <label className="p-h4">{label}</label>
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
          </div>
        ))}
      </div>
    </>
  );
}
