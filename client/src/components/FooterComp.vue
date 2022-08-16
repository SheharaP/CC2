<template>

<!-- ======= Footer ======= -->
  <footer id="footer" class="footer">

    <div class="container">
      <div class="row gy-3">
        <div class="col-lg-3 col-md-6 d-flex">
          <i class="bi bi-layers icon"></i>
          <div>
            <h4><a href="#about" class="nav-link">About</a></h4>
            <p>Travel Lanka an initiative by Magma, a multinational corporation. The goal of this solution is to create a tourism-based online platform where different hotels may join and communicate with travelers and other users. 
            It is envisaged that tourists would have a one-of-a-kind experience as a result of this, making their journey to Sri Lanka an unforgettable one.
            </p> 
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-telephone icon"></i>
          <div>
            <h4>Call us</h4>
            <p>011-2585042</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-envelope icon"></i>
          <div>
            <h4>E-mail</h4>
            <p>TravelLanka@magma.com</p>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 footer-links d-flex">
          <i class="bi bi-link-45deg icon"></i>
          <div>
            <h4>Quick Links</h4>
            <p><a href="#about" class="nav-link">About</a>
            <router-link to="/offers" class="nav-link">Offers</router-link>
            <router-link to="/destination" class="nav-link">Reservations</router-link>
            <router-link to="/login" class="nav-link">Login</router-link></p>
          </div>
        </div>

        
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Travel Lanka</span></strong>. All Rights Reserved
      </div>
    </div>
  </footer>
  <!-- End Footer -->

</template>

<style>

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.footer {
  font-size: 14px;
  background-color: #1f1f24;
  padding: 50px 20px;
  color: rgba(255, 255, 255, 0.7);
}

.footer .icon {
  margin-right: 10px;
  font-size: 30px;
  line-height: 0;
}

.footer h4 {
  font-size: 25px;
  font-weight: bold;
  position: relative;
  padding-bottom: 2px;
  color: #fff;
}

.footer p {
  text-align:justify;
}

.footer .copyright {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

</style>