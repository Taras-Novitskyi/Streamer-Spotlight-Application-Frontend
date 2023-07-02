import React from "react";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

import {
  List,
  Item,
  ItemLink,
  DataName,
  Votes,
  VotesItem,
  VotesCount,
  UpvotesIcon,
  DownvotesIcon,
} from "./StreamersList.styled";

export const StreamersList = ({ streamers }) => {
  return (
    <List>
      {streamers &&
        streamers.map((item) => {
          return (
            <Item key={item._id}>
              <ItemLink to={`/streamer/${item._id}`}>
                <DataName>{item.name}</DataName>
                <Votes>
                  <VotesItem>
                    <VotesCount>{item.upvotes.length}</VotesCount>
                    <UpvotesIcon>
                      <ImArrowUp />
                    </UpvotesIcon>
                  </VotesItem>
                  <VotesItem>
                    <VotesCount>{item.downvotes.length}</VotesCount>
                    <DownvotesIcon>
                      <ImArrowDown />
                    </DownvotesIcon>
                  </VotesItem>
                </Votes>
              </ItemLink>
            </Item>
          );
        })}
    </List>
  );
};
