<template>
	<div class="container">
		<div class="banner" ref="box">
			<h3>个人中心</h3>
			<div class="banner-box">
				<img src="../assets/image/bluetian.jpg" ref="img" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'people',
	data() {
		return {
			dominant: '',
			secondary: ''
		};
	},
	created() {
		this.$nextTick(() => {
			let box = this.$refs.box;
			let img = this.$refs.img;
			RGBaster.colors(img, {
				success: function(payload) {
					console.log('主色:' + payload.dominant + ',次色' + payload.secondary);
					this.dominant = payload.dominant;
					this.secondary = payload.secondary;
					box.style.background = this.dominant;
				}
			});
		});
		this.axios
			.get('https://www.zhihu.com/api/v3/feed/topstory/recommend?session_token=2a5c97cdbe01e54c45555fa98664b0f5&desktop=true&page_number=3&limit=6&action=down&after_id=11')
			.then(res => {
				console.log(res);
			});
	}
};
</script>
<style lang="scss" scoped>
.container {
	position: relative;
	width: 80%;
	margin: 0 auto;
	.banner {
		display: flex;
		align-items: center;
		text-align: center;
		height: 200px;
		background-color: #ccc;
		h3 {
			flex: 0 0 40%;
			color: #fff;
		}
		.banner-box {
			flex: 0 0 60%;
			height: 100%;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>