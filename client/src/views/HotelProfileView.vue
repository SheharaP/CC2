<template>
<section class="vh-100" style="background-color: #eee;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-4">

        <div class="card" style="border-radius: 15px;">
          <div class="card-body text-center">
            <div class="mt-3 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
              class="rounded-circle img-fluid" style="width: 100px;" />
            </div>
            <h4 class="mb-2">Julie L. Arsenault</h4>
            <p class="text-muted mb-4">@Programmer <span class="mx-2">|</span> <a href="#!">mdbootstrap.com</a></p>   
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Johnatan Smith</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">example@example.com</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Phone</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">(097) 234-5678</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Mobile</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">(098) 765-4321</p>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Address</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn">
              <button type="button" class="btn btn-primary btn-rounded btn-lg">Edit Profile</button>
              <button type="button" class="btn btn-primary btn-rounded btn-lg">
                  <router-link to="/offers" class="nav-link">Add offers</router-link>
              </button>
            </div>
            <!--<div class="col-lg-3">
              <button type="button" class="btn text-white shadow none">Edit Profile </button>
              <button type="button" class="btn text-white shadow none"><router-link to="/offers">Add offers</router-link></button>
            </div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

 /* eslint-disable */ 

</script>
<style scoped>
*{
  margin-top:0;
  max-width: 100%;
}

.card{
  
  margin-bottom: 200px;
}
.btn{ 
  padding: 10px;
  margin: 10px;
  color: white;
  background-color: none;

}


</style>