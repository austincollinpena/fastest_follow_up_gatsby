// const React = require('react')
// const { ApolloClient } = require('apollo-client')
// const { HttpLink } = require('apollo-link-http')
// const { InMemoryCache } = require('apollo-cache-inmemory')
// const {ApolloProvider} = require('@apollo/react-hooks')
// require('./src/components/internals/normalize.css')
//
// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: "https://backend.fastestfollowup.com/graphql"
// });
//
// const client = new ApolloClient({
//   cache,
//   link
// });
//
// exports.wrapRootElement = ({element}) => {
//   return(
//     <ApolloProvider client={client}>
//       {element}
//     </ApolloProvider>
//   )
// }
//

import React from "react"
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import 'normalize.css';


export const replaceRouterComponent = ({ history }) => {
  const client = new ApolloClient({
    fetch
  });

  const ConnectedRouterWrapper = ({ children }) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
  );

  return ConnectedRouterWrapper;
};

