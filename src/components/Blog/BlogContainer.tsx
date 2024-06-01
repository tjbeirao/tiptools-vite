import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import { Button, Card, Row, Col } from 'antd';

import './BlogContainer.scss';

export const BlogContainer = () => {
  return (
    <section className="blog">
      <div className="container">
        <h1 className="mb-5">Blog</h1>

        <Row gutter={[16, 16]}>
          {blogPosts.map((post) => (
            <Col key={post.id} xs={24} md={12} lg={8}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={post.thumbnail} />}
              >
                <Card.Meta title={post.title} description={post?.cardText} />
                <Link to={`/blog/${post.id}`}>
                  <Button type="primary" style={{ marginTop: '16px' }}>Read More</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
