<template>
	<div class="disabled-block">
		<form action="" method="post" class="form">
			<div class="form-block form-block_margins">
				<span class="form__title">log in</span>
			</div>
			<div class="form-block form-block_margins">
				<input 
					type="text" 
					name="login" 
					class="form__input form_input-login-error" 
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
				<input 
					type="password" 
					name="repeatPassword" 
					class="form__input form_input-repeatPassword-error" 
					placeholder="XXXXXXXXXXXX" 
					v-model="logInData.repeatPassword"
					@focus="resetStylesError">
				<label for="repeatPassword" class="form__label">repeat password</label>
				<div class="form-error form__error-repeatPassword"><span class="form-error_text form-error_text-not-repeated form-error_text-repeatPassword"></span></div>
			</div>
			<div class="form-block form-block_margins form-block_flex">
				<div class="form-block-photo">
					<div class="photo photo_margin">
						<img src="../../assets/elements/photo.png" alt="photo" class="photo__img">
					</div>
					<input 
						type="file" 
						name="photoUser" 
						accept="image/jpeg,image/png,image/gif,application/pdf,image/bmp" 
						class="form-block-photo_input" 
						@change="showImg">
					<label for="photoUser" class="form-block-photo_label">Select a file</label>
				</div>
				<div class="form-block-min">
					<div class="form-block">
						<input 
							type="phone" 
							name="phone" 
							class="form__input form_input-required-error" 
							placeholder="+7 (XXX)-XXX-XX-XX" 
							v-model="logInData.phone"
							@focus="resetStylesError">
						<label for="phone" class="form__label">phone number</label>
						<div class="form-error form__error-required"><span class="form-error_text form-error_text-required"></span></div>
					</div>
					<div class="form-block form-block_margins">
						<input 
							type="phone" 
							name="email" 
							class="form__input form_input-required-error" 
							placeholder="XXXXXX@XXX.XX" 
							v-model="logInData.email"
							@focus="resetStylesError">
						<label for="email" class="form__label">email</label>
						<div class="form-error form__error-required"><span class="form-error_text form-error_text-required"></span></div>
					</div>
					<div class="form-block form-block_flex form-block_margins">
						<div class="form-block-radio">
							<input type="radio" name="man" value="man" id="man" class="form-block-radio_input" v-model="logInData.gender">
							<label class="form-block-radio_name" for="man" value="man">man</label>
						</div>
						<div class="form-block-radio">
							<input type="radio" name="woman" value="woman" id="woman" class="form-block-radio_input" v-model="logInData.gender">
							<label class="form-block-radio_name" for="woman" value="woman">woman</label>
						</div>
					</div>
				</div>
			</div>
			<div class="form-block form-block_margins">
				<button type="button" class="form__button" @click="formProcessing">send</button>
			</div>
			<div class="disabled-block-hide" @click="logInClose">
				<img src="../../assets/elements/close.png" alt="unnamed" class="disabled-block-hide_image">
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'LogInComponent',
	props: {
		msg: String
	},
	components: {
	},
	data(){
		return {
			errorText: 'required field',
			logInData: {
				login: '',
				password: '',
				repeatPassword: '',
				phone: '',
				email: '',
				gender: 'man',
				photo: ''
			},
			lockIndicator: true
		}
	},
	methods: {
		logInUser: function (user){
			this.$store.dispatch('GET_NEW_USER', user);
		},
		logInClose: function () {
			this.$store.dispatch('GET_LOG_IN_VIEWINGT_WINDOW', false);
		},
		showImg: function (e){
			const files = e.target.files || e.dataTransfer.files;
			const photo_img = document.querySelector('.photo__img');
			const reader = new FileReader();
			
			reader.readAsDataURL(files[0]);

			reader.onload = function(e) {
				photo_img.src = e.target.result;
			};
			if (files[0]) {
				this.logInData.photo = files[0];
			}
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

				if(this.logInData.repeatPassword === ''){
					const form_error_repeatPassword = document.querySelector('.form__error-repeatPassword');
					const error_text_repeatPassword = document.querySelector('.form-error_text-repeatPassword');

					error_text_repeatPassword.innerHTML = `required field`;
					form_error_repeatPassword.classList.add('form__error_active');
					this.addClass(form_input, 'form_input-repeatPassword-error', 'form_input-error');
					
					result = false;
				}

				if(this.logInData.password != this.logInData.repeatPassword){
					const form_error_required = document.querySelectorAll('.form-error');
					const error_text_not_required = document.querySelectorAll('.form-error_text-not-repeated');

					for (let i = 0; i < form_error_required.length; i++) {

						if (form_error_required[i].classList.contains('form__error-password') || 
						form_error_required[i].classList.contains('form__error-repeatPassword')) {
							form_error_required[i].classList.add('form__error_active');
						}

					}

					for (let i = 0; i < error_text_not_required.length; i++) {
						error_text_not_required[i].innerHTML = `passwords don't match`;
					}

					this.addClass(form_input, 'form_input-repeatPassword-error', 'form_input-error');
					this.addClass(form_input, 'form_input-password-error', 'form_input-error');

					result = false;
				}

				if(this.logInData.phone === '' && this.logInData.email === ''){
					const error_text_required = document.querySelectorAll('.form-error_text-required');
					const form_error_required = document.querySelectorAll('.form__error-required');

					for (let i = 0; i < form_error_required.length; i++) {
						form_error_required[i].classList.add('form__error_active');
					}
					for (let i = 0; i < error_text_required.length; i++) {
						error_text_required[i].innerHTML = `fill in one of the fields`;
					}
					this.addClass(form_input, 'form_input-required-error', 'form_input-error');

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
				const photo_img = document.querySelector('.photo__img');
				const logInDataObject = this.logInData;
				const resultObject = Object.assign({}, this.logInData);

				for (let key in logInDataObject){
					logInDataObject[key] = '';
				}
				logInDataObject.gender = 'man';
				photo_img.src = '';

				delete resultObject.repeatPassword;
				this.logInUser(resultObject);

				this.logInClose();
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
		},
	},
	computed: {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/scss/form_stayl.scss';
@import '@/scss/_mixins.scss';
@import '@/scss/variables.scss';

</style>
