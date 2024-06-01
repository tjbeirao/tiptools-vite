import React from "react";

export const ContactUsBanner = () => {
  return (
    <div className="contactInfo row">
      <div className="col col-6">
        <div>
          <h3>Inquiries</h3>
          <p className="copy-2">
            Still have questions about how we work? Maybe you'd like to give us
            some feedback. We’d love to hear from you!
          </p>
          <a className="link" href="mailto:info@tiptools.ca">
            info@tiptools.ca
          </a>
        </div>

        <div className="mt-5">
          <h3>Address</h3>
          <a
            className="link"
            href="https://goo.gl/maps/xfXUcRKFQDdzKYC36"
            target="_blank"
            rel="noreferrer"
          >
            <p className="copy-2">7394 202 Ave SE, Calgary, AB T3M 0M2</p>
          </a>
        </div>
      </div>
      
      <div className="col col-6">
        <img
          src="children (Custom).png"
          alt="children"
          className="container contact-image"
        />
      </div>
    </div>
  );
};
