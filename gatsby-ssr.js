//// One of the only relevant github threads https://github.com/gatsbyjs/gatsby/issues/3650#issuecomment-410146046



// import React from 'react';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
// import { renderToString } from 'react-dom/server';
// import fetch from 'isomorphic-fetch';
//
// // gatsby-ssr is required for build regardless if you plan to support SSR
// export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
//   const client = new ApolloClient({
//     uri: "https://backend.fastestfollowup.com/graphql/",
//     fetch
//   });
//
//   const ConnectedBody = () => (
//     <ApolloProvider client={client}>
//         {bodyComponent}
//     </ApolloProvider>
//   );
//
//   replaceBodyHTMLString(renderToString(<ConnectedBody />));
// };