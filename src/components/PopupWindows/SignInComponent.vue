<template>
	<div class="disabled-block">
		<form action="" class="form">
			<div class="form-block form-block_margins">
				<span class="form__title">sign in</span>
			</div>
			<div class="form-block form-block_margins">
				<input 
					type="text" 
					name="login" 
					class="form__input" 
					placeholder="name"
					v-model="logInData.login"
					@focus="resetStylesError">
				<label for="login" class="form__label">login</label>
				<div class="form-error form__error-login"><span class="form-error_text form-error_text-login"></span></div>
			</div>
			<div class="form-block form-block_margins">
				<input 
					type="password" 
					name="password" 
					class="form__input form_input-password-error" 
					placeholder="XXXXXXXXXXXX"
					v-model="logInData.password" 
					@focus="resetStylesError">
				<label for="password" class="form__label">password</label>
				<div class="form-error form__error-password"><span class="form-error_text form-error_text-not-repeated form-error_text-password"></span></div>
			</div>
			<div class="form-block form-block_margins">
				<button type="button" class="form__button" @click="formProcessing">send</button>
			</div>
			<div class="disabled-block-hide" @click="signInClose">
				<img src="../../assets/elements/close.png" alt="unnamed" class="disabled-block-hide_image">
			</div>
		</form>
	</div>
</template>

<script>

export default {
	name: 'LogInComponent',
	components: {
	},
	props: {
		msg: String
	},
	data(){
		return {
			errorText: '',
			logInData: {
				login: '',
				password: '',
			},
			lockIndicator: true
		}
	},
	methods: {
		signInClose: function () {
			this.$store.dispatch('GET_SIGN_IN_VIEWINGT_WINDOW', false);
		},
		addClass: function (arr, containsClass, addClass){
			for (let i = 0; i < arr.length; i++) {
				if(arr[i].classList.contains(containsClass)){
					arr[i].classList.add(addClass);
				}
			}
		},
		removeClass: function (arr, removeClass){
			for (let i = 0; i < arr.length; i++) {
				arr[i].classList.remove(removeClass);
			}
		},
		formProcessing: function (){
			const checking_form = () =>{
				const form_input = document.querySelectorAll('.form__input');
				let result = true;

				if(this.logInData.login === ''){
					const form_error_login = document.querySelector('.form__error-login');
					const error_text_login = document.querySelector('.form-error_text-login');

					error_text_login.innerHTML = `required field`;
					form_error_login.classList.add('form__error_active');
					this.addClass(form_input, 'form_input-login-error', 'form_input-error');
					
					result = false;
				}

				if(this.logInData.password === ''){
					const form_error_password = document.querySelector('.form__error-password');
					const error_text_password = document.querySelector('.form-error_text-password');

					error_text_password.innerHTML = `required field`;
					form_error_password.classList.add('form__error_active');
					this.addClass(form_input, 'form_input-password-error', 'form_input-error');

					result = false;
				}

				return result
			}

			let result_checking = checking_form();

			if (!result_checking) {
				const button = document.querySelector('.form__button');
				button.setAttribute('disabled', true);
				button.classList.add('form__button_disabled');
				this.lockIndicator = false;
			} else {
				const logInDataObject = this.logInData;
				const resultObject = Object.assign({}, this.logInData);
				console.log(resultObject);

				for (let key in logInDataObject){
					logInDataObject[key] = '';
				}
			}
		},
		resetStylesError: function (){
			if (!this.lockIndicator) {

				const form_input = document.querySelectorAll('.form__input');
				const form_error = document.querySelectorAll('.form-error');
				const form_error_text = document.querySelectorAll('.form-error_text');
				const button = document.querySelector('.form__button');

				this.removeClass(form_input, 'form_input-error');
				this.removeClass(form_error, 'form__error_active');

				for (let i = 0; i < form_error_text.length; i++) {
					form_error_text[i].innerHTML = '';
				}

				button.removeAttribute('disabled');
				button.classList.remove('form__button_disabled');
				this.lockIndicator = true;
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/form_stayl.scss';
@import '@/scss/_mixins.scss';
@import '@/scss/variables.scss';

</style>