<template>


 

<!-- <div class = "navbar">
  <ul>
    <li><router-link to="/" class="vl">Get Involved</router-link></li> 
    <li><router-link to="/register" class="prop">List your property</router-link></li>
    <li><router-link to="/login">Login</router-link></li>
    <li><router-link to="/register">Registration</router-link></li>
    
  </ul>
</div>
<nav>
  <div>
     <img src="/img/appimages/logo.png" alt="logo" />

  </div>
  <ul class="nav-menu">
    <li class="nav-item">
      <router-link to="/" class="nav-link">Home</router-link>
    </li>
                   
    <li class="nav-item">
      <router-link to="/about" class="nav-link">About</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/offers" class="nav-link">Offers</router-link>
    </li>
    <li class="nav-item">
        <router-link to="/destination" class="nav-link">Destinations</router-link>
    </li>
                
    </ul>
  </nav> -->

  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
        <!-- Uncomment the line below if you also wish to use an image logo -->
         <img src="../assets/img/logo.png" alt=""> 
        <h1>Travel Lanka<span>.</span></h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/about" class="nav-link">About</router-link></li>
          <li><router-link to="/offers" class="nav-link">Offers</router-link></li>
          <li><router-link to="/destination" class="nav-link">Destinations</router-link></li>
          <li class="dropdown"><a href="#contact">Registration<i class="bi bi-chevron-down dropdown-indicator"></i></a> 
            <ul>
              <li><router-link to="/register">Tourist</router-link> </li>
              <li><router-link to="/register">Hotel</router-link></li>
            </ul>
          </li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav><!-- .navbar -->
      
      <router-link to="/login" class="btn-login">Login</router-link>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header><!-- End Header -->
  
</template>

<script>

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

});

</script>

<style>


/** Vendor CSS Files **/

@import '../assets/vendor/bootstrap/css/bootstrap.min.css';
@import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';


/**
* Template Name: Yummy - v1.1.0
* Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

/*--------------------------------------------------------------
# Set main reusable colors and fonts using CSS variables
# Learn more about CSS variables at https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
--------------------------------------------------------------*/
/* Fonts */
:root {
  --font-default: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-primary: "Amatic SC", sans-serif;
  --font-secondary: "Inter", sans-serif;
}

/* Colors */
:root {
  --color-default: #212529;
  --color-primary: #ce1212;
  --color-secondary: #37373f;
}

/* Smooth scroll behavior */
:root {
  scroll-behavior: smooth;
}

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: var(--font-default);
  color: var(--color-default);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  list-style: none;
  
}

a:hover {
  color: #ec2727;
  
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-secondary);
  
}

/*--------------------------------------------------------------
# Sections & Section Header
--------------------------------------------------------------*/
section {
  overflow: hidden;
  padding: 80px 0;
}

.section-bg {
  background-color: #eee;
}

.section-header {
  text-align: center;
  padding-bottom: 30px;
  
}

.section-header h2 {
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  color: #7f7f90;
  text-transform: uppercase;
  font-family: var(--font-default);
}

.section-header p {
  margin: 0;
  font-size: 48px;
  font-weight: 400;
  font-family: var(--font-primary);
}

.section-header p span {
  color: var(--color-primary);
}

/*--------------------------------------------------------------
# Scroll top button
--------------------------------------------------------------*/
.scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 99999;
  background: var(--color-primary);
  width: 44px;
  height: 44px;
  border-radius: 50px;
  transition: all 0.4s;
}

.scroll-top i {
  font-size: 24px;
  color: #fff;
  line-height: 0;
}

.scroll-top:hover {
  background: #ec2727;
  color: #fff;
}

.scroll-top.active {
  visibility: visible;
  opacity: 1;
}

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.header {
  background: #fff;
  transition: all 0.5s;
  z-index: 997;
  height: 90px;
  border-bottom: 1px solid #fff;
}
.header a{
  text-decoration: none;
  list-style: none;
}
@media (max-width: 575px) {
  .header {
    height: 70px;
  }
}

.header.sticked {
  border-color: #fff;
  border-color: #eee;
}

.header .logo img {
  max-height: 40px;
  margin-right: 6px;
}

.header .logo h1 {
  font-size: 28px;
  font-weight: 700;
  color: #000;
  margin: 0;
  font-family: var(--font-secondary);
}

.header .logo h1 span {
  color: var(--color-primary);
}

.header .btn-login,
.header .btn-login:focus {
  font-size: 14px;
  color: #fff;
  background: var(--color-primary);
  padding: 8px 20px;
  margin-left: 30px;
  border-radius: 50px;
  transition: 0.3s;
}

.header .btn-login:hover,
.header .btn-login:focus:hover {
  color: #fff;
  background: rgba(206, 18, 18, 0.8);
}

section {
  scroll-margin-top: 90px;
}

/*--------------------------------------------------------------
# Desktop Navigation
--------------------------------------------------------------*/
@media (min-width: 1280px) {
  .navbar {
    padding: 0;
  }

  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
    
  }

  .navbar li {
    position: relative;
  }

  .navbar>ul>li {
    white-space: nowrap;
    padding: 10px 0 10px 28px;
  }

  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3px;
    font-family: var(--font-secondary);
    font-size: 16px;
    font-weight: 600;
    color: #7f7f90;
    white-space: nowrap;
    transition: 0.3s;
    position: relative;
    text-decoration: none;
    list-style: none;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  .navbar>ul>li>a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -6px;
    left: 0;
    background-color: var(--color-primary);
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out 0s;
  }

  .navbar a:hover:before,
  .navbar li:hover>a:before,
  .navbar .active:before {
    visibility: visible;
    width: 100%;
  }

  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover>a {
    color: #000;
  }

  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 28px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
    border-radius: 4px;
  }

  .navbar .dropdown ul li {
    min-width: 200px;
  }

  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
    font-weight: 600;
  }

  .navbar .dropdown ul a i {
    font-size: 12px;
  }

  .navbar .dropdown ul a:hover,
  .navbar .dropdown ul .active:hover,
  .navbar .dropdown ul li:hover>a {
    color: var(--color-primary);
  }

  .navbar .dropdown:hover>ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  .navbar .dropdown .dropdown:hover>ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }
}

@media (min-width: 1280px) and (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}

@media (min-width: 1280px) {

  .mobile-nav-show,
  .mobile-nav-hide {
    display: none;
  }
}

/*--------------------------------------------------------------
# Mobile Navigation
--------------------------------------------------------------*/
@media (max-width: 1279px) {
  .navbar {
     position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
    padding-top: 10em;
    padding: 2em;
    opacity: 0;
    transform: scale(0.85);
  }
.mobile-nav-active .navbar{
  display: block;
    z-index: 10;
    position: fixed;
    background-color: #afaaaa3a;
    transform: scale(1);
    opacity: 1;
    transition: all 0.5s ease;
    backdrop-filter: blur(8px);
}
 .mobile-nav-show {
    color: var(--color-secondary);
    font-size: 28px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
    margin: 0 10px 0 20px;
       
  }

  .mobile-nav-hide {
    color: var(--color-secondary);
    font-size: 32px;
    cursor: pointer;
    line-height: 0;
    transition: 0.5s;
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 9999;
  }

  .mobile-nav-active {
    overflow: hidden;
  }


  .navbar ul {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    height: 100%;
    width: 100%;
    font-size:larger;
    list-style: none;
    text-align: center;
  }

  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 50px 0;
    font-family: var(--font-secondary);
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    transition: 0.3s;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 0;
    color: #000000;
    
  }

  .navbar a:hover,
  .navbar li:hover>a {
    color: #000;
  }

  .navbar .active,
  .navbar .active:focus {
    color: #000;
    border-color: var(--color-primary);
  }

  .navbar .dropdown ul,
  .navbar .dropdown .dropdown ul {
    position: static;
    display: none;
    transition: all 0.5s ease-in-out;

  }

  .navbar .dropdown>.dropdown-active,
  .navbar .dropdown .dropdown>.dropdown-active {
    display: block;
  }

 
}

</style>