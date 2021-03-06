import { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import styles from './home.module.scss';

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

/**
 *
 * @param {Object} params
 * @param {React.Dispatch<React.SetStateAction<string>>} params.setUserId react state setter for the user id
 * @param {String} params.userId value used by the user to login
 * @returns ReactElement
 */
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
    <div className={styles.container}>
      <h1 className={`p-h1 ${styles.title}`}>{formatMessage(messages.signIn)}</h1>
      <div>
        <label className="p-h4" htmlFor="email">
          {formatMessage(messages.signInEmail)}
        </label>
        <input
          id="user-id"
          className="p-input d-block mt8 wmx6"
          data-cy="input"
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
