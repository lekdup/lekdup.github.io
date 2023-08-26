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
            <img src="https://source.unsplash.com/LJMFUzvuau8" alt="Jordan 13 shoes from unsplash source" />
          </div>
          <div className="Projects-component-summary">
            <h3>oShop - Back Office</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate provident iste aspernatur eos ea sapiente consequatur nostrum assumenda in.</p>
          </div>
        </article>
        <article className='Projects-component'>
          <div className="Projects-component-image">
            <img src="https://source.unsplash.com/QL0FAxaq2z0" alt="Jordan 13 shoes from unsplash source" />
          </div>
          <div className="Projects-component-summary">
            <h3>oShop - Back Office</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate provident iste aspernatur eos ea sapiente consequatur nostrum assumenda in.</p>
          </div>
        </article>
        <article className='Projects-component'>
          <div className="Projects-component-image">
            <img src="https://source.unsplash.com/w83s82yd3Fk" alt="Jordan 13 shoes from unsplash source" />
          </div>
          <div className="Projects-component-summary">
            <h3>oShop - Back Office</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptate provident iste aspernatur eos ea sapiente consequatur nostrum assumenda in.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects;
