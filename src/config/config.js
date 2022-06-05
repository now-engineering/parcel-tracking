import { setContext } from "@apollo/client/link/context";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists

  let user;

  if (typeof window !== "undefined") {
    user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : { sessionToken: null };
  }

  const token = user?.sessionToken;

  if (token) {
    return {
      headers: {
        ...headers,
        "X-Parse-Application-Id": process.env.PARSE_APP_ID || "parcel",
        // 'X-Parse-Session-Token': token,
      },
    };
  }

  return {
    headers: {
      ...headers,
      //   "X-Parse-Application-Id": process.env.PARSE_APP_ID || "motivated",
      "X-Parse-Application-Id": "motivated",
      "x-parse-session-token": "r:6f2b9123e846353a5c2b2eea7faf1c98",
    },
  };
});

const httpLink = createHttpLink({
  uri: "https://api.now.com.bd/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
