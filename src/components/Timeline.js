import 'animate.css';
import RDooley_Resume from '../assets/docs/RDooleyResume.pdf'

export const Timeline = () => {
    return (
        // <section className="timeline_area section_padding_130">
        <div className="timeline-container">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-lg-6">
                    <div className="section_heading text-center">
                        <h3>Experience & Education</h3>
                        <h6>A brief history of my journey thus far!</h6>
                        <div className="line"></div>
                    </div>
                </div>
            </div>

            {/* 2024 */}
            <div className="single-timeline-area">

                <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                    }}
                >
                    <p className={"year-p"}>2024</p>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>Vehikl Inc.</h6>
                                <p>Software Developer co-op</p>
                                <p>May - December 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2023 */}
            <div className="single-timeline-area">
                <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                    }}
                >
                    <p className={"year-p"}>2023</p>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>Computer Programming & Analysis (commenced)</h6>
                                <p>Conestoga College - Ontario College Advanced Diploma</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.5s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>Marketing Student Ambassador</h6>
                                <p>Conestoga College - part-time staff</p>
                                <p>Sep23 - May24 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.5s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>Executive Lead</h6>
                                <p>Google Developer Group @ Conestoga</p>
                                <p>Sep23 - Present </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2022 */}
            <div className="single-timeline-area">
                <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                    }}
                >
                    <p className={"year-p"}>2022</p>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.5s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-terminal" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>🎉 Wrote First Line of Code 🎉</h6>
                                <p>Spring 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>Canada Revenue Agency</h6>
                                <p>Collections Contact Officer</p>
                                <p>Jan22 - Sep22</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>Invictus Athletics Club</h6>
                                <p>Hurdles/Sprints Coach</p>
                                <p>Sep22 - Present</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2021 */}
            <div className="single-timeline-area">
                <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                    }}
                >
                    <p className={"year-p"}>2021</p>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>SunLife Financial</h6>
                                <p>Client Care Representative</p>
                                <p>Sep21 - Jan22</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2020 */}
            <div className="single-timeline-area">
                <div
                    className="timeline-date wow fadeInLeft"
                    data-wow-delay="0.1s"
                    style={{
                        visibility: "visible",
                        animationDelay: "0.1s",
                        animationName: "fadeInLeft",
                    }}
                >
                    <p className={"year-p"}>2020</p>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>Bachelor of Arts Degree</h6>
                                <p>University of Western Ontario</p>
                                <p>Major in Psychology - Minor in Criminology</p>
                                <p>2016 - 2020 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div
                            className="single-timeline-content d-flex wow fadeInLeft"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <div className="timeline-icon">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                            </div>
                            <div className="timeline-text">
                                <h6>Western Mustangs Varsity Track & Field</h6>
                                <p>Nationally ranked sprint hurdler</p>
                                <p>2016 - 2020 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-lg-6">
                    <div className="section_heading text-center">
                        <h3>Want to download a PDF resume?</h3>
                        <h6><a href={RDooley_Resume} download='RDooley_Resume'>Click here</a></h6>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
