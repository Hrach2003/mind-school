import React from "react";
import { Container } from "../atom/Container";

export const Section = React.memo(
  ({ classes, heading, children, ...props }) => {
    return (
      <section className={`mt-8 md:mt-4 ${classes}`} {...props}>
        <div className="flex relative items-center">
          <div className="absolute ml-2 md:ml-4 ">
            <i className="fas fa-angle-double-right text-3xl text-red-600"></i>
          </div>
          <Container>{heading}</Container>
        </div>
        {children && <Container classes="mt-4">{children}</Container>}
      </section>
    );
  }
);
