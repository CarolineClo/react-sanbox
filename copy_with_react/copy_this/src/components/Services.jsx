import React from "react";
import Service from "./Service";
import StategyIcon from "./icons/StategyIcon";
import MarketingIcon from "./icons/MarketingIcon";
function Services() {
  return (
    <section>
      <div className="light-back">
        <div className="section_head">
          <h2>Our services</h2>
          <h3>Where we can add value</h3>
        </div>
        <div className="servicelsit flex1">
          <Service title="Strategy" content="Looking to create a blockchain product? We help you with your 'go-To-Market' strategy ">
            <StategyIcon width="200" height="200" />
          </Service>
          <Service title="Marketing" content="A great product needs great marketing we help you with seo cro and content marketing*">
            <MarketingIcon width="200" height="200" />
          </Service>
        </div>
      </div>
    </section>
  );
}

export default Services;
