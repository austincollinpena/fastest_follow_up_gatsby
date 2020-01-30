// const React = require('react')
// const { ApolloClient } = require('apollo-client')
// const { HttpLink } = require('apollo-link-http')
// const { InMemoryCache } = require('apollo-cache-inmemory')
// const ApolloProvider = require('@apollo/react-hooks')
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