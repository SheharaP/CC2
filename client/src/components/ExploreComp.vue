<template>
    <div class="container">
        <div class="col-lg-12 bg-white shadow p-4 rounded">
            <h4>{{name}}</h4>
        </div>
    </div>
   
</template>
  <script>
export default {
    name: "RegisterHotel",
    props: {
    name:String,
  },
    data() {
        return {
        }
    },
}
    </script>

<style>

.container{
    padding-top:50px;
    padding-bottom:10px;
    margin-bottom: 20px;
}
.form-label{
    font-family: var(--font-default);
    font-weight:500;
    padding-top:10px;
}
.btn{
    background: var(--color-primary);
    box-shadow: 0 8px 28px rgba(73, 46, 101, 0.2);
    margin-top:40px; 
}
.btn:hover {
  background: rgba(73, 46, 101, 0.8);
  box-shadow: 0 8px 28px rgba(73, 46, 101, 0.45);
}
</style>