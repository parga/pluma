import { useEffect, useState } from "react";
import { defineMessages, IntlShape } from "react-intl";

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
  onChange?: (event: any) => void;
  onNext?: () => void;
  validation?: () => boolean;
}

interface useQuestionsParams {
  intl: IntlShape;
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
  addressQuestion: {
    id: "App.addressQuestion",
    defaultMessage: `What's your address?`,
  },
  addressPlaceholder: {
    id: "App.addressPlaceholder",
    defaultMessage: `Your address here`,
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


const isEmail = (value) =>
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    value
  );

export function useQuestions({ intl, userId }: useQuestionsParams): Question[] {
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [children, setChildren] = useState("");
  const [howMany, setHowMany] = useState("");
  const [email, setEmail] = useState("");
  const { formatMessage } = intl;

  useEffect(() => {
    setFirstName(window.localStorage.getItem(`${userId}:firstName`) || "");
    setAddress(window.localStorage.getItem(`${userId}:address`) || "");
    setOccupation(
      window.localStorage.getItem(`${userId}:occupation`) || ""
    );
    setChildren(window.localStorage.getItem(`${userId}:children`) || "");
    setHowMany(window.localStorage.getItem(`${userId}:howMany`) || "");
    setEmail(window.localStorage.getItem(`${userId}:email`) || "");
  }, [userId]);

  return [
    {
      id: "firstName",
      previous: "/",
      next: "address",
      input: {
        type: "text",
        placeholder: formatMessage(messages.firstNamePlaceholder),
        currentValue: firstName,
      },
      question: formatMessage(messages.firstNameQuestion),
      onChange: (event) => setFirstName(event.target.value),
      onNext: () =>
        window.localStorage.setItem(`${userId}:firstName`, firstName),
      validation: () => !firstName,
    },
    {
      id: "address",
      previous: "/",
      next: "occupation",
      input: {
        type: "text",
        placeholder: formatMessage(messages.addressPlaceholder),
        currentValue: address,
      },
      question: formatMessage(messages.addressQuestion),
      onChange: (event) => setAddress(event.target.value),
      onNext: () => window.localStorage.setItem(`${userId}:address`, address),
      validation: () => !address,
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
      onChange: (event) => setOccupation(event.target.value),
      onNext: () =>
        window.localStorage.setItem(`${userId}:occupation`, occupation),
      validation: () => !occupation,
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
      onChange: (event) => setChildren(event.target.value),
      onNext: () => window.localStorage.setItem(`${userId}:children`, children),
      validation: () => !children,
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
      onChange: (event) => setHowMany(event.target.value),
      onNext: () => window.localStorage.setItem(`${userId}:howMany`, howMany),
      validation: () => !howMany,
    },
    {
      id: "emailAddress",
      previous: children === "Yes" ? "howMany" : "children",
      next: "recommendations",
      input: {
        type: "email",
        placeholder: "jorge.parga@pluma.com",
        currentValue: email,
      },
      question: formatMessage(messages.emailQuestion),
      onChange: (event) => setEmail(event.target.value),
      onNext: () => {
        window.localStorage.setItem(`${userId}:email`, email);
        window.localStorage.setItem(`${userId}:completedProfile`, "true");
      },
      validation: () => !email || !isEmail(email),
    },
  ];
}
