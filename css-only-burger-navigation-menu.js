.nav {
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: -200px;
  transition: left 0.2s;
}

.nav-trigger {
  display: none;
}

label[for="nav-trigger"] {
  position: fixed;
  left: 0px; top: 0px;
  z-index: 2;
  
  height: 39px;
  width: 55px;
  cursor: pointer;
  
  transition: left 0.2s;
}

.nav-trigger:checked + label {
  left: 200px;
  height: 100%;
  width: 100%;
  background-color: #333333;
  opacity: .5;
}

.nav-trigger:checked ~ .navigation {
  left: 0;
}

.nav-trigger:checked ~ .site-wrap {
  left: 200px;
}

.site-wrap {
  position: relative;
  left: 0;
  transition: left 0.2s;
}

body {
  overflow-x: hidden;
}










  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
  .hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block; }
  .hamburger-inner::before {
    top: -10px; }
  .hamburger-inner::after {
    bottom: -10px; }

.hamburger-inner {
  top: 15px;
  left: 15px;}
  .hamburger-inner::before {
    top: 10px;
    transition-property: opacity, -webkit-transform;
    transition-property: transform, opacity;
    transition-property: transform, opacity, -webkit-transform;
    transition-timing-function: ease;
    transition-duration: 0.2s; }
  .hamburger-inner::after {
    top: 20px; }

.nav-trigger:checked + label .hamburger-inner {
  -webkit-transform: translate3d(0, 10px, 0) rotate(45deg);
          transform: translate3d(0, 10px, 0) rotate(45deg); }
  .nav-trigger:checked + label .hamburger-inner::before {
    -webkit-transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
            transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
    opacity: 0; }
  .nav-trigger:checked + label .hamburger-inner::after {
    -webkit-transform: translate3d(0, -20px, 0) rotate(-90deg);
            transform: translate3d(0, -20px, 0) rotate(-90deg); }

