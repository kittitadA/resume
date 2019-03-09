import React from 'react';

import classes from './Footer.css';
import facebook_image from '../../asset/Icon/facebook-square-brands.svg';
import twitter_image from '../../asset/Icon/twitter-square-brands.svg';
import googleplus_image from '../../asset/Icon/google-plus-square-brands.svg';
import FooterList from './FooterList/FooterList';

const footer = () => {
    return (
          <footer>
              <div className={classes.Footer}>
                  <FooterList
                      title="ADDRESS"
                      line_1="Hatyai, Songkhla, "
                      line_2="Thailand"
                  />

                  <div className={classes.Content}>
                      <h4>CONNECT</h4>
                      <a href="/">
                          <img className={classes.Icon_img}
                               src={facebook_image} alt="facebook_image"></img>
                      </a>
                      <a href="/">
                          <img className={classes.Icon_img}
                               src={twitter_image} alt="twitter_image"></img>
                      </a>
                      <a href="/">
                          <img className={classes.Icon_img}
                               src={googleplus_image} alt="googleplus_image"></img>
                      </a>
                  </div>

                  <FooterList
                      title="CONTACT"
                      line_1="Tel: 080-544-2850"
                      line_2="Mail: Kittitad.taz@gmail.com"
                  />
              </div>

              <div className={classes.Copyright}>Copyright &copy; Kittitad. 2019 All Rights Reserved.</div>
          </footer>
    );
};

export default footer;
