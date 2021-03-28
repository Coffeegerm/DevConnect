import styled from "styled-components";
import { useTrunks } from "hooks/useTrunks";
import { useState } from "react";

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
`;

const Code = styled.p`
  padding: 1rem;
  border: solid black 1px;
  border-radius: 1rem;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

export const Trunks = () => {
  const [{ data }] = useState(useTrunks());

  return (
    <List>
      <h1>Trunks</h1>
      {data &&
        data.data.map((val) => (
          <div>
            <p>{val.text}</p>
            <Code>{val.code}</Code>
          </div>
        ))}
    </List>
  );
};
