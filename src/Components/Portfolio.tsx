import React, { Component } from 'react';
import { IProps, IState } from '../Models/ActionTypes';

class Portfolio extends Component<IProps, IState> {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map((projects:any)=>{
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">
 {/* <div className="text-container"> */}
      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>
 
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
      {/* </div> */}
   </section>
    );
  }
}

export default Portfolio;
