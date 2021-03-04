import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
    language: {
        id: 'Header.language',
        defaultMessage: 'Language:'
    },
    spanish: {
        id: 'Header.spanish',
        defaultMessage: 'Spanish'
    },
    english: {
        id: 'Header.english',
        defaultMessage: 'English'
    }
})

interface HeaderProps {
  setLocale: React.Dispatch<React.SetStateAction<string>>
  locale: string;
}

export function Header ({setLocale, locale}: HeaderProps) {
    const {formatMessage} = useIntl();
    const handleOnChange = (event) => {
        setLocale(event.target.value);
    }
    return (
        <header className="App-header">
        <label htmlFor="cars">{formatMessage(messages.language)}</label>
        <select className="p-select" id="cars" onChange={handleOnChange} value={locale}>
            <option value="es">{formatMessage(messages.spanish)}</option>
            <option value="en">{formatMessage(messages.english)}</option>
        </select>
        </header>
    );
}

