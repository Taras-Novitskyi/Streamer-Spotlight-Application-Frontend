import React, { useEffect, useState } from "react";
import { ImArrowDown, ImArrowUp } from "react-icons/im";

import {
  List,
  Item,
  ItemLink,
  Votes,
  VotesItem,
  VotesCount,
  UpvotesIcon,
  DownvotesIcon,
} from "./StreamersList.styled";

export const StreamersList = ({ streamers }) => {
  return (
    <div>
      <List>
        {streamers.map((item) => {
          return (
            <Item
              key={item._id}
              //   style={{
              //     textAlign: item.received ? "left" : "right",
              //   }}
            >
              <ItemLink to={`/streamer/${item._id}`}>{item.name}</ItemLink>
              <Votes>
                <VotesItem>
                  <VotesCount>{item.upvotes}</VotesCount>
                  <UpvotesIcon>
                    <ImArrowUp />
                  </UpvotesIcon>
                </VotesItem>
                <VotesItem>
                  <VotesCount>{item.downvotes}</VotesCount>
                  <DownvotesIcon>
                    <ImArrowDown />
                  </DownvotesIcon>
                </VotesItem>
              </Votes>
            </Item>
          );
        })}
      </List>
    </div>
  );
};
