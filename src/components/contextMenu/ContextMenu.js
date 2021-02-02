import React from "react";
import styled from "styled-components";

const ContextMenuS = styled.div`
position: absolute;
  display: ${(props) => props.display};
`;

const ContextMenu = ({ display }) => {
  return (
    <ContextMenuS display={display}>
      <ul>
        <li>CONECTAR</li>
      </ul>
    </ContextMenuS>
  );
};

export default ContextMenu;
