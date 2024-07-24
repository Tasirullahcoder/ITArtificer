import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { Container, Grid, Typography } from '@mui/material';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-[#0c6793] text-white text-sm py-4">
        <Container maxWidth="lg">
          <Grid container justifyContent="space-end" alignItems="center">
            <Grid item>
              <Typography variant="body1" component="div" className="flex items-center">
                <LocationOnIcon sx={{ fontSize: 20, marginRight: 1 }} />
                <span className="ml-1">KP IT Park - Peshawar, KPK, Pakistan</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" component="div" className="flex items-center">
                <PhoneIcon sx={{ fontSize: 20, marginRight: 1 }} />
                <span className="ml-1">+92-333-9296314</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" component="div" className="flex items-center">
                <EmailIcon sx={{ fontSize: 20, marginRight: 1 }} />
                <span className="ml-1">info@itartificer.com</span>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
{/* abouve is  */}
<div className="bg-white shadow-md py-8">
        <header id="masthead" className="site-header main-navigation-holder mean-container" role="banner">
          <div className="mean-bar">
            <nav className="mean-nav">
              <nav id="site-navigation" className="main-navigation" role="navigation">
                <div className="wrap-menu-content container mx-auto px-4 flex items-center justify-between">
                  <div className="flex items-center item">
                    <NavLink to='/'>
                      <img src="https://www.kpitb.gov.pk/sites/default/files/styles/medium/public/itarticer.jpg?itok=iCG6PUQL" alt="Logo" className="h-16 w-auto mr-8"/>
                    </NavLink>
                  </div>
                  <div className="menu-main-menu-container ml-auto">
                    <ul id="primary-menu" className="menu flex space-x-10 text-lg">
                      <li className="menu-item">
                        <NavLink to="/" exact activeClassName="current-menu-item" className="hover:text-blue-600">Home</NavLink>
                      </li>
                      <li className="menu-item menu-item-has-children relative group">
                        <NavLink to="/about-us" className="hover:text-blue-600">About us</NavLink>
                        <ul className="sub-menu absolute left-0 hidden group-hover:block bg-white text-black shadow-lg p-4 space-y-2">
                          <li className="menu-item">
                            <NavLink to="/our-team" className="hover:text-blue-600">Our Team</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/testimonials" className="hover:text-blue-600">Testimonial</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children relative group">
                        <NavLink to="/subsidies" className="hover:text-blue-600">Subsidies</NavLink>
                        <ul className="sub-menu absolute left-0 hidden group-hover:block bg-white text-black shadow-lg p-4 space-y-2">
                          <li className="menu-item">
                            <NavLink to="/ita-academia" className="hover:text-blue-600">ITA Academia</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/ita-research-center" className="hover:text-blue-600">ITA R. Center</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/kalewal" className="hover:text-blue-600">ITA Kalewal</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children relative group">
                        <NavLink to="/products" className="hover:text-blue-600">Products</NavLink>
                        <ul className="sub-menu absolute left-0 hidden group-hover:block bg-white text-black shadow-lg p-4 space-y-2">
                          <li className="menu-item">
                            <NavLink to="/point-of-sale" className="hover:text-blue-600">Point of Sale</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/school-mis" className="hover:text-blue-600">School MIS</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/currency-mis" className="hover:text-blue-600">Currency MIS</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/real-estate-management-system" className="hover:text-blue-600">R. Estate Software</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/hajj-umra-mis" className="hover:text-blue-600">Hajj Umra MIS</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item menu-item-has-children relative group">
                        <NavLink to="/services" className="hover:text-blue-600">Our Services</NavLink>
                        <ul className="sub-menu absolute left-0 hidden group-hover:block bg-white text-black shadow-lg p-4 space-y-2">
                          <li className="menu-item">
                            <NavLink to="/domain-hosting" className="hover:text-blue-600">Domain | Hosting</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/digital-marketing" className="hover:text-blue-600">Digital Marketing</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/web-development" className="hover:text-blue-600">Web Development</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/mob-app-development" className="hover:text-blue-600">Mobile Application</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/graphic-designing" className="hover:text-blue-600">Graphic Designing</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/software-development" className="hover:text-blue-600">Software Apps</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/e-business" className="hover:text-blue-600">E-Commerce</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/content-writing" className="hover:text-blue-600">Content Writing</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/fyp-ideas-university-projects" className="hover:text-blue-600">FYP Ideas</NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <NavLink to="/blog" className="hover:text-blue-600">Blog</NavLink>
                      </li>
                      <li className="menu-item">
                        <NavLink to="/contact-us" className="hover:text-blue-600">Contact Us</NavLink>
                      </li>
                      <li className="menu-item menu-item-has-children relative group">
                        <NavLink to="/apply-for" className="hover:text-blue-600">Apply For</NavLink>
                        <ul className="sub-menu absolute left-0 hidden group-hover:block bg-white text-black shadow-lg p-4 space-y-2">
                          <li className="menu-item">
                            <NavLink to="/internship-in-peshawar-software-house" className="hover:text-blue-600">For Trainings</NavLink>
                          </li>
                          <li className="menu-item">
                            <NavLink to="/apply-for-job" className="hover:text-blue-600">For Job</NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </nav>
            <div className="mean-push"></div>
          </div>
        </header>
      </div>    </>
  );
};

export default Navbar;
