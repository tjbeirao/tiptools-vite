import React from "react";
import "./ContactContainer.scss";
import { ContactUsBanner } from "./ContactUsBanner";

export const ContactContainer = () => {
  return (
    <div className="contactContainer container">
      <div className="contactHeader mb-5">
        <h2 className="mb-3 p-0 text-center">Contact Us</h2>
      </div>

      <div className="mb-5 align-center">
        <ContactUsBanner />
      </div>
    </div>
  );
};
