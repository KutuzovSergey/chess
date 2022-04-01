<template>
	<header class="header">
		<div class="logo"><img src="../assets/logo.gif" alt="logo" class="logo__image"></div>
		<nav class="menu-block">
			<ul class="menu" v-if="registration">
				<li class="menu-item">
					<span class="menu-item__linck menu-item__linck_hover" @click="logInOpen">log in</span>
				</li>
				<li class="divide divide_margins">
					<span class="divide__symbol">/</span>
				</li>
				<li class="menu-item">
					<span class="menu-item__linck menu-item__linck_hover"  @click="signInOpen">sign in</span>
				</li>
			</ul>
			<ul class="menu" v-if="!registration">
				<li class="menu-item">
					<router-link to="/" class="menu-item__linck menu-item__linck_hover">home</router-link>
				</li>
				<li class="divide divide_margins">
					<span class="divide__symbol">/</span>
				</li>
				<li class="menu-item">
					<router-link to="/users" class="menu-item__linck menu-item__linck_hover">view players</router-link>
				</li>
				<li class="divide divide_margins">
					<span class="divide__symbol">/</span>
				</li>
				<li class="menu-item">
					<router-link to="/game" class="menu-item__linck menu-item__linck_hover">start the game</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'HederComponent',
	props: {
		msg: String
	},
	data(){
		return {
			registration: true
		}
	},
	methods: {
		signInOpen: function () {
			this.$store.dispatch('GET_SIGN_IN_VIEWINGT_WINDOW', true);
		},
		logInOpen: function () {
			this.$store.dispatch('GET_LOG_IN_VIEWINGT_WINDOW', true);
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/fonts_rubik.scss';
@import '@/scss/_mixins.scss';
@import '@/scss/variables.scss';

.header{
	@include bloockContent(100%, 220px, $background_color-1, 0);
	position: relative;
}

.logo{
	@include bloockContent(300px, 300px, $background_color-5, 20px);
	position: absolute;
	left: 30em;
	top: 5em;

	&__image{
		width: 100%;
		height: 100%;
	}
}

.menu-block{
	@include bloockContent(90%, 200px, $background_color-1, 0);
	margin: auto;
	display: flex;
	justify-content: flex-end;
}

.menu{
	@include bloockContent(50%, 200px, $background_color-1, 0);
	display: flex;
	justify-content: center;
	margin-left: 0;
    padding-left: 0;
}

.divide{
	display: inline-block;
	list-style-type: none;
	display: flex;

	&__symbol{
		@include textContent($text_color-1, $font_size-2, uppercase, 700, $font_rubik);
		margin: auto 0;
	}
}
.divide_margins{
	margin: 0 10px;
}

.menu-item{
	margin: auto 0;
	display: inline-block;
	list-style-type: none;

	&__linck{
		@include textContent($text_color-1, $font_size-2, uppercase, 700, $font_rubik);
		cursor: pointer;
	}

	&__linck_hover:hover{
		color: $text_color-2;
	}
}
</style>
