import {defineMessages, IntlShape} from 'react-intl';
import { useLocalStorage } from './useLocalStorage';


interface Input {
  type: string;
  options?: { label: string; value: string }[];
  placeholder?: string;
  currentValue: string;
}
export interface Question {
  id: string;
  next?: string;
  previous?: string;
  question?: string;
  input?: Input;
  onChange?: (event:any) => void;
}

interface useQuestionsParams {
  intl: IntlShape,
  userId: string;
}

const messages = defineMessages({
  firstNameQuestion: {
    id: "App.firstNameQuestion",
    defaultMessage: `What's your fist name?`,
  },
  firstNamePlaceholder: {
    id: "App.firstNamePlaceholder",
    defaultMessage: `Your name here`,
  },
  occupationQuestion: {
    id: "App.occupation",
    defaultMessage: `What's your occupation?`,
  },
  occupationEmployed: {
    id: "App.occupationEmployed",
    defaultMessage: `Employed`,
  },
  occupationSelfEmployed: {
    id: "App.occupationSelfEmployed",
    defaultMessage: `SelfEmployed`,
  },
  occupationStudent: {
    id: "App.occupationStudent",
    defaultMessage: `Student`,
  },
  doYouHaveChildrenQuestion: {
    id: "App.doYouHaveChildrenQuestion",
    defaultMessage: `Do you have children?`,
  },
  childrenYes: {
    id: "App.childrenYes",
    defaultMessage: `Yes`,
  },
  childrenNo: {
    id: "App.childrenNo",
    defaultMessage: `No`,
  },

  howManyChildrenQuestion: {
    id: "App.howManyChildrenQuestion",
    defaultMessage: `How many children do you have?`,
  },
  emailQuestion: {
    id: "App.emailQuestion",
    defaultMessage: `What's your email?`,
  },
});

export function useQuestions({intl, userId}: useQuestionsParams): Question[] {
  const {formatMessage} = intl;
  const [firstName, setFirstName] = useLocalStorage(`${userId}:name`, '');
  const [occupation, setOccupation] = useLocalStorage(
    `${userId}:occupation`,
    "EMPLOYED"
  );
  const [children, setChildren] = useLocalStorage(`${userId}:children`, "yes");
  const [howMany, setHowMany] = useLocalStorage(`${userId}:howMany`, "0");
  const [email, setEmail] = useLocalStorage(`${userId}:email`, "");

  return [
    {
      id: "firstName",
      previous: "/",
      next: "occupation",
      input: {
        type: "text",
        placeholder: formatMessage(messages.firstNamePlaceholder),
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
        options: [
          {
            label: formatMessage(messages.occupationEmployed),
            value: "EMPLOYED",
          },
          {
            label: formatMessage(messages.occupationSelfEmployed),
            value: "SELF_EMPLOYED",
          },
          {
            label: formatMessage(messages.occupationStudent),
            value: "STUDENT",
          },
        ],
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
      next: children === "yes" ? "howMany" : "emailAddress",
      input: {
        type: "radio",
        options: [
          {
            label: formatMessage(messages.childrenYes),
            value: "yes",
          },
          {
            label: formatMessage(messages.childrenNo),
            value: "no",
          },
        ],
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
