import {defineMessages, IntlShape} from 'react-intl';

export interface Question {
  id: string;
  next?: string;
  previous?: string;
  question?: string;
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
  return  [
    {
      id: 'firstName',
      previous: '/',
      next: 'occupation',
      question: formatMessage(messages.firstNameQuestion)
    },
    {
      id: 'occupation',
      previous: 'firstName',
      next: 'children',
      question: formatMessage(messages.occupationQuestion)
    },
    {
      id: 'children',
      previous: 'occupation',
      next: 'howMany',
      question: formatMessage(messages.doYouHaveChildrenQuestion)
    },
    {
      id: 'howMany',
      previous: 'children',
      next: 'emailAddress',
      question: formatMessage(messages.howManyChildrenQuestion)
    },
    {
      id: 'emailAddress',
      previous: 'howMany',
      next: 'save',
      question: formatMessage(messages.emailQuestion)
    }
  ];
}
