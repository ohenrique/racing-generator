import { gql } from "@apollo/client";
import { Racer } from "../types/racer";

export type RacersQueryResponse = {
  racers?: Racer[];
};

export const QUERY_RACERS = gql`
  query Racers {
    racers {
      name
      color
      weight
      length
    }
  }
`;
