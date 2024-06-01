import React from "react";
import "./AboutEducator.scss";

import { educators } from "../../data/educators";
import { Table } from "react-bootstrap";

export const AboutEducator = () => {
  return (
    <section className="about-educators">
      <div className="container">
        <h2 className="h2 mb-3">Educator</h2>
        {educators.map((educator) => {
          return (
            <div key={educator.id} className="row align-items-center">
              <div className="col-md-12 col-lg-12 my-3">
                <p className="mb-3 fs-24">{educator.description}</p>
              </div>

              <div className="educator_workshops col-md-12 col-lg-12 my-3">
                <h3 className="h3 my-3">Qualifications and Training</h3>
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {educator.workshops.map((workshop, index) => {
                      return (
                        <tr key={workshop.month + index}>
                          <td>{index + 1}</td>
                          <td>{workshop.name}</td>
                          <td>{workshop.year}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
