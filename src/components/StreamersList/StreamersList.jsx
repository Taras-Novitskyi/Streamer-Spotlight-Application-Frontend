import React, { useEffect, useState } from "react";

import { List, Item } from "./StreamersList.styled";

export const StreamersList = ({ streamers }) => {
  return (
    <div>
      <List>
        {streamers.map((item, i) => {
          return (
            <Item
              key={i}
              //   style={{
              //     textAlign: item.received ? "left" : "right",
              //   }}
            >
              {item.name}, {item.platform}, {item.description},{item.upvotes},
              {item.downvotes}
            </Item>
          );
        })}
      </List>
    </div>
  );
};
