import React, { useState } from 'react'
import './services.css';
import { Github, ExternalLink } from 'lucide-react';
import Img1 from "../../assets/project1.jpg";
import Img2 from "../../assets/project2.jpg";
import Img3 from "../../assets/project3.jpg";
import Img4 from "../../assets/project4.jpg";
import Img5 from "../../assets/project5.jpg";
import Img6 from "../../assets/project6.jpg";
import Img7 from "../../assets/project7.jpg";
import Img8 from "../../assets/project8.jpg";

const Services = () => {
    const data = [
        { id: 1, 
          type: 'Project', 
          title: 'Informal Screening of Autism Spectrum Disorder', 
          description: 'At-home AI-based ASD diagnostication using novel algorithm from video data.', 
          link: '' ,
          readMore: true,
          image: Img1,
          tools: ["Tensorflow", "Numpy", "Gradio"],
          modal: ["I develop A", "I develop B", "I develop C"]
        },
        { id: 2, 
          type: 'Project', 
          title: 'Audio SOS', 
          description: 'Classification of 911 Audio calls into 4 threat levels to trigger prioritized emergency response.', 
          link: 'https://example.com/dl-paper',
          readMore: true,
          image: Img2,
          tools: ["Tensorflow", "Label Studio", "Sklearn", "SciPy"],  
          modal:  ["I develop D", "I develop BE", "I develop Cd"]
         },
        { id: 3,
          type: 'Project', 
          title: 'Dynamic Load Balancing in SDN-Based Data Center Networks', 
          description: 'Provisions dynamic load balancing using shortest path algorithm in congestion-prone Data Center Network Topologies.', 
          link: 'https://example.com/portfolio',
          readMore: true,
          image: Img3,
          tools: ["Mininet", "Python", "Floodlight", "Docker"],  
          modal: ["I develop A", "I develop B", "I develop C"]
         },
        { id: 4, 
          type: 'Publication', 
          title: 'Enabling Concurrency in Databases', 
          description: 'Exploratory research on the latest literature on ensuring concurrency in distributed systems via deterministic data systems.', 
          link: 'https://example.com/ml-article',
          readMore: true,
          image: Img4,
          tools: ["Status: Draft"],  
          modal: ["I develop A", "I develop B", "I develop C"]
         }
         ,
         { id: 5, 
          type: 'Project', 
          title: 'Paper2Pixels-Revamp your Bills', 
          description: 'Converts hand-written bills into a digital schema using OCR, stores the captured information into Mongo Cloud for future referencing and decision-making.', 
          link: 'https://example.com/ml-article',
          readMore: true,
          image: Img5,
          tools: ["OpenCV", "Tensorflow", "Mongo", "Java"],
          modal: ["I develop A", "I develop B", "I develop C"]
       },
       { id: 6, 
        type: 'Project', 
        title: 'RagaMap', 
        description: 'Analyses Indian Classical Music Framework to identify the correct Raga from input audio signals.', 
        link: 'https://example.com/ml-article',
        readMore: true,
        image: Img6,
        tools: ["PyDub", "Librosa", "Tensorflow", "SciPy"],
        modal: ["I develop A", "I develop B", "I develop C"]
      },
     { id: 7, 
      type: 'Project', 
      title: 'EEG-based Motor Imagery Classification', 
      description: 'Analyses EEG data for mapping mental imagery to 4 different physical tasks for enabling assistive motor device research.', 
      link: 'https://example.com/ml-article',
      readMore: true,
      image: Img7,
      tools: ["Tensorflow", "OpenCV", "mne", "SciPy"],
      modal: ["I develop A", "I develop B", "I develop C"]
     },
    { id: 8, 
      type: 'Publication', 
      title: 'Smart Wearables using Deep Learning', 
      description: 'Published paper on the use of deep learning techniques for analyzing physiological signal data for mobile health applications.', 
      link: 'https://example.com/ml-article',
      readMore: true,
      image: Img8,
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

    <div className="filter-buttons">
        <button className={filter === "All" ?
                    "button button--flex filter_button" 
                    : "button button--flex"
                } onClick={() => setFilter('All')}>All</button>
        <button className={filter === "Project" ?
                    "button button--flex filter_button" 
                    : "button button--flex"
                } onClick={() => setFilter('Project')}>Projects</button>
        <button className={filter === "Publication" ?
                    "button button--flex filter_button" 
                    : "button button--flex"
                } onClick={() => setFilter('Publication')}>Publications</button>
      </div>

      <div className="services__container container grid">
        {filteredData.map((item, index) => (
          <div key={item.id} className="services__content_card">
            <div className="services-card-inner">
              <div className="services-card-front">
                {/* <h3 className="services-card-title">{item.title}</h3>
                {/* <p>{item.description}</p> */}
                {/* <ul className="tools-list"> */}
                {/* {item.tools.map((tool, index) => ( */}
                  {/* <li key={index} className="tool-item"> */}
                    {/* {tool} */}
                {/* </li> */}
                  {/* ))} */}
                {/* </ul> */}
                <div
              key={item.title}
              className="services__modal-title"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="services__modal-title">{item.title}</h3>
                <p className="services__modal-description">{item.description}</p>
                <div className="tools-list">
                  {item.tools.map((tech) => (
                    <span
                      key={tech}
                      className="tool-item"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* <div className="flex gap-4">
                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div> */}
              </div>
            </div>
              </div> 
              <div className="services-card-back">
              <img
                  src={item.image}
                  alt={item.title}
                  className="back-img"
                />
                <h1>{item.description}</h1>
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
                <a className="project-button"  href={item.link} target="_blank" rel="noopener noreferrer">Visit
                <i className="uil uil-external-link-alt services__button-icon"></i>
                </a>
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