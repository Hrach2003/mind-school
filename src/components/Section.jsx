import React from "react";
import { Container } from "../atom/Container";
import Slack from "../assets/slack.svg";

export const Section = React.memo(
  ({ classes, heading, children, ...props }) => {
    return (
      <section className={`mt-8 md:mt-4 ${classes}`} {...props}>
        <div className="flex relative items-center">
          <div className="absolute ml-2 md:ml-4 ">
            <img src={Slack} className="w-8" alt="slack" />
          </div>
          <Container>{heading}</Container>
        </div>
        {children && <Container classes="mt-4">{children}</Container>}
      </section>
    );
  }
);
