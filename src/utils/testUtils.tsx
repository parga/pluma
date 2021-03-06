import { IntlProvider } from "react-intl"
import { default as englishDictionary } from "../__locales__/en.json";


export const withIntl = (component) => {
    return (
      <IntlProvider locale={"en-US"} messages={englishDictionary}>
        {component}
      </IntlProvider>
    );
}
