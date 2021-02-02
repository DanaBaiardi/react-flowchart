import React, { useState } from "react";
import styled from "styled-components";
import Pdf from "react-to-pdf";

import FCTag from "../items/FCTag";
import LeftMenu from "./LeftMenu";
import ALUnion from "../unions/ALUnion";

const FCBodyS = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 40px);
  background-color: #fafafa;
`;

const Content = styled.div`

  height: 100%;
  width: 100%;
`;

const TBBody = styled.div`
  height: 40px;
  background-color: #fff;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const Span = styled.span`
  margin-right: 8px;
  background-color: #ededed;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 8px;
`;

const TitleInput = styled.input`
  height: 70%;
  width: 500px;
  margin-left: 52px;
  font-size: 16px;
`;

const FCBody = () => {
  const ref = React.createRef();

  const [renderTags, setrenderTags] = useState([
    {
      id: 0,
      tagName: "Inicio",
      connectedTo: [],
    },
    {
      id: 1,
      tagName: "Fin",
      connectedTo: [],
    },
  ]);

  return (
    <>
      {/* <TBBody>
        <Span>+ Add</Span>
        <Pdf targetRef={ref} filename="flowchart.pdf">
          {({ toPdf }) => <Span onClick={toPdf}>Generate Pdf</Span>}
        </Pdf>
        <TitleInput placeholder={"Ingrese el título del diagrama de flujo"} />
      </TBBody> */}
      <FCBodyS>
        {/* <LeftMenu></LeftMenu> */}
        <Content ref={ref}>
          {renderTags.map((item) => (
            <FCTag key={item.id} tagName={item.tagName} />
          ))}
        </Content>
      </FCBodyS>
    </>
  );
};

export default FCBody;
