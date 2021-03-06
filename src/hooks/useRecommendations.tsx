import { useEffect, useState } from "react";
import axios from "axios";


export function useRecommendations({userId}): any[] {
    const [token, setToken] = useState("");
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
      setToken(window.localStorage.getItem(`${userId}:token`));
      const completedProfile = window.localStorage.getItem(
        `${userId}:completedProfile`
      );
      async function getTokenCall(params, userId) {
        setToken(await getToken(params, userId));
      }

      async function getRecommendationsCall({ token }) {
        setRecommendations(await getRecommendations({ token }));
      }

      if (token) {
        getRecommendationsCall({ token });
      }
      if (completedProfile === "true" && !token) {
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
    }, [userId, token]);

    return recommendations;
}

async function getToken(params, userId): Promise<string> {
  let response;
  try {
    response = await axios.post(
      "https://challenge-dot-popsure-204813.appspot.com/user",
      params
    );

    window.localStorage.setItem(`${userId}:token`, response.data.jwt);
  } catch (e) {
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
