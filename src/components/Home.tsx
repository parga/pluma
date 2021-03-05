import { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';

const messages = defineMessages({
  signIn: {
    id: 'Home.signIn',
    defaultMessage: 'Sign In',
  },
  signInEmail: {
    id: 'Home.signInEmail',
    defaultMessage: 'What is your sign-in email address?',
  },
  emailPlaceholder: {
    id: 'Home.emailPlaceholder',
    defaultMessage: 'Your email address'
  },
  continue: {
    id: 'Home.continue',
    defaultMessage: 'Continue',
  },
});

export function Home ({userId, setUserId}) {
  const {formatMessage } = useIntl();
  const history = useHistory();
  const navigate = (url) => history.push(url);
  const [url, setUrl] = useState("/firstName");

  useEffect(() => {
    const token = window.localStorage.getItem(`${userId}:token`)
    if(token) {
      setUrl('/recommendations')
    }
  }, [userId]);

  return (
    <div className="home-container">
      <h1 className="p-h1">{formatMessage(messages.signIn)}</h1>
      <div>
        <h4 className="p-h4">{formatMessage(messages.signInEmail)}</h4>
        <input
          id="email"
          className="p-input d-block mt8 wmx6"
          type="email"
          placeholder={formatMessage(messages.emailPlaceholder)}
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
        />
        <button
          className="p-btn p-btn--primary wmn3 mt16"
          onClick={() => navigate(url)}
          disabled={!userId}
        >
          {formatMessage(messages.continue)}
        </button>
      </div>
    </div>
  );
}
