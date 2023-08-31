import './Projects.scss';

function Projects() {
  return (
    <section className='Projects'>
      <h2 className="Projects-title">
        Projects:
      </h2>
      <div className="Projects-container">
        <article className='Projects-component'>
          <div className="Projects-component-image">
            <img src="https://source.unsplash.com/AZf7DL-8Qhk" alt="Jordan 13 shoes from unsplash source" />
          </div>
          <div className="Projects-component-summary">
            <h3>oShop - Back Office</h3>
            <p>oShop, a pivotal project developed during my Bac +2 Web Developer course, showcases my proficiency in PHP and Bootstrap. This dynamic web application serves as an efficient back office solution for catalog managers and administrators of an e-commerce shoe store.</p>
          </div>
        </article>

        <article className='Projects-component'>
          <div className="Projects-component-image">
            <img src="https://i.gifer.com/7wC0.gif" alt="Jordan 13 shoes from unsplash source" />
          </div>
          <div className="Projects-component-summary">
            <h3>Weather Widget</h3>
            <p>The Weather Widget stands as a testament to my growing expertise in React development and API integration. Created with the intention of refining my skills, this widget offers real-time weather updates for different cities by fetching data from external APIs.</p>
          </div>
        </article>

        <article className='Projects-component'>
          <div className="Projects-component-image">
            <img src="https://source.unsplash.com/QL0FAxaq2z0" alt="Jordan 13 shoes from unsplash source" />
          </div>
          <div className="Projects-component-summary">
            <h3>O'Boulot</h3>
            <p>This innovative online job agency redefines the job search process by empowering candidates to secure employment opportunities without the constraints of qualifications or traditional CVs.</p>
          </div>
        </article>

        <article className='Projects-component'>
          <div className="Projects-component-image">
            <img src="https://source.unsplash.com/b21Ty33CqVs" alt="Jordan 13 shoes from unsplash source" />
          </div>
          <div className="Projects-component-summary">
            <h3>Frontend Mentor Projects</h3>
            <p>My journey into web development started with Frontend Mentor, where I embarked on a series of projects that marked my foray into building static and responsive websites using HTML and CSS.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects;
