import React,{ Component } from 'react';

import classes from './Contact.css';
import facebook_image from '../../asset/Icon/facebook-square-brands.svg';
import twitter_image from '../../asset/Icon/twitter-square-brands.svg';
import googleplus_image from '../../asset/Icon/google-plus-square-brands.svg';
import MapContainer from '../../components/GoogleMap/GoogleMap';
import ContactList from './ContactList/ContactList';

class Contact extends Component {
    render() {
        return (
                <div className={classes.Content}>
                    <h3>GET IN TOUCH WITH ME</h3>
                    <h5>CONTACT ADDRESS</h5>
                    <ul className={classes.ListContact_ul}>
                        <ContactList class_i="far fa-map">Hatyai, Songkhla, Thailand</ContactList>
                        <ContactList class_i="fas fa-mobile-alt">Phone:&nbsp;080-544-2850</ContactList>
                        <ContactList class_i="far fa-envelope">Email:&nbsp;Kittitad.taz@gmail.com</ContactList>
                        <ContactList class_i="fas fa-home">Website:&nbsp;https://github.com/kittitadA</ContactList>
                        <li>
                            <a href="/">
                                <img className={classes.IconContact_img}
                                     src={facebook_image} alt="facebook_image"></img>
                            </a>
                            <a href="/">
                                <img className={classes.IconContact_img}
                                     src={twitter_image} alt="twitter_image"></img>
                            </a>
                            <a href="/">
                                <img className={classes.IconContact_img}
                                     src={googleplus_image} alt="googleplus_image"></img>
                            </a>
                        </li>
                    </ul>
                    <div className={classes.Map_G}>
                        <MapContainer />
                    </div>
                </div>
        );
    }
}

export default Contact;
