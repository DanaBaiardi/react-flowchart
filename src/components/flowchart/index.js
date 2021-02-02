import React from "react"
import styled from "styled-components"
import FCBody from './FCBody'

const FlowChartMaster = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;
const Flowchart = () => {
  return (
    <FlowChartMaster>
      <FCBody />
    </FlowChartMaster>
  );
};

export default Flowchart;
