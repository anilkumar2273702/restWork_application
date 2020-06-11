import React from "react";

export const Footer = (props) => {
  const gloablFooterLinks = global.config.footerLinks;
  const firstSection = gloablFooterLinks[0].first_section;
  const secondSection = gloablFooterLinks[0].second_section;
  const thirdSection = gloablFooterLinks[0].third_section;
  const fourthSection = gloablFooterLinks[0].fourth_section;
  const fifthSection = gloablFooterLinks[0].fifth_section;
  const sixthSection = gloablFooterLinks[0].sixth_section;
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="footer_logo">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/footer-logo.png"
                  }
                  alt=""
                />
                <p className="address-info">{firstSection[0].address}</p>
                <p className="phone-text">{firstSection[1].number}</p>
                <p className="email-text">{firstSection[2].email}</p>
              </div>
            </div>
            <div className="col-sm-2">
              <h6>Información</h6>
              <ul>
                <li>
                  <a
                    title="About Us"
                    onClick={() => {
                      props.props.history.push(secondSection[0].link);
                    }}
                  >
                    {secondSection[0].label}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.props.history.push(secondSection[1].link);
                    }}
                  >
                    {secondSection[1].label}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.props.history.push(secondSection[2].link);
                    }}
                  >
                    {secondSection[2].label}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>Nuestro menú</h6>
              <ul>
                <li>
                  <a
                    onClick={() => {
                      props.props.history.push(thirdSection[0].link);
                    }}
                  >
                    {thirdSection[0].label}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.props.history.push(thirdSection[1].link);
                    }}
                  >
                    {thirdSection[1].label}
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      props.props.history.push(thirdSection[2].link);
                    }}
                  >
                    {thirdSection[2].label}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h6>Enlaces Útiles</h6>
              <ul>
                <li>
                  <a onClick={() => {
                      props.props.history.push(fourthSection[0].link);
                    }}>{fourthSection[0].label}</a>
                </li>
                <li>
                  <a onClick={() => {
                      props.props.history.push(fourthSection[1].link);
                    }}>{fourthSection[1].label}</a>
                </li>
                <li>
                  <a onClick={() => {
                      props.props.history.push(fourthSection[2].link);
                    }}>{fourthSection[2].label}</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href={fifthSection[0].link} target="_blank">
                      <i className="fa fa-twitter" aria-hidden="true"></i>{" "}
                      Gorjeo
                    </a>
                  </li>
                  <li>
                    <a href={fifthSection[1].link} target="_blank">
                      <i className="fa fa-facebook-square"></i> Facebook
                    </a>
                  </li>
                  <li>
                    <a href={fifthSection[2].link} target="_blank">
                      <i className="fa fa-instagram"></i> Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p className="copyright-text">
                {sixthSection[0].bottomDetails}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
