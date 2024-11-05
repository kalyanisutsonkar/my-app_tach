// src/App.js
import React from 'react';

function App() {
  return (
    
     <>
  {/* Hello world */}
  {/* META */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="keywords" content="" />
  <meta name="author" content="" />
  <meta name="robots" content="" />
  <meta name="description" content="" />
  {/* FAVICONS ICON */}
  <link
    rel="icon"
    href="https://prestylengineering.com/assets/front/img/logo.png"
    type="image/x-icon"
  />
  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="https://prestylengineering.com/assets/front/img/logo.png"
  />
  {/* PAGE TITLE HERE */}
  <title>PRESTYL Engineering Services Pvt. Ltd - Home</title>
  {/* FLATICON STYLE SHEET */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/flaticon.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  {/* MOBILE SPECIFIC */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* BOOTSTRAP STYLE SHEET */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/bootstrap.min.css"
  />
  {/* BOOTSTRAP SLECT BOX STYLE SHEET  */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/bootstrap-select.min.css"
  />
  {/* FONTAWESOME STYLE SHEET */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/fontawesome/css/font-awesome.min.css"
  />
  {/* OWL CAROUSEL STYLE SHEET */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/owl.carousel.min.css"
  />
  {/* MAGNIFIC POPUP STYLE SHEET */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/magnific-popup.min.css"
  />
  {/* LOADER STYLE SHEET */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/loader.min.css"
  />
  {/* MAIN STYLE SHEET */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/style.css"
  />
  {/* Price Range Slider */}
  <link
    rel="stylesheet"
    href="https://prestylengineering.com/assets/front/css/bootstrap-slider.min.css"
  />
  {/* Color Theme Change Css */}
  <link
    rel="stylesheet"
    className="skin"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/skin/skin-1.css"
  />
  {/* Side Switcher Css*/}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/css/switcher.css"
  />
  {/* REVOLUTION SLIDER CSS */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/plugins/revolution/revolution/css/settings.css"
  />
  {/* REVOLUTION NAVIGATION STYLE */}
  <link
    rel="stylesheet"
    type="text/css"
    href="https://prestylengineering.com/assets/front/plugins/revolution/revolution/css/navigation.css"
  />
  {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> */}
  {/* Google Fonts */}
  <link
    href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
    rel="stylesheet"
  />
  <div className="page-wraper">
    {/* HEADER START */}
    <header className="site-header nav-wide nav-transparent mobile-sider-drawer-menu">
      <div className="top-bar sx-bg-secondry">
        <div className="container">
          <div className="d-flex justify-content-between ">
            <ul className="list-unstyled e-p-bx text-white">
              <li>
                <span>Mail us:</span>{" "}
                <a href="mailto:prestylengineering07@gmail.com">
                  prestylengineering07@gmail.com
                </a>
              </li>
              <li>
                <span>Call us:</span>{" "}
                <a href="tel:+91-9503725086">+91-9503725086</a>
              </li>
            </ul>
            <ul className="list-unstyled social-bx text-white d-flex flex-wrap align-content-center">
              {/* <li><a href="javascript:;"><i class="fa fa-behance"></i></a></li> */}
              <li>
                <a
                  href="https://www.linkedin.com/company/prestylengineeringservices/posts/?feedView=all&viewAsMember=true"
                  className="fa fa-linkedin"
                />
              </li>
              <li>
                <a href="https://www.facebook.com/people/PreStyl-Engineering/100083182218437/">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="javascript:;">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar">
          <div className="container clearfix justify-content-between">
            <div className="logo-header">
              <div className="logo-header-inner logo-header-one">
                <a href="https://prestylengineering.com/">
                  <img
                    src="https://prestylengineering.com/assets/front/img/logo.png"
                    width={110}
                    alt=""
                  />
                </a>
              </div>
            </div>
            {/* NAV Toggle Button */}
            <button
              id="mobile-side-drawer"
              data-target=".header-nav"
              data-toggle="collapse"
              type="button"
              className="navbar-toggler collapsed"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar icon-bar-first" />
              <span className="icon-bar icon-bar-two" />
              <span className="icon-bar icon-bar-three" />
            </button>
            {/* EXTRA NAV */}
            {/* <div class="extra-nav">
                          <div class="extra-cell">                                            
                              <a href="#search">
                                  <i class="fa fa-search"></i>
                              </a>
                          </div>
                      </div> */}
            {/* EXTRA Nav */}
            {/* MAIN NAVIGATION */}
            <div className="header-nav nav-dark navbar-collapse collapse justify-content-end collapse">
              <ul className=" nav navbar-nav" id="link-1">
                <li>
                  <a
                    href="https://prestylengineering.com/"
                    className="link-1 menu-border-active footer-menu-active"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="https://prestylengineering.com/about-us"
                    className=""
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://prestylengineering.com/services"
                    className=""
                  >
                    Services
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="https://prestylengineering.com/services-details/13">
                        Structural Steel Detailing
                      </a>
                    </li>
                    <li>
                      <a href="https://prestylengineering.com/services-details/16">
                        PEB Design &amp; Detailing
                      </a>
                    </li>
                    <li>
                      <a href="https://prestylengineering.com/services-details/18">
                        Bridges/FOB's/ROB's Detailing Services
                      </a>
                    </li>
                    <li>
                      <a href="https://prestylengineering.com/services-details/15">
                        Architectural Services
                      </a>
                    </li>
                    <li>
                      <a href="https://prestylengineering.com/services-details/14">
                        BIM Services
                      </a>
                    </li>
                    <li>
                      <a href="https://prestylengineering.com/services-details/17">
                        Rebar Detailing
                      </a>
                    </li>
                    {/* <li><a href="https://prestylengineering.com/services-details">Bridges/FOB's/ROB's Detailing Services</a></li>
                                      <li><a href="#">BIM Services</a></li>
                                      <li><a href="#">Architectural Services</a></li>
                                      <li><a href="#">Structural Steel Detailing</a></li>
                                      <li><a href="#">PEB Design & Detailing</a></li> 
                                      <li><a href="#">Rebar Detailing</a></li> */}
                  </ul>
                </li>
                <li>
                  <a
                    href="https://prestylengineering.com/projects"
                    className=""
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="https://prestylengineering.com/dce-training"
                    className=""
                  >
                    DCE Training
                  </a>
                </li>
                <li>
                  <a href="https://prestylengineering.com/connect" className="">
                    Connect
                  </a>
                </li>
                <li className="d-flex justify-content-center">
                  <a
                    href="https://prestylengineering.com/connect"
                    className="link-2"
                  >
                    Get a Quotes
                  </a>
                </li>
              </ul>
            </div>
            {/* SITE SEARCH */}
            <div id="search">
              <span className="close" />
              <form
                role="search"
                id="searchform"
                action="https://theme7x.com/search"
                method="get"
                className="radius-xl"
              >
                <div className="input-group">
                  <input
                    defaultValue=""
                    name="q"
                    type="search"
                    placeholder="Type to search"
                  />
                  <span className="input-group-btn">
                    <button type="button" className="search-btn">
                      <i className="fa fa-search arrow-animation" />
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* HEADER END */}
    {/* CONTENT START */}
    <div className="page-content">
      {/* SLIDER START */}
      <div
        id="rev_slider_one_wrapper"
        className="rev_slider_wrapper fullscreen-container"
        data-alias="mask-showcase"
        data-source="gallery"
        style={{ background: "#aaaaaa", padding: 0 }}
      >
        {/* START REVOLUTION SLIDER 5.4.1 fullscreen mode */}
        <div
          id="rev_slider_one"
          className="rev_slider fullscreenbanner"
          style={{ display: "none" }}
          data-version="5.4.1"
        >
          <ul>
            {/* SLIDE 1 */}
            <li
              data-index="rs-70"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed={300}
              data-thumb="images/main-slider/slider2/slide3.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title=""
              data-param1={1}
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="https://prestylengineering.com/upload/homeabout/1700549772142.jpg"
                data-bgcolor="#f8f8f8"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                className="rev-slidebg"
                data-no-retina=""
              />
              {/* LAYER 1  right image overlay dark*/}
              <div
                className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup"
                id="slide-70-layer-1"
                data-x="['right','right','right','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontweight="['100','100','400','400']"
                data-width="['full','full','full','full']"
                data-height="['full','full','full','full']"
                data-whitespace="nowrap"
                data-type="shape"
                data-basealign="slide"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 6, backgroundColor: "rgba(0,0,0,30%)" }}
              ></div>
              {/* LAYER 3  Thin text title*/}
              <div
                className="tp-caption   tp-resizeme slider-tag-line"
                id="slide-70-layer-3"
                data-x="['left','left','left','center']"
                data-hoffset="['50','50','70','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-50','-50','-50','-50']"
                data-fontsize="['22',22','20','16']"
                data-lineheight="['26','26','26','22']"
                data-width="['700','650','620','380']"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                data-textalign="['left','left','left','center']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[20,20,20,20]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif'
                }}
              >
                Prestyl Engineering
              </div>
              {/* LAYER 4  Bold Title*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-70-layer-4"
                data-x="['left','left','left','center']"
                data-hoffset="['50','50','70','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['10','10','10','10']"
                data-fontsize="['40','40','60','40']"
                data-lineheight="['50','50','70','50']"
                data-width="['1000','1000','1000','90%']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                data-textalign="['left','left','left','center']"
                data-paddingtop="[20,20,20,20]"
                data-paddingright="[20,20,20,20]"
                data-paddingbottom="[30,30,30,30]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  textTransform: "uppercase",
                  whiteSpace: "normal",
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif'
                }}
              >
                Excellence
              </div>
              {/* LAYER 5  Paragraph*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-70-layer-5"
                data-x="['left','left','left','center']"
                data-hoffset="['50','50','70','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['80','80','80','80']"
                data-fontsize="['16','16','16','16']"
                data-lineheight="['22','22','22','22']"
                data-width="['600','600','600','380']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":3500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                data-textalign="['left','left','left','center']"
                data-paddingtop="[20,20,20,20]"
                data-paddingright="[20,20,20,20]"
                data-paddingbottom="[30,30,30,30]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  whiteSpace: "normal",
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif'
                }}
              >
                Explanation: Over 15 Years Of Industry Expertise Form The
                Foundation Of Our Commitment To Top-tier Engineering Solutions.
              </div>
              {/* LAYER 6  Read More*/}
              {/* <div class="tp-caption rev-btn  tp-resizeme" 
                          id="slide--layer-6" 
                          data-x="['left','left','left','center']" data-hoffset="['50','50','70','0']"  
                          data-y="['middle','middle','middle','middle']" data-voffset="['160','160','160','160']" 
                          data-width="none"
                          data-height="none"
                          data-whitespace="nowrap"                     
                          data-type="button" 
                          data-responsive_offset="on" 
      
                          data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":4000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                          
                          data-textAlign="['left','left','left','center']"
                          data-paddingtop="[0,0,0,0]"
                          data-paddingright="[0,0,0,0]"
                          data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]"
      
                          style="z-index:9; line-height:30px;"><a href="Javascript:;" class="site-button btn-half"><span> Read More</span></a></div>  */}
            </li>
            {/* SLIDE 1 */}
            <li
              data-index="rs-71"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed={300}
              data-thumb="images/main-slider/slider2/slide3.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title=""
              data-param1={1}
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="https://prestylengineering.com/upload/homeabout/1700918894999.jpg"
                data-bgcolor="#f8f8f8"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                className="rev-slidebg"
                data-no-retina=""
              />
              {/* LAYER 1  right image overlay dark*/}
              <div
                className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup"
                id="slide-71-layer-1"
                data-x="['right','right','right','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontweight="['100','100','400','400']"
                data-width="['full','full','full','full']"
                data-height="['full','full','full','full']"
                data-whitespace="nowrap"
                data-type="shape"
                data-basealign="slide"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 6, backgroundColor: "rgba(0,0,0,30%)" }}
              ></div>
              {/* LAYER 3  Thin text title*/}
              <div
                className="tp-caption   tp-resizeme slider-tag-line"
                id="slide-71-layer-3"
                data-x="['left','left','left','center']"
                data-hoffset="['50','50','70','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-50','-50','-50','-50']"
                data-fontsize="['22',22','20','16']"
                data-lineheight="['26','26','26','22']"
                data-width="['700','650','620','380']"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                data-textalign="['left','left','left','center']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[20,20,20,20]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif'
                }}
              >
                Prestyl Engineering
              </div>
              {/* LAYER 4  Bold Title*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-71-layer-4"
                data-x="['left','left','left','center']"
                data-hoffset="['50','50','70','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['10','10','10','10']"
                data-fontsize="['40','40','60','40']"
                data-lineheight="['50','50','70','50']"
                data-width="['1000','1000','1000','90%']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                data-textalign="['left','left','left','center']"
                data-paddingtop="[20,20,20,20]"
                data-paddingright="[20,20,20,20]"
                data-paddingbottom="[30,30,30,30]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  textTransform: "uppercase",
                  whiteSpace: "normal",
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif'
                }}
              >
                Projects
              </div>
              {/* LAYER 5  Paragraph*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-71-layer-5"
                data-x="['left','left','left','center']"
                data-hoffset="['50','50','70','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['80','80','80','80']"
                data-fontsize="['16','16','16','16']"
                data-lineheight="['22','22','22','22']"
                data-width="['600','600','600','380']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":3500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                data-textalign="['left','left','left','center']"
                data-paddingtop="[20,20,20,20]"
                data-paddingright="[20,20,20,20]"
                data-paddingbottom="[30,30,30,30]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  whiteSpace: "normal",
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif'
                }}
              >
                Explanation: Completion Of 1000+ Projects Showcases Our
                Dedication To Innovation And Delivering Exceptional Results.
              </div>
              {/* LAYER 6  Read More*/}
              {/* <div class="tp-caption rev-btn  tp-resizeme" 
                          id="slide--layer-6" 
                          data-x="['left','left','left','center']" data-hoffset="['50','50','70','0']"  
                          data-y="['middle','middle','middle','middle']" data-voffset="['160','160','160','160']" 
                          data-width="none"
                          data-height="none"
                          data-whitespace="nowrap"                     
                          data-type="button" 
                          data-responsive_offset="on" 
      
                          data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":4000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                          
                          data-textAlign="['left','left','left','center']"
                          data-paddingtop="[0,0,0,0]"
                          data-paddingright="[0,0,0,0]"
                          data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]"
      
                          style="z-index:9; line-height:30px;"><a href="Javascript:;" class="site-button btn-half"><span> Read More</span></a></div>  */}
            </li>
            {/* SLIDE 1 */}
            <li
              data-index="rs-72"
              data-transition="fade"
              data-slotamount="default"
              data-hideafterloop={0}
              data-hideslideonmobile="off"
              data-easein="default"
              data-easeout="default"
              data-masterspeed={300}
              data-thumb="images/main-slider/slider2/slide3.jpg"
              data-rotate={0}
              data-saveperformance="off"
              data-title=""
              data-param1={1}
              data-param2=""
              data-param3=""
              data-param4=""
              data-param5=""
              data-param6=""
              data-param7=""
              data-param8=""
              data-param9=""
              data-param10=""
              data-description=""
            >
              {/* MAIN IMAGE */}
              <img
                src="https://prestylengineering.com/upload/homeabout/1700918989497.jpg"
                data-bgcolor="#f8f8f8"
                alt=""
                data-bgposition="center center"
                data-bgfit="cover"
                data-bgrepeat="no-repeat"
                data-bgparallax="off"
                className="rev-slidebg"
                data-no-retina=""
              />
              {/* LAYER 1  right image overlay dark*/}
              <div
                className="tp-caption tp-shape tp-shapewrapper  rs-parallaxlevel-tobggroup"
                id="slide-72-layer-1"
                data-x="['right','right','right','center']"
                data-hoffset="['0','0','0','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['0','0','0','0']"
                data-fontweight="['100','100','400','400']"
                data-width="['full','full','full','full']"
                data-height="['full','full','full','full']"
                data-whitespace="nowrap"
                data-type="shape"
                data-basealign="slide"
                data-responsive_offset="off"
                data-responsive="off"
                data-frames='[{"from":"opacity:0;","speed":1500,"to":"o:1;","delay":150,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power2.easeInOut"}]'
                data-textalign="['left','left','left','left']"
                data-paddingtop="[0,0,0,0]"
                data-paddingright="[0,0,0,0]"
                data-paddingbottom="[0,0,0,0]"
                data-paddingleft="[0,0,0,0]"
                style={{ zIndex: 6, backgroundColor: "rgba(0,0,0,30%)" }}
              ></div>
              {/* LAYER 3  Thin text title*/}
              <div
                className="tp-caption   tp-resizeme slider-tag-line"
                id="slide-72-layer-3"
                data-x="['left','left','left','center']"
                data-hoffset="['50','50','70','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['-50','-50','-50','-50']"
                data-fontsize="['22',22','20','16']"
                data-lineheight="['26','26','26','22']"
                data-width="['700','650','620','380']"
                data-height="none"
                data-whitespace="nowrap"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":1500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                data-textalign="['left','left','left','center']"
                data-paddingtop="[10,10,10,10]"
                data-paddingright="[20,20,20,20]"
                data-paddingbottom="[10,10,10,10]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif'
                }}
              >
                Prestyl Engineering
              </div>
              {/* LAYER 4  Bold Title*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-72-layer-4"
                data-x="['left','left','left','center']"
                data-hoffset="['50','50','70','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['10','10','10','10']"
                data-fontsize="['40','40','60','40']"
                data-lineheight="['50','50','70','50']"
                data-width="['1000','1000','1000','90%']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":2500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                data-textalign="['left','left','left','center']"
                data-paddingtop="[20,20,20,20]"
                data-paddingright="[20,20,20,20]"
                data-paddingbottom="[30,30,30,30]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  textTransform: "uppercase",
                  whiteSpace: "normal",
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif'
                }}
              >
                Clients
              </div>
              {/* LAYER 5  Paragraph*/}
              <div
                className="tp-caption   tp-resizeme"
                id="slide-72-layer-5"
                data-x="['left','left','left','center']"
                data-hoffset="['50','50','70','0']"
                data-y="['middle','middle','middle','middle']"
                data-voffset="['80','80','80','80']"
                data-fontsize="['16','16','16','16']"
                data-lineheight="['22','22','22','22']"
                data-width="['600','600','600','380']"
                data-height="none"
                data-whitespace="normal"
                data-type="text"
                data-responsive_offset="on"
                data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":3500,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                data-textalign="['left','left','left','center']"
                data-paddingtop="[20,20,20,20]"
                data-paddingright="[20,20,20,20]"
                data-paddingbottom="[30,30,30,30]"
                data-paddingleft="[0,0,0,0]"
                style={{
                  zIndex: 10,
                  whiteSpace: "normal",
                  color: "#fff",
                  fontFamily: '"Poppins", sans-serif'
                }}
              >
                Explanation: Relationships With 50+ Satisfied Clients, Both
                Local And Global, Signify Our Commitment To Trust And Quality
                Services.
              </div>
              {/* LAYER 6  Read More*/}
              {/* <div class="tp-caption rev-btn  tp-resizeme" 
                          id="slide--layer-6" 
                          data-x="['left','left','left','center']" data-hoffset="['50','50','70','0']"  
                          data-y="['middle','middle','middle','middle']" data-voffset="['160','160','160','160']" 
                          data-width="none"
                          data-height="none"
                          data-whitespace="nowrap"                     
                          data-type="button" 
                          data-responsive_offset="on" 
      
                          data-frames='[{"from":"y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;",
                          "mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":4000,"to":"o:1;","delay":1000,"ease":"Power3.easeInOut"},
                          {"delay":"wait","speed":500,"to":"y:[-100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                          
                          data-textAlign="['left','left','left','center']"
                          data-paddingtop="[0,0,0,0]"
                          data-paddingright="[0,0,0,0]"
                          data-paddingbottom="[0,0,0,0]"
                          data-paddingleft="[0,0,0,0]"
      
                          style="z-index:9; line-height:30px;"><a href="Javascript:;" class="site-button btn-half"><span> Read More</span></a></div>  */}
            </li>
          </ul>
          <div
            className="tp-bannertimer"
            style={{ height: 10, background: "rgba(0, 0, 0, 0.15)" }}
          />
        </div>
      </div>
      {/* SLIDER END */}
      {/* ABOUT COMPANY START */}
      <div className="section-full mobile-page-padding ptb-60">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-6 ">
                <div className="about-left-img">
                  <img
                    src="https://prestylengineering.com/upload/homeabout/1700897499671.jpg"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-6">
                <div className="about-us-presyl">
                  <span className="site-sub-title">
                    Welcome to PRESTYL Engineering Services{" "}
                  </span>
                  <h3 className="mt-2 sx-tilte text-capitalize">
                    Empowering Excellence: Prestyl Engineering Services - Where
                    Innovation Meets Precision
                  </h3>
                  <p className="text-justify" />
                  <div>
                    <b>Prestyl Engineering Services (PES)</b> is a global leader
                    in Engineering, Structural Steel Detailing, Connection
                    Designing, and BIM solutions. With 15+ years of industry
                    expertise, we've delivered 1000+ successful projects,
                    earning trust from 25+ satisfied clients worldwide. Our
                    commitment lies in providing cutting-edge solutions,
                    integrating innovation and industry insights. PES thrives on
                    quality, timely deliveries, and exceeding client
                    expectations, cementing our position as a reliable partner
                    in the engineering landscape."
                  </div>
                  <div>
                    <br />
                  </div>
                  <div>
                    "At PES, our core strength lies in our dedicated team of
                    technical experts who bring forth a wealth of knowledge and
                    experience, ensuring the utmost reliability and
                    cost-effectiveness in our services.&nbsp;
                  </div>
                  <p />
                  <div className="row">
                    <div
                      className="text-center load-more-btn-outer pt-0"
                      style={{
                        backgroundImage:
                          "url(https://prestylengineering.com/assets/front/img/lines.png)"
                      }}
                    >
                      <button
                        className="site-button-secondry btn-half"
                        onclick="location.href='https://prestylengineering.com/about-us'"
                      >
                        <span>Read More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT COMPANY END */}
      {/* WE STRIVE EXCELLENCE START */}
      <div className="section-full mobile-page-padding ptb-60 bg-lightblue">
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div>
                  <h3 className="m-t0 sx-tilte text-capitalize">
                    What Set Us Unique
                  </h3>
                  <p>
                    With over 15+ years of experience, our team's industry
                    knowledge and dedication ensure consistent, high-quality
                    deliverables, setting us apart in the engineering landscape.
                  </p>
                  <div className="row">
                    <div
                      className="text-center load-more-btn-outer"
                      style={{
                        backgroundImage:
                          "url(https://prestylengineering.com/assets/front/img/lines.png)"
                      }}
                    >
                      <button
                        className="site-button-secondry btn-half"
                        onclick="location.href='https://prestylengineering.com/about-us'"
                      >
                        <span>Learn More</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="img-sec-col">
                      <div className="img-sec-col-img">
                        <img src="https://prestylengineering.com/assets/front/img/img-col-01.jpg" />
                      </div>
                      <div className="img-sec-col-head">
                        <h5>Innovative Approach</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="img-sec-col">
                      <div className="img-sec-col-img">
                        <img src="https://prestylengineering.com/assets/front/img/img-col-02.jpg" />
                      </div>
                      <div className="img-sec-col-head">
                        <h5>Tailored Precision</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WE STRIVE EXCELLENCE END */}
      {/* WHAT WE DO START */}
      <div className="section-full  mobile-page-padding bg-white ptb-60 abt-us">
        <div className="container">
          <div className="hilite-title text-left p-l50 text-uppercase">
            <strong>Services</strong>
          </div>
          <div className="large-title-block text-center">
            {/* TITLE START */}
            <div className="section-head">
              <div className="sx-separator-outer separator-center">
                <div className="sx-separator bg-white bg-moving bg-repeat-x">
                  <h3 className="sep-line-one">Our Services</h3>
                </div>
              </div>
            </div>
            {/* TITLE END */}
          </div>
          <div className="section-content mt-5">
            <div className="row number-block-two-outer">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="number-block-two animate-in-to-top mb-20 bdr-gray-light bdr-solid bdr-1 position-relative">
                  <div className="figcaption bg-white services-sec-pad">
                    <div className="data-secience-service-box-icone">
                      <img src="https://prestylengineering.com/upload/about/1701846987_steel-detailing.png" />
                    </div>
                    <h4 className="m-t0 elipse-2-lines mb-0">
                      Structural Steel Detailing
                    </h4>
                    <div className="elipse-3-lines mb-3">
                      <p>
                        We provide <b>Structural Steel Detailing</b> services
                        for industrial, commercial &amp; residential projects
                        using AutoCAD, SDS/2 &amp; Tekla Structures software. We
                        specializes in producing detailed structural steel
                        fabrication shop and erection drawings that follow
                        clients’ customized standards while maintaining the
                        guidelines set by AISC, NISD and OSHA.
                        <br />
                      </p>
                      <p>
                        <b>Structural Steel Detailing Services:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Shop drawing creation</li>
                        <li>&nbsp; &nbsp;Comprehensive detailing</li>
                        <li>&nbsp; &nbsp;Alignment assurance</li>
                        <li>&nbsp; &nbsp;Blueprint for fabrication</li>
                      </ul>
                      <p>
                        <b>Technical Expertise:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Precision and accuracy</li>
                        <li>&nbsp; &nbsp;Adherence to specifications</li>
                      </ul>
                      <p>
                        <b>Ensuring Structural Integrity:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Test of time</li>
                        <li>&nbsp; &nbsp;Foundational groundwork</li>
                      </ul>
                      <p>
                        <b>Safety and Compliance:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Adherence to safety standards</li>
                        <li>&nbsp; &nbsp;Project specification compliance</li>
                      </ul>
                    </div>
                    <a
                      href="https://prestylengineering.com/services-details/13"
                      className="site-button-link"
                    >
                      Read More
                    </a>
                    <div className="figcaption-number animate-in-to-top-content">
                      <span>01</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="number-block-two animate-in-to-top mb-20 bdr-gray-light bdr-solid bdr-1 position-relative">
                  <div className="figcaption bg-white services-sec-pad">
                    <div className="data-secience-service-box-icone">
                      <img src="https://prestylengineering.com/upload/about/1701845439_1701685253_bim-services.png" />
                    </div>
                    <h4 className="m-t0 elipse-2-lines mb-0">BIM Services</h4>
                    <div className="elipse-3-lines mb-3">
                      <p>
                        We offer <b>BIM Modeling</b> &amp; 2D drafting services
                        for AEC industry. With a team of skilled professionals
                        and a deep understanding of worldwide building and
                        construction standards, latest software tools are
                        utilized to deliver accurate high-quality drawings on
                        time. We have a skilled and specialized modeling team
                        headed by a senior project manager and experienced
                        modeler to provide innovative and highly professional
                        BIM services to all kinds of industrial, commercial and
                        residential projects. We deliver innovative and cost
                        effective BIM Services. We use our expertise and the
                        latest model-based technology to solve complex problems
                        in construction, streamlining its process. We reduce
                        risk, cost, time, waste and energy from your project by
                        applying BIM services.
                        <br />
                      </p>
                      <p>
                        <b>BIM Services Overview:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Unified digital platform</li>
                        <li>&nbsp; &nbsp;Visualization of project aspects</li>
                      </ul>
                      <p>
                        <b>Collaboration and Efficiency:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Enhanced stakeholder collaboration</li>
                        <li>&nbsp; &nbsp;Workflow optimization</li>
                      </ul>
                      <p>
                        <b>Intelligent Decision Support:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Decision optimization</li>
                        <li>&nbsp; &nbsp; Error reduction</li>
                      </ul>
                      <p>
                        <b>Project Lifecycle Transformation:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Comprehensive project management</li>
                        <li>&nbsp; &nbsp;Precision and timely delivery</li>
                      </ul>
                    </div>
                    <a
                      href="https://prestylengineering.com/services-details/14"
                      className="site-button-link"
                    >
                      Read More
                    </a>
                    <div className="figcaption-number animate-in-to-top-content">
                      <span>02</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="number-block-two animate-in-to-top mb-20 bdr-gray-light bdr-solid bdr-1 position-relative">
                  <div className="figcaption bg-white services-sec-pad">
                    <div className="data-secience-service-box-icone">
                      <img src="https://prestylengineering.com/upload/about/1701846722_architecture-01.png" />
                    </div>
                    <h4 className="m-t0 elipse-2-lines mb-0">
                      Architectural Services
                    </h4>
                    <div className="elipse-3-lines mb-3">
                      <p>
                        Our <b>Architectural</b> Team supports projects of any
                        nature and at any stage of the project, utilizing
                        international codes and standards. We have partnered
                        with our clients from the concept phase through the
                        detailed design and construction drawings phases. In
                        select projects, we have supported our clients in the
                        construction phases as required by our clients. We are
                        experts in producing CAD services using latest
                        technology tools.
                        <br />
                      </p>
                      <p>
                        <b>Design Creation and Development:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Imaginative and functional spaces</li>
                        <li>
                          &nbsp; &nbsp;Transforming visions into tangible
                          designs
                        </li>
                        <li>
                          &nbsp; &nbsp;Harmonizing aesthetics with functionality
                        </li>
                      </ul>
                      <p>
                        <b>Creative Expertise and Technical Precision:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Architectural blueprint creation</li>
                        <li>
                          &nbsp; &nbsp;Blending creativity with technical
                          proficiency
                        </li>
                      </ul>
                      <p>
                        <b>Attention to Detail and Experience:</b>
                      </p>
                      <ul>
                        <li>
                          &nbsp; &nbsp;Meticulous crafting of every element
                        </li>
                        <li>
                          &nbsp; &nbsp;Reflecting structure and experience
                          through design
                        </li>
                      </ul>
                      <p>
                        <b>Creation of Meaningful Environments:</b>
                      </p>
                      <ul>
                        <li>&nbsp; &nbsp;Designing beyond brick and mortar</li>
                        <li>
                          &nbsp; &nbsp;Creating environments that tell stories
                          and enhance lives
                        </li>
                      </ul>
                      <div>
                        <br />
                      </div>
                    </div>
                    <a
                      href="https://prestylengineering.com/services-details/15"
                      className="site-button-link"
                    >
                      Read More
                    </a>
                    <div className="figcaption-number animate-in-to-top-content">
                      <span>03</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div
                className="text-center load-more-btn-outer"
                style={{
                  backgroundImage:
                    "url(https://prestylengineering.com/assets/front/img/lines.png)"
                }}
              >
                <button
                  className="site-button-secondry btn-half"
                  onclick="location.href='https://prestylengineering.com/services'"
                >
                  <span>All Services</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WHAT WE DO END */}
      {/* WHAT WE DO START */}
      <div className="section-full  mobile-page-padding bg-white ptb-60 overflow-hidden">
        <div className="container right-half-bg-image-outer">
          <div
            className="right-half-bg-image bg-parallax bg-fixed bg-top-right"
            data-stellar-background-ratio={0}
            style={{
              backgroundImage:
                "url(https://prestylengineering.com/assets/front/img/banner-img-03.jpg)"
            }}
          />
          <div className="section-content">
            {/* TITLE START */}
            <div className="section-head">
              <div className="sx-separator-outer separator-left">
                <div className="sx-separator bg-white bg-moving bg-repeat-x">
                  <h3 className="sep-line-one">Our Projects</h3>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            <div className="row number-block-one-outer justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="number-block-one animate-in-to-top text-center">
                  <a href="javascript:void(0);">
                    <img
                      src="https://prestylengineering.com/upload/about/1701849466_project-02.jpg"
                      alt=""
                    />
                  </a>
                  <div className="figcaption bg-white text-center p-a20">
                    {/* <h4 class="m-a0">Eco Duralite(Kolhar)</h4>
                                  <p class="color-blue">55m X 117m, 8.5m Ht.</p> */}
                  </div>
                  <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                    <span>1</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="number-block-one animate-in-to-top text-center">
                  <a href="javascript:void(0);">
                    <img
                      src="https://prestylengineering.com/upload/about/1701849410_project-01.jpg"
                      alt=""
                    />
                  </a>
                  <div className="figcaption bg-white text-center p-a20">
                    {/* <h4 class="m-a0">Eco Duralite(Kolhar)</h4>
                                  <p class="color-blue">55m X 117m, 8.5m Ht.</p> */}
                  </div>
                  <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                    <span>2</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                <div className="number-block-one animate-in-to-top text-center">
                  <a href="javascript:void(0);">
                    <img
                      src="https://prestylengineering.com/upload/about/1701849503_project-02.jpg"
                      alt=""
                    />
                  </a>
                  <div className="figcaption bg-white text-center p-a20">
                    {/* <h4 class="m-a0">Eco Duralite(Kolhar)</h4>
                                  <p class="color-blue">55m X 117m, 8.5m Ht.</p> */}
                  </div>
                  <div className="figcaption-number text-center sx-text-primary animate-in-to-top-content">
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="large-title-block full-content bg-gray">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="large-title">
                    <h3 className="m-tb0">
                      Transforming Visions into Architectural Marvels, One
                      Detail at a Time.
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12  col-sm-12">
                  <div className="large-title-info">
                    <p>
                      PES It encapsulates the meticulous attention given to each
                      detail, promising clients that their visions will be
                      translated into magnificent structures through careful
                      planning and execution.
                    </p>
                    <div className="text-left">
                      <a
                        href="https://prestylengineering.com/projects"
                        className="site-button-link"
                      >
                        View More Projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WHAT WE DO END */}
      {/* COUNTER START */}
      <section className="bg-gray-sec-fifty">
        <div className="section-full container">
          <div className="section-content">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 bg-cover bg-no-repeat">
                <div className="sx-left-part mobile-page-padding">
                  <div className="counter-blocks">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                        <div className="sx-count bx-shadow-ex  text-black sx-icon-box-wraper bg-white p-a30">
                          <h2 className="st-count-number sx-text-primary text-left">
                            <span className="counter">50</span>
                            <span>+</span>
                          </h2>
                          <h6 className="m-tb0">Our Customers</h6>
                        </div>
                      </div>
                      {/* <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter">Our Customers</span><span>+</span></h2>
                                          <h6 class="m-tb0">Projects Completed</h6>
                                      </div>
                                  </div>
                                  
                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter"></span><span>+</span></h2>
                                          <h6 class="m-tb0">Steel Used</h6>
                                      </div> 
                                  </div>
                                  
                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter">
                                              

                                          </span><span>+</span></h2>
                                          <h6 class="m-tb0">Our Customers</h6>
                                      </div> 
                                    
                                  </div>  */}
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                        <div className="sx-count bx-shadow-ex  text-black sx-icon-box-wraper bg-white p-a30">
                          <h2 className="st-count-number sx-text-primary text-left">
                            <span className="counter">15</span>
                            <span>+</span>
                          </h2>
                          <h6 className="m-tb0">Years Experience</h6>
                        </div>
                      </div>
                      {/* <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter">Years Experience</span><span>+</span></h2>
                                          <h6 class="m-tb0">Projects Completed</h6>
                                      </div>
                                  </div>
                                  
                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter"></span><span>+</span></h2>
                                          <h6 class="m-tb0">Steel Used</h6>
                                      </div> 
                                  </div>
                                  
                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter">
                                              

                                          </span><span>+</span></h2>
                                          <h6 class="m-tb0">Our Customers</h6>
                                      </div> 
                                    
                                  </div>  */}
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                        <div className="sx-count bx-shadow-ex  text-black sx-icon-box-wraper bg-white p-a30">
                          <h2 className="st-count-number sx-text-primary text-left">
                            <span className="counter">1000</span>
                            <span>+</span>
                          </h2>
                          <h6 className="m-tb0">Projects Completed</h6>
                        </div>
                      </div>
                      {/* <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter">Projects Completed</span><span>+</span></h2>
                                          <h6 class="m-tb0">Projects Completed</h6>
                                      </div>
                                  </div>
                                  
                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter"></span><span>+</span></h2>
                                          <h6 class="m-tb0">Steel Used</h6>
                                      </div> 
                                  </div>
                                  
                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter">
                                              

                                          </span><span>+</span></h2>
                                          <h6 class="m-tb0">Our Customers</h6>
                                      </div> 
                                    
                                  </div>  */}
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                        <div className="sx-count bx-shadow-ex  text-black sx-icon-box-wraper bg-white p-a30">
                          <h2 className="st-count-number sx-text-primary text-left">
                            <span className="counter">25</span>
                            <span>+</span>
                          </h2>
                          <h6 className="m-tb0">Clients</h6>
                        </div>
                      </div>
                      {/* <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter">Clients</span><span>+</span></h2>
                                          <h6 class="m-tb0">Projects Completed</h6>
                                      </div>
                                  </div>
                                  
                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter">100</span><span>+</span></h2>
                                          <h6 class="m-tb0">Steel Used</h6>
                                      </div> 
                                  </div>
                                  
                                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 m-b30">
                                      <div class="sx-count bx-shadow-ex text-black sx-icon-box-wraper bg-white p-a30">
                                          <h2 class="st-count-number sx-text-primary text-left"><span class="counter">
                                              50

                                          </span><span>+</span></h2>
                                          <h6 class="m-tb0">Our Customers</h6>
                                      </div> 
                                    
                                  </div>  */}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-12"
                style={{
                  backgroundImage:
                    "url(https://prestylengineering.com/assets/front/img/bg-counter-side.jpg)"
                }}
              >
                <div className="sx-right-part mobile-page-padding  p-t80 p-b50">
                  <div className="about-home-left">
                    <h3 className="m-t0 sx-tilte">
                      Engineering Excellence, Building Trust, Inspiring
                      Transformations
                    </h3>
                    <p>
                      Having catered to 24 esteemed clients and successfully
                      completed 340 diverse projects, we've utilized 86 units of
                      steel, transforming aspirations into tangible structures.
                      Our dedication extends to the satisfaction of over 36,000
                      customers, reflecting our commitment to excellence. Each
                      project signifies our relentless pursuit of quality and
                      precision, ensuring that every client's vision is not just
                      realized but surpassed, cementing our reputation as
                      trusted industry leaders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COUNTER  END */}
      <div className="section-full mobile-page-padding ptb-60">
        <div className="section-content">
          <div className="container">
            <h4 className="text-center heading-details-steel">
              Driven by excellence, our team ensures superior project
              management, affordable solutions, and professionalism at every
              step.
            </h4>
            <div className="row">
              <div className="col-lg-4">
                <div className="text-center">
                  <img src="https://prestylengineering.com/assets/front/img/project-management-01.png" />
                  <h6 className="text-capitalize">Best Project Management</h6>
                  <p>
                    Experience top-tier project management solutions rooted in
                    industry expertise and efficiency, ensuring seamless
                    execution and success.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-center">
                  <img src="https://prestylengineering.com/assets/front/img/project-management-02.png" />
                  <h6 className="text-capitalize">Affordable Solutions</h6>
                  <p>
                    Access cost-effective solutions crafted to meet your needs,
                    ensuring quality without compromise within budget-friendly
                    options.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-center">
                  <img src="https://prestylengineering.com/assets/front/img/project-management-03.png" />
                  <h6 className="text-capitalize">Professional Team</h6>
                  <p>
                    Our seasoned team brings professionalism and expertise to
                    every project, ensuring reliability and excellence in every
                    endeavour.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONIAL START */}
      {/* TESTIMONIAL  END */}
      {/* OUR SPECIALLIZATION START */}
      <div className="section-full mobile-page-padding ptb-60 pt-0 bg-white bg-change-section">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head">
            <div className="about-us-presyl text-center">
              <span className="site-sub-title">Lorem Ipsum is simply</span>
              <h3 className="mt-2 sx-tilte text-capitalize">
                Recent Services Gallery
              </h3>
            </div>
          </div>
          {/* TITLE END */}
        </div>
        <div className="owl-carousel service-slider-two owl-btn-vertical-center">
          <div className="item">
            <div
              className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper"
              style={{
                backgroundImage:
                  "url(https://prestylengineering.com/upload/homeabout/1701190835010.jpg)"
              }}
            >
              <div className="overlay-main bg-black opacity-05" />
              <div className="bg-content-mid-outer">
                <div className="bg-content-mid">
                  <div className="sx-icon-box-wraper center   text-white">
                    <div className="icon-content">
                      <h4 className="sx-tilte">
                        {" "}
                        <a href="#" className="sx-text-white">
                          BIM Services
                        </a>
                      </h4>
                    </div>
                  </div>
                  <span className="bgcall-block-number">01</span>
                  <div className="bg-overlay" />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper"
              style={{
                backgroundImage:
                  "url(https://prestylengineering.com/upload/homeabout/1701190880211.jpg)"
              }}
            >
              <div className="overlay-main bg-black opacity-05" />
              <div className="bg-content-mid-outer">
                <div className="bg-content-mid">
                  <div className="sx-icon-box-wraper center   text-white">
                    <div className="icon-content">
                      <h4 className="sx-tilte">
                        {" "}
                        <a href="#" className="sx-text-white">
                          Architecture Services
                        </a>
                      </h4>
                    </div>
                  </div>
                  <span className="bgcall-block-number">02</span>
                  <div className="bg-overlay" />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper"
              style={{
                backgroundImage:
                  "url(https://prestylengineering.com/upload/homeabout/1701190914147.jpg)"
              }}
            >
              <div className="overlay-main bg-black opacity-05" />
              <div className="bg-content-mid-outer">
                <div className="bg-content-mid">
                  <div className="sx-icon-box-wraper center   text-white">
                    <div className="icon-content">
                      <h4 className="sx-tilte">
                        {" "}
                        <a href="#" className="sx-text-white">
                          Structural Steel Detailing
                        </a>
                      </h4>
                    </div>
                  </div>
                  <span className="bgcall-block-number">03</span>
                  <div className="bg-overlay" />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper"
              style={{
                backgroundImage:
                  "url(https://prestylengineering.com/upload/homeabout/1701190949547.jpg)"
              }}
            >
              <div className="overlay-main bg-black opacity-05" />
              <div className="bg-content-mid-outer">
                <div className="bg-content-mid">
                  <div className="sx-icon-box-wraper center   text-white">
                    <div className="icon-content">
                      <h4 className="sx-tilte">
                        {" "}
                        <a href="#" className="sx-text-white">
                          PEB Design &amp; Detailing
                        </a>
                      </h4>
                    </div>
                  </div>
                  <span className="bgcall-block-number">04</span>
                  <div className="bg-overlay" />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper"
              style={{
                backgroundImage:
                  "url(https://prestylengineering.com/upload/homeabout/1701190987923.jpg)"
              }}
            >
              <div className="overlay-main bg-black opacity-05" />
              <div className="bg-content-mid-outer">
                <div className="bg-content-mid">
                  <div className="sx-icon-box-wraper center   text-white">
                    <div className="icon-content">
                      <h4 className="sx-tilte">
                        {" "}
                        <a href="#" className="sx-text-white">
                          Rebar Detailing
                        </a>
                      </h4>
                    </div>
                  </div>
                  <span className="bgcall-block-number">05</span>
                  <div className="bg-overlay" />
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div
              className="bgcall-block d-flex flex-wrap justify-content-center align-content-end bg-cover overlay-wraper"
              style={{
                backgroundImage:
                  "url(https://prestylengineering.com/upload/homeabout/1701191103828.jpeg)"
              }}
            >
              <div className="overlay-main bg-black opacity-05" />
              <div className="bg-content-mid-outer">
                <div className="bg-content-mid">
                  <div className="sx-icon-box-wraper center   text-white">
                    <div className="icon-content">
                      <h4 className="sx-tilte">
                        {" "}
                        <a href="#" className="sx-text-white">
                          Bridge
                        </a>
                      </h4>
                    </div>
                  </div>
                  <span className="bgcall-block-number">06</span>
                  <div className="bg-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR SPECIALLIZATION END */}
      {/* CONTACT FORM START */}
      <div
        className="section-full p-tb80 mobile-page-padding bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #fffffff5 50%, #1E1E2000 82%), url(https://prestylengineering.com/assets/front/img/bg-contact-us.jpg)",
          backgroundSize: "cover"
        }}
      >
        <div className="section-content">
          <div className="container get-in-touch-form">
            <div className="row"></div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div
                  className="contact-home1-left-v2 shadow-lg bg-white p-a30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right bottom, #ffffff94, #ffffff73), url(https://prestylengineering.com/assets/front/img/form-bg-texture.jpg)"
                  }}
                >
                  <form
                    className="form-transparent"
                    method="post"
                    action="https://prestylengineering.com/contact-form-submit"
                    encType="multipart/form-data"
                  >
                    <div className="input input-animate">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="username"
                        id="name"
                        required=""
                      />
                      <span className="spin" />
                    </div>
                    <div className="input input-animate">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" required="" />
                      <span className="spin" />
                    </div>
                    <div className="input input-animate">
                      <label htmlFor="Phone">Phone</label>
                      <input type="text" name="phone" id="Phone" required="" />
                      <span className="spin" />
                    </div>
                    <div className="input input-animate">
                      <label htmlFor="Subject">Subject</label>
                      <input type="text" name="subject" id="Subject" />
                      <span className="spin" />
                    </div>
                    <div className="input input-animate">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" defaultValue={""} />
                      <span className="spin" />
                    </div>
                    <div className="row">
                      <div className="text-center load-more-btn-outer">
                        <button
                          className="site-button-secondry btn-half"
                          fdprocessedid="2tqstb"
                        >
                          <span>Send Message</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CONTACT FORM  END */}
    </div>
    {/* CONTENT END */}
    {/* FOOTER START */}
    <footer className="footer-large  footer-dark">
      {/* FOOTER BLOCKES START */}
      <div className="footer-top bg-cover">
        <div className="overlay-main sx-bg-secondry opacity-08" />
        <div className="container">
          <div className="row">
            {/* ABOUT COMPANY */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget_about">
                {/*<h4 class="widget-title">About Company</h4>*/}
                <div className="logo-footer clearfix p-b15">
                  <img
                    src="https://prestylengineering.com/assets/front/img/logo.png"
                    width={110}
                    alt=""
                  />
                </div>
                <p>
                  Experience Excellence with PRESTYL Engineering Services |
                  Connect for Solutions | Let's Create Success Together!
                </p>
                <ul className="social-icons  sx-social-links">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/prestylengineeringservices/posts/?feedView=all&viewAsMember=true"
                      className="fa fa-linkedin"
                    />
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/people/PreStyl-Engineering/100083182218437/"
                      className="fa fa-facebook"
                    />
                  </li>
                  {/* <li><a href="javascript:void(0);" class="fa fa-twitter"></a></li> */}
                  <li>
                    <a href="javascript:void(0);" className="fa fa-instagram" />
                  </li>
                </ul>
              </div>
            </div>
            {/* RESENT POST */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget_services inline-links">
                <h5 className="widget-title">Useful links</h5>
                <ul>
                  <li>
                    <a
                      href="https://prestylengineering.com/"
                      className="footer-menu-active"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://prestylengineering.com/about-us"
                      className=""
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://prestylengineering.com/projects"
                      className=""
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://prestylengineering.com/services"
                      className=""
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://prestylengineering.com/connect"
                      className=""
                    >
                      Connect
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* USEFUL LINKS */}
            <div className="col-lg-3 col-md-6 col-sm-6 footer-col-3">
              <div className="widget widget_services inline-links">
                <h5 className="widget-title">Our Services</h5>
                <ul>
                  <li>
                    <a href="#">Bridges/FOB's/ROB's Detailing Services</a>
                  </li>
                  <li>
                    <a href="#">BIM Services</a>
                  </li>
                  <li>
                    <a href="#">Architectural Services</a>
                  </li>
                  <li>
                    <a href="#">Structural Steel Detailing</a>
                  </li>
                  <li>
                    <a href="#">PEB Design &amp; Detailing</a>
                  </li>
                  <li>
                    <a href="#">Rebar Detailing</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* CONTACT US */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="widget widget_address_outer">
                <h5 className="widget-title">Contact Us</h5>
                <li className="call-sec text-capitalize list-unstyled">
                  <h6 className="fothdng fothdnglst">India Office:</h6>
                  <a href="#" className="text-white">
                    Flat No.301, Scon Apartment, Rawet, Pune-412101
                  </a>
                  <br />
                  <a href="tel:+91-9503725086" className="text-white">
                    +91-9503725086
                  </a>
                </li>
                <li className="call-sec text-capitalize list-unstyled">
                  <h6 className="fothdng fothdnglst mt-3">UK Office:</h6>
                  <a href="#" className="text-white">
                    71-75 Shelton Street Covent Garden London WC2H 9JQ
                  </a>
                  <br />
                  <a href="tel:+44 333 011 3380" className="text-white">
                    +44 333 011 3380
                  </a>
                </li>
                <li className="call-sec text-capitalize list-unstyled">
                  <h6 className="fothdng fothdnglst mt-3">USA Office:</h6>
                  <a href="#" className="text-white">
                    4800 Express Drive, Charlotte, NC 28208
                  </a>
                  <br />
                  <a href="tel:+1-704.469.3380" className="text-white">
                    +1-704.469.3380
                  </a>
                </li>
                {/*  <li class="call-sec text-capitalize list-unstyled mb-2">
                  <h6 class="fothdng fothdnglst">Address:</h6>
                  <a href="#" class="text-white">Flat No.301, Scon Apartment, Rawet, Pune-412101.</a>
              </li> */}
                <li className="call-sec text-capitalize list-unstyled">
                  <h6 className="fothdng fothdnglst mt-3">Email</h6>
                  <a
                    href="mailto:project@prestylengineering.com"
                    className="text-white text-lowercase"
                  >
                    project@prestylengineering.com
                  </a>
                  <a
                    href="mailto:design@prestylengineering.com"
                    className="text-white text-lowercase"
                  >
                    design@prestylengineering.com
                  </a>
                  <a
                    href="mailto:contact@prestylengineering.com"
                    className="text-white text-lowercase"
                  >
                    contact@prestylengineering.com
                  </a>
                </li>
                {/* <li class="call-sec text-capitalize list-unstyled">
                  <h6 class="fothdng fothdnglst mt-3">Phone</h6>
                  <a href="tel:+91-9503725086" class="text-white">+91-9503725086</a>
              </li> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER COPYRIGHT */}
      <div className="footer-bottom overlay-wraper">
        <div className="overlay-main" />
        <div className="container">
          <div className="row">
            <div className="sx-footer-bot-left">
              <span className="copyrights-text text-dark">
                © 2024 <strong>prestylengineering</strong>. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* FOOTER END */}
    {/* BUTTON TOP START */}
    <button className="scroltop">
      <span className="fa fa-angle-up  relative" id="btn-vibrate" />
    </button>
  </div>
  {/* LOADING AREA START ===== */}
  {/* <div class="loading-area">
    <div class="loading-box"></div>
    <div class="loading-pic">
  <div class="cssload-spinner">
      <div class="cssload-cube cssload-cube0"></div>
      <div class="cssload-cube cssload-cube1"></div>
      <div class="cssload-cube cssload-cube2"></div>
      <div class="cssload-cube cssload-cube3"></div>
      <div class="cssload-cube cssload-cube4"></div>
      <div class="cssload-cube cssload-cube5"></div>
      <div class="cssload-cube cssload-cube6"></div>
      <div class="cssload-cube cssload-cube7"></div>
      <div class="cssload-cube cssload-cube8"></div>
      <div class="cssload-cube cssload-cube9"></div>
      <div class="cssload-cube cssload-cube10"></div>
      <div class="cssload-cube cssload-cube11"></div>
      <div class="cssload-cube cssload-cube12"></div>
      <div class="cssload-cube cssload-cube13"></div>
      <div class="cssload-cube cssload-cube14"></div>
      <div class="cssload-cube cssload-cube15"></div>
  </div>
    </div>
</div> */}
  {/* LOADING AREA  END ====== */}
  {/* JAVASCRIPT  FILES ========================================= */}
  {/* JQUERY.MIN JS */}
  {/* POPPER.MIN JS */}
  {/* BOOTSTRAP.MIN JS */}
  {/* Form js */}
  {/* MAGNIFIC-POPUP JS */}
  {/* WAYPOINTS JS */}
  {/* COUNTERUP JS */}
  {/* sticky header JS */}
  {/* MASONRY  */}
  {/* OWL  SLIDER  */}
  {/* PARALLAX BG IMAGE   */}
  {/* FORM JS */}
  {/* CUSTOM FUCTIONS  */}
  {/* BACKGROUND SCROLL */}
  {/*sticky content*/}
  {/* SWITCHER FUCTIONS  */}
  {/* Price range slider */}
  {/* STYLE SWITCHER  ======= */}
  <div className="styleswitcher">
    <div className="styleswitcher-inner">
      <h6 className="switcher-title">Color Skin</h6>
      <ul className="color-skins">
        <li>
          <a
            className="theme-skin skin-1"
            href="index-2a39b.html?theme=css/skin/skin-1"
          />
        </li>
        <li>
          <a
            className="theme-skin skin-2"
            href="index-261e7.html?theme=css/skin/skin-2"
          />
        </li>
        <li>
          <a
            className="theme-skin skin-3"
            href="index-2cce5.html?theme=css/skin/skin-3"
          />
        </li>
        <li>
          <a
            className="theme-skin skin-4"
            href="index-213f7.html?theme=css/skin/skin-4"
          />
        </li>
        <li>
          <a
            className="theme-skin skin-5"
            href="index-219a6.html?theme=css/skin/skin-5"
          />
        </li>
        <li>
          <a
            className="theme-skin skin-6"
            href="index-2fe5c.html?theme=css/skin/skin-6"
          />
        </li>
        <li>
          <a
            className="theme-skin skin-7"
            href="index-2ab47.html?theme=css/skin/skin-7"
          />
        </li>
        <li>
          <a
            className="theme-skin skin-8"
            href="index-25f8d.html?theme=css/skin/skin-8"
          />
        </li>
        <li>
          <a
            className="theme-skin skin-9"
            href="index-25663.html?theme=css/skin/skin-9"
          />
        </li>
        <li>
          <a
            className="theme-skin skin-10"
            href="index-228ac.html?theme=css/skin/skin-10"
          />
        </li>
      </ul>
    </div>
  </div>
  {/* STYLE SWITCHER END ==== */}
  {/* REVOLUTION JS FILES */}
  {/* SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) */}
  {/* REVOLUTION SLIDER SCRIPT FILES */}
</>

    
  );
}

export default App;
