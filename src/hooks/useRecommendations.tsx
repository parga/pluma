import { useEffect, useState } from "react";
import axios from "axios";


export function useRecommendations({userId}): any[] {
    const [token, setToken] = useState("");
    const [errors, setErrors] = useState({});
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
      let token = window.localStorage.getItem(`${userId}:token`);
      const completedProfile = window.localStorage.getItem(
        `${userId}:completedProfile`
      );
      async function getTokenCall(params, userId) {
        const response = await getToken(params, userId);
        if(response.errors) {
          setErrors(response.errors);
          return;
        }

        setRecommendations(
          await getRecommendationsCall({token: response.data.jwt})
        );
      }

      async function getRecommendationsCall({ token }) {
        return await getRecommendations({ token });
      }

      if (completedProfile === "true" && token === null) {
        const params = {
          firstName: window.localStorage.getItem(`${userId}:firstName`),
          address: window.localStorage.getItem(`${userId}:address`),
          occupation: window.localStorage.getItem(`${userId}:occupation`),
          numberOfChildren: Number(
            window.localStorage.getItem(`${userId}:howMany`)
          ),
          email: window.localStorage.getItem(`${userId}:email`),
        };
        getTokenCall(params, userId);
      }
    }, [userId]);

    return [recommendations, errors];
}

async function getToken(params, userId): Promise<{errors: {}, data: {jwt: string}}> {
  let response = {
    errors: null,
    data: {
      jwt: ''
    }
  };
  try {
    response = await axios.post(
      "https://challenge-dot-popsure-204813.appspot.com/user",
      params
    );

    window.localStorage.setItem(`${userId}:token`, response.data.jwt);
  } catch (e) {
    response.errors = e.response.data.errors;
  }
  return response;
}

async function getRecommendations({token}): Promise<any[]> {
    let response = {data: []};
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
