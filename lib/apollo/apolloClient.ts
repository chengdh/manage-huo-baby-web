import { HttpLink, NormalizedCacheObject, ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { NextPageContext } from "next";
import { useAuth } from "react-use-auth";
import { SubscriptionClient } from "subscriptions-transport-ws";

let accessToken: string | null = null;

const requestAccessToken = async () => {
    accessToken = 'public'
}
// remove cached token on 401 from the server
// const resetTokenLink = onError(({ networkError }) => {
//     if (networkError && networkError.name === 'ServerError' && networkError.statusCode === 401) {
//         accessToken = null
//     }
// })


const createHttpLink = (headers: object): HttpLink => {
    const httpLink = new HttpLink({
        uri: `http://${process.env.NEXT_PUBLIC_API_HOST}`,
        credentials: 'include',
        // headers,
        fetch,
    });
    return httpLink;
};

const createWSLink = (): WebSocketLink => {
    return new WebSocketLink(
        new SubscriptionClient(`ws://${process.env.NEXT_PUBLIC_API_HOST}`, {
            lazy: true,
            reconnect: true,
            // connectionParams: async () => {
            //     await requestAccessToken() // happens on the client
            //     return {
            //         headers: {
            //             authorization: accessToken ? `Bearer ${accessToken}` : '',
            //         },
            //     }
            // },
        }),
    );
};

export default function createApolloClient(initialState: NormalizedCacheObject, headers: object) {
    const ssrMode = typeof window === 'undefined';
    let link;
    if (ssrMode) {
        link = createHttpLink(headers);
    } else {
        link = createWSLink();
    }
    return new ApolloClient({
        ssrMode,
        link,
        cache: new InMemoryCache().restore(initialState),
    });
}