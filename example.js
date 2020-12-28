import React from "react";
import { MDBTooltip, MDBContainer, MDBBtn } from "mdbreact";

const TooltipsPage = () => {
  const style = { display: "inline-block", maxWidth: "50vh" };
  return (
    <MDBContainer className="text-center p-5">
      <MDBTooltip material placement="top">
        <MDBBtn color="secondary">Top tooltip</MDBBtn>
        <div>MDBTooltip on top</div>
      </MDBTooltip>

      <div>
        <div style={style} className="text-right">
          <MDBTooltip material placement="left">
            <MDBBtn color="secondary">Left tooltip</MDBBtn>
            <div>MDBTooltip on left</div>
          </MDBTooltip>
        </div>

        <div style={style} className="text-left">
         <MDBTooltip material placement="right">
            <MDBBtn color="secondary">Right tooltip</MDBBtn>
            <div>MDBTooltip on right</div>
          </MDBTooltip>
        </div>
      </div>

      <MDBTooltip material placement="bottom">
        <MDBBtn color="secondary">Bottom tooltip</MDBBtn>
        <div>MDBTooltip on bottom</div>
      </MDBTooltip>
    </MDBContainer>
  );
};

export default TooltipsPage;