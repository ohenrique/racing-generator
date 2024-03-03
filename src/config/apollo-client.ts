import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "https://ba6gijdps7.execute-api.us-east-1.amazonaws.com/graphql",
    cache: new InMemoryCache(),
});

export default apolloClient;
