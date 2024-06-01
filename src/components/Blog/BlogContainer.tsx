import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import { Button, Card } from "react-bootstrap";

import './BlogContainer.scss'

export const BlogContainer = () => {
  return (
    <section className="blog">
      <div className="container">
        <h1 className="mb-5">Blog</h1>

        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-12 col-lg-4">
              <Card style={{ width: "18rem" }} className="card-wrapper">
                <Card.Img variant="top" src={post.thumbnail} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post?.cardText}</Card.Text>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
