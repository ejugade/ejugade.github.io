import React, { useState } from 'react'
import './services.css';

const Services = () => {
    const data = [
        { id: 1, 
          type: 'Project', 
          title: 'Informal Screening of Autism Spectrum Disorder', 
          description: 'A chatbot using NLP', 
          link: '' ,
          readMore: true,
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
          tools: ["Tensorflow", "Numpy", "Gradio"],
          modal: ["I develop A", "I develop B", "I develop C"]
        },
        { id: 2, 
          type: 'Project', 
          title: 'Audio SOS', 
          description: 'Paper on deep learning techniques', 
          link: 'https://example.com/dl-paper',
          readMore: true,
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
          tools: ["Tensorflow", "Label Studio", "Sklearn", "SciPy"],  
          modal:  ["I develop D", "I develop BE", "I develop Cd"]
         },
        { id: 3,
          type: 'Project', 
          title: 'Dynamic Load Balancing in SDN-Based Data Center Networks', 
          description: 'A responsive personal portfolio', 
          link: 'https://example.com/portfolio',
          readMore: true,
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
          tools: ["Mininet", "Python", "P4", "Floodlight", "Docker"],  
          modal: ["I develop A", "I develop B", "I develop C"]
         },
        { id: 4, 
          type: 'Publication', 
          title: 'Enabling Concurrency in Databases', 
          description: 'Article on ML algorithms', 
          link: 'https://example.com/ml-article',
          readMore: true,
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
          tools: ["Status: Draft"],  
          modal: ["I develop A", "I develop B", "I develop C"]
         }
         ,
         { id: 5, 
          type: 'Project', 
          title: 'Paper2Pixels-Revamp your Bills', 
          link: 'https://example.com/ml-article',
          readMore: true,
          image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
          tools: ["OpenCV", "Tensorflow", "Mongo", "Java"],
          modal: ["I develop A", "I develop B", "I develop C"]
       },
       { id: 6, 
        type: 'Project', 
        title: 'RagaMap', 
        description: 'Article on ML algorithms', 
        link: 'https://example.com/ml-article',
        readMore: true,
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
        tools: ["PyDub", "Librosa", "Tensorflow", "SciPy"],
        modal: ["I develop A", "I develop B", "I develop C"]
      },
     { id: 7, 
      type: 'Project', 
      title: 'EEG-based Motor Imagery Classification', 
      description: 'Article on ML algorithms', 
      link: 'https://example.com/ml-article',
      readMore: true,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      tools: ["Tensorflow", "OpenCV", "mne", "SciPy"],
      modal: ["I develop A", "I develop B", "I develop C"]
     },
    { id: 8, 
      type: 'Publication', 
      title: 'Smart Wearables using Deep Learning', 
      description: 'Article on ML algorithms', 
      link: 'https://example.com/ml-article',
      readMore: true,
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      tools: ["Status: Published"],
      modal: ["I develop A", "I develop B", "I develop C"]
    }
      ];

    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [filter, setFilter] = useState('All');
    const [activeItem, setActiveItem] = useState(null);
    const closeModal = () => {
        setActiveItem(null); // Close the modal by resetting the active item
      };
      const openModal = (item) => {
        setActiveItem(item); // Set the active item for the modal
      };

  const filteredData = filter === 'All' ? data : data.filter(item => item.type === filter);

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">Projects and Publications</span>
      {/* <div className="filter-buttons">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Project')}>Projects</button>
        <button onClick={() => setFilter('Publication')}>Publications</button>
      </div> */}
      {/* <div className="card-container">
        {filteredData.map(item => (
          <div key={item.id} className="card">
            <div className="card-inner">
              <div className="card-front">
                <h3>{item.title}</h3>
              </div>
              <div className="card-back">
                <p>{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">Visit</a>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    <div className="filter-buttons">
        <button className="button button--flex" onClick={() => setFilter('All')}>All</button>
        <button className="button button--flex" onClick={() => setFilter('Project')}>Projects</button>
        <button className="button button--flex" onClick={() => setFilter('Publication')}>Publications</button>
      </div>

      <div className="services__container container grid">
        {filteredData.map(item => (
          <div key={item.id} className="services__content_card">
            <div className="services-card-inner">
              <div className="services-card-front">
                <h3 className="services-card-title">{item.title}</h3>
                {/* <p>{item.description}</p> */}
                <ul className="tools-list">
                {item.tools.map((tool, index) => (
                  <li key={index} className="tool-item">
                    {tool}
                </li>
      ))}
    </ul>
              </div>
              <div className="services-card-back">
              <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">UI/UX designer</h3>
                        <p className="services__modal-description">add text</p>

                        <ul className="services__modal-services grid">
                        {item.modal.map((detail, index) => (
                            <li key={index} className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">{detail}</p>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                
            
                <div className="project_button_bottom">
                <span className="project-button" onClick={() => openModal(item)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
                {/* <a className="button button--flex"  href={item.link} target="_blank" rel="noopener noreferrer">Learn More</a> */}
                <a className="project-button"  href={item.link} target="_blank" rel="noopener noreferrer">Visit</a>
                </div>
              </div>
            </div>
            {activeItem && activeItem.id === item.id && (
              <div className="services__modal active-modal">
                <div className="services__modal-content">
                  <i onClick={closeModal} className="uil uil-times services__modal-close"></i>
                  <h3 className="services__modal-title">{item.title}</h3>
                  <p className="services__modal-description">add text</p>
                  <ul className="services__modal-services grid">
                    {item.modal && item.modal.map((detail, index) => (
                      <li key={index} className="services__modal-service">
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          
        ))}
      </div> 

        {/* <div className="services__container container grid">
            
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon">
                        <h3 className="services__title">Product <br/> Designer </h3>
                    </i>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Product Designer</h3>
                        <p className="services__modal-description">add text</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop A</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop B</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop C</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop D</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop E</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon">
                        <h3 className="services__title">UI/UX <br /> Designer </h3>
                    </i>
                </div>

                <span className="services__button" onClick={() => toggleTab(2)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                {filteredData.map(item => (
       
                        <ul className="services__modal-services grid">
                        {item.modal.map((detail, index) => (
                            <li key={index} className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">{detail}</p>
                            </li>
                        ))}
                        </ul>
        ))}

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">UI/i designer</h3>
                        <p className="services__modal-description">add text</p>

                        {filteredData.map(item => (
       
                        <ul className="services__modal-services grid">
                        {item.modal.map((detail, index) => (
                            <li key={index} className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">{detail}</p>
                            </li>
                        ))}
                        </ul>
        ))}
                    </div>

                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon">
                        <h3 className="services__title">Visual <br /> Designer </h3>
                    </i>
                </div>

                <span className="services__button" onClick={() => toggleTab(3)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Visual Designer</h3>
                        <p className="services__modal-description">add text</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop A</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop B</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop C</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop D</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop E</p>
                            </li>
                        </ul>
                    </div> */}

                {/* </div> */}
            {/* </div> */}
        {/* </div> */}
    </section>
  )
}

export default Services