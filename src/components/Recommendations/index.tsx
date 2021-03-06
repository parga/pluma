import { defineMessages, useIntl } from "react-intl";
import styles from './recommendations.module.scss';
import { useRecommendations } from "../../hooks/useRecommendations";

const messages = defineMessages({
  recommendationTitle: {
    id: "Recommendations.recommendationTitle",
    defaultMessage: "We got your recommendations",
  },
  recommendationSubTitle: {
    id: "Recommendations.recommendationSubTitle",
    defaultMessage:
      "Based on your answers, this is what make sense for you and what you should pay",
  },
  HEALTH_INSURANCE: {
    id: "Recommendations.healthInsurance",
    defaultMessage: "Health Insurance",
  },
  HOME_CONTENT: {
    id: "Recommendations.homeContent",
    defaultMessage: "Home Content",
  },
  PRIVATE_LIABILITY: {
    id: "Recommendations.PRIVATE_LIABILITY",
    defaultMessage: "Private Liability",
  },
  MONTH: {
    id: "Recommendations.MONTH",
    defaultMessage: " per month",
  },
  YEAR: {
    id: "Recommendations.YEAR",
    defaultMessage: "per year",
  },
});

export function Recommendations({userId}) {
    const recommendations = useRecommendations({userId})
    const {formatMessage} = useIntl()

    return (
      <>
        {recommendations.length ? (
          <div className="home-container ml8 mr8">
            <h1 className="p-h1">
              {formatMessage(messages.recommendationTitle)}
            </h1>
            <div>
              <h4 className="p-h4 mb24">
                {formatMessage(messages.recommendationSubTitle)}
              </h4>
              {recommendations.map((recommendation, i) => (
                <div key={i} className={`${styles.recommendation} mb24`}>
                  <h4 className="p-h4">
                    {formatMessage(messages[recommendation.type])}
                  </h4>
                  <div>
                    {` $ ${recommendation.price.amount} ${formatMessage(
                      messages[recommendation.price.periodicity]
                    )}`}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="ds-spinner ds-spinner__l" />
        )}
      </>
    );
}
