import {defineMessages, IntlShape} from 'react-intl';


interface Input {
  type: string;
  options?: string[];
  placeholder?: string;
}
export interface Question {
  id: string;
  next?: string;
  previous?: string;
  question?: string;
  input?: Input;
  options?: string[]
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
  return [
    {
      id: "firstName",
      previous: "/",
      next: "occupation",
      input: {
        type: "text",
        placeholder: "Your name here",
      },
      question: formatMessage(messages.firstNameQuestion),
    },
    {
      id: "occupation",
      previous: "firstName",
      next: "children",
      input: {
        type: "radio",
        options: ["Employed", "SelfEmployed", "Student"],
      },
      question: formatMessage(messages.occupationQuestion),
    },
    {
      id: "children",
      previous: "occupation",
      next: "howMany",
      input: {
        type: "radio",
        options: ["Yes", "No"],
      },
      question: formatMessage(messages.doYouHaveChildrenQuestion),
    },
    {
      id: "howMany",
      previous: "children",
      next: "emailAddress",
      input: {
        type: "text",
        placeholder: "1",
      },
      question: formatMessage(messages.howManyChildrenQuestion),
    },
    {
      id: "emailAddress",
      previous: "howMany",
      next: "save",
      input: {
        type: "text",
        placeholder: "jorge.parga@pluma.com",
      },
      question: formatMessage(messages.emailQuestion),
    },
  ];
}
