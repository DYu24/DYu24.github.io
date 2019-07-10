import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

export class Landing extends React.Component {
  render() {
    return (
      <ParallaxBanner
        layers={[
          {
            image:
              "https://images.unsplash.com/photo-1562680814-2383556d6578?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80g",
            amount: 0.2
          }
        ]}
      >
        <h1>Welcome to my site!</h1>
      </ParallaxBanner>
    );
  }
}
