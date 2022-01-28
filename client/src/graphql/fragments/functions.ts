import { gql } from "@apollo/client";

export const AG = gql`
      query {
              nistfunctions {
                functionname
                functioncode
              }
            }
    `;
