import React from 'react'
import { useLocation } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

import './BlogPost.scss'

import parse from 'html-react-parser'

export const BlogPost = () => {
  const location = useLocation();
  const id = location.pathname.replace("/blog/", "")
  const post = blogPosts.find((post) => post.id === Number(id))

  return (
    <section className="blog_post">
      <div className="container">
        <h2>{post?.title}</h2>
        <div className="row">
          <div className='col col-md-12 col-lg-8 post_content'>
            {post?.longText && parse(post?.longText)}
          </div>
          <div className='col col-md-12 col-lg-4 my-auto'>
            <img className="blog_picture" src={post?.picture} alt="blog illustration"/>
          </div>
        </div>
      </div>
    </section>
  )   
}