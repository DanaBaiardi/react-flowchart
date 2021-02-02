import React, { useRef, useState } from "react";
import styled from "styled-components";
import useDraggable from "../../hooks/useDraggable";

const SelectingPoint = styled.div`
  cursor: pointer;
  display: ${(props) => (props.selected ? "block" : "none")};
  height: 4px;
  width: 4px;
  background: #1365e0;
  border-radius: 16px;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  right: ${(props) => props.right};
`;

const FCTagS = styled.div`
  position: absolute;
  cursor: move;
  top: "52px";
  left: "16px";
  width: 184px;
  height: 42px;
  background: #454449;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 4px solid transparent;
  box-sizing: border-box;
`;

const FCTag = ({ tagName }) => {
const [positionBottomSP, setPositionBottomSP] = useState('')



  const [selected, setselected] = useState(false);
  const [toConnect, settoConnect] = useState({
    inAction: false,
    idStart: "",
    start: false,
    coorStart: {
      X: 0,
      Y: 0,
    },
    moving: false,
    coorMoving: {
      X: 0,
      Y: 0,
    },
    end: false,
    coorEnd: {
      X: 0,
      Y: 0,
    },
    idEnd: "",
    conectedWith: {},
  });
  const tagRef = useRef(null);
  useDraggable(tagRef);

  const onTagClickHandler = () => {
    setselected(true);
    // The following code identifies the selected points positions
    //1. Gets the DOM element
    let topSP = document.getElementById("topSP");
    let rightSP = document.getElementById("rightSP");
    let leftSP = document.getElementById("leftSP");
    let bottomSP = document.getElementById("bottomSP");

    //1. Gets the DOM element's position
    let positionTopSP = topSP.getBoundingClientRect();
    let positionRightSP = rightSP.getBoundingClientRect();
    let positionLeftSP = leftSP.getBoundingClientRect();
    // let positionBottomSP = bottomSP.getBoundingClientRect();

    setPositionBottomSP(bottomSP.getBoundingClientRect())

    // console.log("THE ELEMENT POSITION IS-->");
    // console.log("TOP-->", positionTopSP);
    // console.log("RIGHT-->", positionRightSP);
    // console.log("LEFT-->", positionLeftSP);
    console.log("BOTTOM-->", positionBottomSP);
  };

  const onTopClick = () => {
    if (!toConnect.inAction) {
      startOut();
    }
  };

  const startOut = () => {
    // The following code identifies the selected points positions
    //1. Gets the DOM element
    let topSP = document.getElementById("topSP");

    //1. Gets the DOM element's position
    let positionTopSP = topSP.getBoundingClientRect();

    settoConnect({
      inAction: !toConnect.inAction,
      idStart: topSP.id,
      start: true,
      coorStart: {
        X: positionTopSP.x,
        Y: positionTopSP.y,
      },
      moving: true,
      coorMoving: {
        X: 0,
        Y: 0,
      },
    });
  };

  const onRightClick = () => {};
  const onLeftClick = () => {};
  const onBottomClick = () => {};

  return (
    <>
      <FCTagS ref={tagRef} onClick={onTagClickHandler}>
        <SelectingPoint
          top={"-5px"}
          selected={selected}
          onClick={onTopClick}
          id={"topSP"}
        />
        <SelectingPoint
          right={"-5px"}
          selected={selected}
          onClick={onRightClick}
          id={"rightSP"}
        />
        <SelectingPoint
          left={"-5px"}
          selected={selected}
          onClick={onLeftClick}
          id={"leftSP"}
        />
        <SelectingPoint
          bottom={"-5px"}
          selected={selected}
          onClick={onBottomClick}
          id={"bottomSP"}
        />
        {tagName}
      </FCTagS>
      <svg width="100%" height="100%" stroke="blue" strokeWidth="1">

        <line x1={positionBottomSP.x} y1={positionBottomSP.y} x2="300" y2="300"></line>

      </svg>
    </>
  );
};

export default FCTag;
