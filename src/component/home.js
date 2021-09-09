
import headless1 from './headless1.jpeg'
import React from 'react'
 import './style.css'

 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
import  homepic from './homep.png'
import abt1 from './abt1.png'
import ecom from './ecom.jpg'
import img23 from './23.png'
import img34 from './34.png'
import img37 from './37.png'
import img39 from './39.png'
import ecommerce from './e commerce.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

 //import headless from './headless-commerce.jpg'











export function Home (){
 


  
const naveslide =()=>{
  const burger = document.querySelector('.burger');

//   const nav = document.querySelector('.navlink');

// burger.addEventListener('onclick' , ()=> {
// nav.classList.toggle('.nav-active')
// });
}
  naveslide()


 
 return(
<div> 




<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>


<div >
<nav className="sticky-header" >

<div data-aos="fade-right"  className="logo">  
  <h3> <b>E-Commerce</b>
</h3> 
  </div>

      <ul data-aos="fade-down"   className="navlink" >
     

      <li><a href="#solutions">SOLUTIONS</a></li>
            <li><a href="#pricing">PRICING </a></li>
            <li><a href="#cases">CASES </a></li>
            <li><a href="#careers">CAREERS </a></li>
            <li><a href="#resources">RESOURCES </a></li>
            <li><a >   <button type="button" class="btn btn-dark">GET START</button> </a></li>
      </ul>
     
 <div className="burger" >
<div className="line1" ></div>
<div className="line2" ></div>
<div className="line3" ></div>


 </div>
</nav>
</div>
<div id="backgolorh">
<div className=" mb-3" >
  <div className="row g-0">
  
    <div className="col-md-8">
      <div data-aos="fade-up" className="card-body">
     <h2  id="Headless" >Headless E-Commerce</h2>
         <h3 id="Custom"> Your Connected  <br/>  Custom Storefront</h3>
         <h5 id="Seamlessly"> <b>Seamlessly integrate all your operations software </b></h5>
         <br/>
         <h5 id="through"> <b>through a single platform.</b></h5>
         <br/>
         <button type="button" class="btn1 btn-dark">GET START</button>
          </div>

    </div>
    <div data-aos="zoom-in" className="col-md-4">
      <img src={homepic} className="img-fluid rounded-start" alt="..."/>
    </div>
  </div>
</div>
</div>




<section id="about">
<div id="aboutbakc">
<div className=" mb-3" >

  <div className="row g-0">
  <div className="col-md-4">
      <img  data-aos="fade-in-up" src={abt1} className="fluid rounded-start" alt="..."/> 
    </div>
  <div className="col-md-8">

    <h1  id="text"  data-aos="fade-up" >What is a Headless<br/> E-commerce?</h1>

      <div data-aos="fade-in-up" className="card-body">
        
        <p className="text">Headless e-commerce gives you complete control across all your<br/> software endpoints for a connected customer experience.  </p>
        <p className="text">Shuup’s API connections let you connect to all your<br/> commerce operations software including shipping, ERP, inventory manegement, AI, <br/>virtual reality storefronts, and more. </p>
        <p className="text">Build your storefront with any CMS or front-end technology,<br/> and connect to any backend software tools. As your technology landscape<br/> changes with your store, Shuup e-commerce helps keep everything <br/> in perfect sync. </p>
     
  
    </div>
    </div>
  </div>
  </div>
</div>
</section>

































<section id="">
<div className="backc" >
  <br/>

<div  data-aos="fade-up">
<h3 id="h3">Scalable</h3>
<p id="p3" > As your commerce software changes with <br/> twchnology advancement, you can easily adjust <br/> your headless commerce operation to stay ahead< br/> of trands.</p>
<h9 id="STARTED" >GET STARTED  </h9>
</div>

<div  data-aos="fade-up">
<h3 id="h4">Customizable</h3>
<p id="p4"> Easy and quick customizations through new <br/> connection to outside software tools. Add and <br/> remove features at any time.</p>
<h9 id="STARTED2" >GET STARTED  </h9>
</div>
<div  data-aos="fade-up">
<h3 id="h7">Efficiant Development </h3>
<p id="p7" > Simultaneously work on your frontend and back- <br/> end or any of your connected software. <br/> Push individual changes any time.</p>
<h9 id="STARTED3" >GET STARTED  </h9>
</div>
<div  data-aos="fade-up">
<h3 id="h8">ios and Android Apps  </h3>
<p id="p8" > Build and connect to native mobile apps for ios <br/> and Android. You can word on all versions at the<br/> same time    .</p>
<h9 id="STARTED4" >GET STARTED  </h9>
</div>
</div>
</section>
























<section id="Contact">
<div className="row g-2">
  <img id="ecom" src={headless1}/>
   <div data-aos="fade-up" id="bakc">
 <h1  id="headless"> <b>Talk to us about moving to headless <br/>  <h1 id="commerce"> e-commerce.</h1></b></h1> 
 <p   id="discussion">Schedule a one-on-one discussion with one of our e-commerce experts to bring your multivendor innovation to</p>
   </div>
   
    </div>
</section>

















<div>





<div  data-aos="fade-down" class="row row-cols-1 row-cols-md-3 g-4">
<div>
<p id="bilt">SOME OF OUR BUILT IN INTEGRATIONS FOR HEADLESS E-COMMERCE </p>
</div>
  <div class="col">
    <div class="">
      <img src={img23} class="card-img-top1 " alt="..."/>
      <div class="card-body">
       
      
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
      <img src={img34} class="card-img-top2" alt="..."/>
      <div class="card-body">
       
           </div>
    </div>
  </div>
  <div class="col">
    <div class="">
      <img src={img37} class="card-img-top3" alt="..."/>
      <div class="card-body">
       
      
      </div>
    </div>
  </div>
  <div class="col">
    <div class="">
      <img src={img39} class="card-img-top4" alt="..."/>
      <div class="card-body">
       
      
      </div>
    </div>
  </div>
</div>
</div>
























<section id="">
<div className="bgc" >
  <br/>
  <div data-aos="fade-up" >

<div>
<h3 id="MARKETPLACE">MARKETPLACE NEED</h3>
<p id="want" > You want to create a custon <br/> marketplace through connected <br/>  software.</p>
<h9 id="STARTED" >REQUEST A DEMO  </h9>
</div>

<div>
<h3 id="SOLUTION">SHUUP SOLUTION</h3>
<p id="Customized">Customized shupp Headless E <br/> commerce solution .</p>
<h9 id="STARTED2" >REQUEST A DEMO   </h9>
</div>
<div>
<h3 id="WHY">WHY SHUUP </h3>
<p id="Bring" > Bring the most complex nerwork of <br/>software together <br/> end or any of your connected software. <br/> Push individual changes any time.</p>
<h9 id="STARTED3" >REQUEST A DEMO </h9>
</div>
</div>
</div>
</section>















<section id="Contact">
  <div id="picbg" >
<div className="row g-2">
  <img id="ecom1" src="https://c1.wallpaperflare.com/preview/846/53/125/business-entrepreneur-hands-laptop.jpg"/>
   <div data-aos="fade-up" id="bakc">
 <h1  id="operations"> <b>Connect your commerce <br/> operations to a robust<br/>  software backbone <br/> today! </b></h1> 
 <p   id="building">Start building your headless commerce operation today. <br/>Book a personalized demo to see how Shuup<br/> can connect your custom storefront.</p>
   </div>
   
    </div>
    </div>
</section>








<footer d="footer">
{/* <div id="footer">

  <br/>
<h1 id="hf"><b> Care  TO Join Us</b></h1>

<p id="pf"> Embark on an exciting career with us to learn and grow alongside the best in the <br/> industry</p>
<hr/>

     <div id="links">
    <p>  <a href="#home">Home</a>  <a  href="#services">Services </a>   <a  href="#about">About us</a> <a  href="#career">Career </a><a  href="#Contact">Contact </a></p> 
             </div>  
<p> Follo us : <img src="https://willowshealth.com/wp-content/uploads/2017/07/facebook-logo-png-transparent-background-i5-klj-lokeren-heiende-9-300x225.png" /> </p>
</div> */}
















<footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h1>Care TO Join Us</h1>
            <p class="text-justify">Embark on an exciting career with us to learn and grow alongside the best in the
industry.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
         
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>

</footer>
</div>
    )
    
}