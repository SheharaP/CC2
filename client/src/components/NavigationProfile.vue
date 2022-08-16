<template>
<header :class="{'scrolled-nav' : scrollPosition }">
<nav>
	<div class="branding">
		<img src="../assets/img/logo.png" alt="logo">
	</div>
	<ul v-show="!mobile" class="navigation"> <!--Desktop Navigation -> "!mobile" function hides the mobile navigation in desktop view-->
		<li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><router-link to="/offers" class="nav-link">Offers</router-link></li>
        <li><router-link to="/destination" class="nav-link">Destinations</router-link></li>
		<li><button @click="logout" class="btn-login">Logout</button></li>	
	</ul>
	<div class="icon">  
		<i @click="toggleMobileNav" v-show="mobile" class="bi bi-list" :class="{'icon-active' : mobileNav}"></i> <!--Mobile Navigation -> "mobile" function shows the mobile nav when resizing webpage-->
	</div> 
	<transition name ="mobile-nav">
		<ul v-show="mobileNav" class="dropdown-nav">
		<li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
        <li><router-link to="/offers" class="nav-link">Offers</router-link></li>
        <li><router-link to="/destination" class="nav-link">Destinations</router-link></li>
		<li><button @click="logout" class="btn-login">Logout</button></li>
	</ul>
	</transition>
</nav>
</header>
</template>

<script>
/* eslint-disable no-unused-vars */
import {getAuth,onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";


export default {
	name:"NavigationProfile",
	data() {
		return{
			scrollPosition:null,
			mobile:null,
			mobileNav:null,
			windowWidth:null,
			router: useRouter(),
			loggedIn: false,
			auth:getAuth()
		};

	},
	mounted() {

    const ref = this;
  onAuthStateChanged(this.auth, (user) =>{
      if (user) {
        ref.loggedIn = true;
      } else {
        ref.loggedIn = false;
      }
    });
  },
  computed: {
    authenticated() {
      return this.loggedIn;
    }
  },
	created() {
		window.addEventListener("resize", this.checkScreen.bind(this));
	
	},
	methods: {

		toggleMobileNav(){
			this.mobileNav = !this.mobileNav;
		},
		checkScreen(){
			console.log("hello")
			this.windowWidth = window.innerWidth;
			if(this.windowWidth <= 1000 ){
				this.mobile = true;
				return;
			}
			this.mobile = false;
			this.mobileNav = false;
			return;

			
			
		},
		logout() {
			console.log("bye bye")
			
			signOut(this.auth).then(() => {
          this.loggedIn = false;
          this.email = "";
          this.password = "";
          this.router.push("/");
        });
    }
		
		
		
	}
	
	
};
</script>

<style lang="scss" >
*{
	margin:0;
	font-family: "Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

header{

	background-color: #000;
	z-index: 99;
	width: 100%;
	position: relative;
	transition: 0.5s ease all;
	color: #fff;
	overflow-x: hidden;
	

	nav{
		position: relative;
		display: flex;
		flex-direction: row;
		padding: 20px;
		transition: .5s ease all;
		width:100%;
		
		@media(min-width: 1140px){
			max-width:1140px;

		}
		ul,
		.nav-link{
			
			margin-top: 10px;
			font-weight:500; 
			list-style: none;
			text-decoration: none;

		}
		button {
			--primary-color: #111;
			--secondary-color: #fff;
			--hover-color: #645bff;
			--arrow-width: 10px;
			--arrow-stroke: 2px;
			box-sizing: border-box;
			border: 0;
			border-radius: 20px;
			color: var(--secondary-color);
			padding: 5px 20px 5px 20px;
			background: var(--primary-color);
			display: flex;
			transition: 0.2s background;
			align-items: center;
			gap: 0.6em;
			font-weight: bold;

			.btn-login{
				text-decoration: none;
				color: white;
				}

			.btn-register{
				text-decoration: none;
				color: white;
				font-weight: lighter;
				}
			.arrow-wrapper {
				display: flex;
				justify-content: center;
				align-items:flex-end;
				}	
			.arrow {
				width: var(--arrow-width);
				background: var(--primary-color);
				height: var(--arrow-stroke);
				position: relative;
				transition: 0.2s;
				}
				.arrow::before {
					content: "";
					box-sizing: border-box;
					position: absolute;
					border: solid var(--secondary-color);
					border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
					display: inline-block;
					top: -3px;
					right: 3px;
					transition: 0.2s;
					padding: 3px;
					transform: rotate(-45deg);
					}
					&:hover {
						background-color: var(--hover-color);

						.arrow {
							background: var(--secondary-color);

							&:before {
								right: 0;
							}
						}
					}


			}


		.dropdown {
			position: relative;
			display: inline-block;

			.dropdown-content {
				display: none;
				position: fixed;
				background-color: #645bff;
				min-width: 160px;
				box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
				z-index:999;

				.nav-link {
					color: rgb(255, 255, 255);
					padding: 12px 16px;
					text-decoration: none;
					display: block;

					&:hover {
						color: black;
						background-color: #fff;
					}
				}

				
			}
			&:hover .dropdown-content{
				display: block;
					
			}

		
		}

		li{
			padding:16px;
			margin-left:16px;
			font-size:17px;
		}

		.nav-link{
			
			transition:  0.3s ease all;
			border-bottom: 2px solid transparent;
			
			&:after{
				display:block;
				content: '';
				border-bottom: solid 2px #ffffff;
				margin-top: 2px;
				transform: scaleX(0);
				transition: transform 250ms ease-in-out;
			}
			
			&:hover{
				color: #111;
				background: linear-gradient(to right,rgb(155, 83, 165), #4632b8 25%, rgb(155, 83, 165) 50%, white 50%);
				background-clip: text;
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
				background-size: 200% 100%;
				background-position: 100%;
				transition:1800ms ease;

				&:hover:after{
					transform: scaleX(0.8); 
				}
				
			}
		}
		.branding{
			display:flex;
			align-items: center;
			position: static;

			img{
				width:200px;
				transition: .5s ease all;
				position: static;
			}
		}

		.navigation{
			display: flex;
			align-items: center;
			flex: 1;
			justify-content: flex-end;
			
		}
		.icon{
			display: flex;
			align-items: center;
			position: absolute;
			top:0;
			right:24px;
			height:100%;

			i{
				cursor:pointer;
				font-size:32px;
				transition: .8s ease all;
				color: white;
			}
		}
		.bi-bars{
			color: black;
		}

		.icon-active{
			transform: rotate(180deg);
		}

		.dropdown-nav{
			display: flex;
			flex-direction: column;
			position: fixed;
			width: 100%;
			max-width:250px;
			height:100%;
			background-color: #fff;
			top:0;
			left:0;

			li{
				margin-left: 0;
				.nav-link{
					color:#000;
				}
			}
		}

	}
}
</style>