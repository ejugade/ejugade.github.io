import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">AI/ ML</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Computer Vision</h3>
                        <span className="skills__level">OpenCV, TensorFlow, IsaamSim</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">NLP</h3>
                        <span className="skills__level">NLTK, Bert</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Evolutionary Computing</h3>
                        <span className="skills__level">Optimization algorithms</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Explainable AI</h3>
                        <span className="skills__level">and Bias Mitigation</span>
                    </div>
                </div>


                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Signal Processing</h3>
                        <span className="skills__level">Physiological, Audio Signals</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">Misc</h3>
                        <span className="skills__level">Matplotlib, Tableau, A/B Testing</span>
                    </div>
                </div>

                {/* <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name"></h3>
                        <span className="skills__level"></span>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Backend