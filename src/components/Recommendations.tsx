import { useEffect, useState } from "react";
import axios from 'axios';
import { defineMessages, useIntl } from "react-intl";

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

async function getToken(params, userId): Promise<string> {
  let response;
  try {
    response = await axios.post(
      "https://challenge-dot-popsure-204813.appspot.com/user",
      params
    );

    window.localStorage.setItem(`${userId}:token`, response.data.jwt);
  } catch (e) {
    debugger;
  }
  return response?.data?.jwt;
}

async function getRecommendations({token}): Promise<[]> {
    let response;
    try {
        response = await axios.get('https://challenge-dot-popsure-204813.appspot.com/recommendation ', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    } catch (e) {

    }
    return response.data;
};

export function Recommendations({userId}) {
    const [completedProfile, setCompletedProfile] = useState('no');
    const [token, setToken] = useState('');
    const [recommendations, setRecommendations] = useState([])
    const {formatMessage} = useIntl()

    useEffect(() => {
        setCompletedProfile(window.localStorage.getItem(`${userId}:completedProfile`));
    }, [userId]);



    useEffect(() => {
        setToken(window.localStorage.getItem(`${userId}:token`));
        async function getTokenCall(params, userId) {
            setToken(await getToken(params, userId));
        }

        async function getRecommendationsCall({ token }) {
          setRecommendations(await getRecommendations({ token }));
        }

        if(token) {
            getRecommendationsCall({token});
        }
        if(completedProfile === 'true'){
            const params = {
                firstName : window.localStorage.getItem(`${userId}:firstName`),
                address : window.localStorage.getItem(`${userId}:address`),
                occupation: window.localStorage.getItem(`${userId}:occupation`),
                numberOfChildren: Number(window.localStorage.getItem(`${userId}:howMany`)),
                email: window.localStorage.getItem(`${userId}:email`)
            };

            getTokenCall(params, userId);
        }
    }, [completedProfile, userId, token])

    return (
      <>
        {recommendations.length ? (
          <div className="home-container">
            <h1 className="p-h1">
              {formatMessage(messages.recommendationTitle)}
            </h1>
            <div>
              <h4 className="p-h4 mb24">
                {formatMessage(messages.recommendationSubTitle)}
              </h4>
              {recommendations.map((recommendation, i) => (
                <div key={i} className="recommendation mb24">
                  <h4 className="p-h4">{formatMessage(messages[recommendation.type])}</h4>
                  <div>
                    {` $ ${recommendation.price.amount} ${formatMessage(messages[recommendation.price.periodicity])}`}
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
