import React from 'react'

const Services = () => {
  return (
    <section className="section services" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className="services_container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil service_icon"></i>
                    <h3 className="services_title"></h3>
                </div>

                <span className='services_button'>View more
                <i className='uil uil-arrow-right services_button-icon'></i>
                </span>

                <div className="services_modal">
                    <div className="services_modal-content">
                        <i className='uil uil-times services_modal_close'></i>
                        <h3 className='services_modal-title'></h3>
                        <p className='services_modal-description'>
                            Providing quality work to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">1:31:07</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services