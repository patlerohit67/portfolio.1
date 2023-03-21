import React from 'react';
import IMG1 from '../imagess/pro-2.png';
import IMG2 from '../imagess/pro-3.png';
import IMG3 from '../imagess/pro-4.png';
import './Project.css';


const data = [
  {
    id:1,
    image: IMG1,
    title:'E-commerce Site - Amazon-Clone-app',
    github:'https://github.com/patlerohit67/amazon--clone.git',
    demo:'https://amazon-z1zw.onrender.com'
  },
  {
    id:2,
    image: IMG2,
    title:'Ping-Pong Game',
    github:'https://github.com/patlerohit67/pingpong.git',
    demo:'https://patlerohit67.github.io/pingpong2/'
  },
  {
    id:3,
    image: IMG3,
    title:'E-Cara Website',
    github:'https://github.com/patlerohit67/website.git',
    demo:'https://ecom-site-v0jf.onrender.com'
  },
]
function Project() {
  return (
    <section id='project'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>
      <div className="container project__container">
       {
        data.map(({id,image,title,github,demo}) => {
          return(
            <article key ={id} className='project__item'>
            <div className="project__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="project__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live-Demo</a>
            </div>
          </article>
          );
        })
       }
      </div>
    </section>
  )
}

export default Project
