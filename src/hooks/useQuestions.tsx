import { useState } from 'react';
import {defineMessages, IntlShape} from 'react-intl';


interface Input {
  type: string;
  options?: string[];
  placeholder?: string;
  currentValue: string;
}
export interface Question {
  id: string;
  next?: string;
  previous?: string;
  question?: string;
  input?: Input;
  options?: string[]
  onChange?: (event:any) => void;
}

interface useQuestionsParams {
  intl: IntlShape
}

const messages = defineMessages({
  firstNameQuestion: {
    id: 'App.firstNameQuestion',
    defaultMessage: `What's your fist name?`
  },
  occupationQuestion: {
    id: 'App.occupation',
    defaultMessage: `What's your occupation?`
  },
  doYouHaveChildrenQuestion: {
    id: 'App.doYouHaveChildrenQuestion',
    defaultMessage: `Do you have children?`
  },
  howManyChildrenQuestion: {
    id: 'App.howManyChildrenQuestion',
    defaultMessage: `How many children do you have?`
  },
  emailQuestion: {
    id: 'App.emailQuestion',
    defaultMessage: `What's your email?`
  }
});

export function useQuestions({intl}: useQuestionsParams): Question[] {
  const {formatMessage} = intl;
  const [firstName, setFirstName] = useState('');
  const [occupation, setOccupation] = useState('Employed');
  const [children, setChildren] = useState('Yes')
  const [howMany, setHowMany] = useState('0');
  const [email, setEmail] = useState('')

  return [
    {
      id: "firstName",
      previous: "/",
      next: "occupation",
      input: {
        type: "text",
        placeholder: "Your name here",
        currentValue: firstName,
      },
      question: formatMessage(messages.firstNameQuestion),
      onChange: (event) => {
        setFirstName(event.target.value);
      },
    },
    {
      id: "occupation",
      previous: "firstName",
      next: "children",
      input: {
        type: "radio",
        options: ["Employed", "SelfEmployed", "Student"],
        currentValue: occupation,
      },
      question: formatMessage(messages.occupationQuestion),
      onChange: (event) => {
        setOccupation(event.target.value);
      },
    },
    {
      id: "children",
      previous: "occupation",
      next: children === "Yes" ? "howMany" : "emailAddress",
      input: {
        type: "radio",
        options: ["Yes", "No"],
        currentValue: children,
      },
      question: formatMessage(messages.doYouHaveChildrenQuestion),
      onChange: (event) => {
        setChildren(event.target.value);
      },
    },
    {
      id: "howMany",
      previous: "children",
      next: "emailAddress",
      input: {
        type: "text",
        placeholder: "1",
        currentValue: howMany,
      },
      question: formatMessage(messages.howManyChildrenQuestion),
      onChange: (event) => {
        setHowMany(event.target.value);
      },
    },
    {
      id: "emailAddress",
      previous: children === "Yes" ? "howMany" : "children",
      next: "save",
      input: {
        type: "text",
        placeholder: "jorge.parga@pluma.com",
        currentValue: email,
      },
      question: formatMessage(messages.emailQuestion),
      onChange: (event) => {
        setEmail(event.target.value);
      },
    },
  ];
}
