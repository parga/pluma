import React, { ReactElement } from "react";
import styles from "./header.module.scss";
import { defineMessages, useIntl } from "react-intl";

const messages = defineMessages({
  language: {
    id: "Header.language",
    defaultMessage: "Language:",
  },
  spanish: {
    id: "Header.spanish",
    defaultMessage: "Spanish",
  },
  english: {
    id: "Header.english",
    defaultMessage: "English",
  },
});

/**
 * HeaderProps
 * @memberof Header
 * @alias HeaderProps
 */
export interface HeaderProps {
  setLocale: React.Dispatch<React.SetStateAction<string>>;
  locale: string;
}
/**
 *
 * @param {Object} params
 * @param {React.Dispatch<React.SetStateAction<string>>} params.setLocale setter for the locale
 * @param {String} params.locale value of the current locale
 * @returns ReactElement
 */
export function Header({ setLocale, locale }: HeaderProps): ReactElement {
  const { formatMessage } = useIntl();
  const handleOnChange = (event) => {
    setLocale(event.target.value);
  };
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <a className={styles.logo} href="/pluma">
          <img
            src="https://feather-insurance.com/_next/static/media/logo.0d69221106425e5288907e514db23d99.svg"
            aria-label="Home"
          />
          <div className={styles.name}>
            <h1 className="p-h1">Pluma</h1>
          </div>
        </a>
        <div >
          <label htmlFor="language-selector">
            {formatMessage(messages.language)}
          </label>
          <select
            className="p-select"
            id="language-selector"
            onChange={handleOnChange}
            value={locale}
          >
            <option value="es">{formatMessage(messages.spanish)}</option>
            <option value="en">{formatMessage(messages.english)}</option>
          </select>
        </div>
      </div>
    </header>
  );
}
