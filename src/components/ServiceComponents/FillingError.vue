<template>
<div>
    <span>{{errorText}}</span>
</div>
</template>

<script>

export default {
	name: 'FillingError',
	components: {
	},
	props: {
		errorText: {
			msg: String
		}
	},
	data(){
		return {
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/scss/_mixins.scss';
@import '@/scss/variables.scss';

</style>