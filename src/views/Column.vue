<template>
	<div class="body">
		<div class="ColumnPageHeader">
			<div class="ColumnPageHeader-content">
				<a href="//www.zhihu.com" aria-label="知乎">
					<svg viewBox="0 0 200 91" class="ZhihuLogo" style="height:30px;width:64px" width="64" height="30" aria-hidden="true">
						<title></title>
						<g>
							<path
								d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
								fill-rule="evenodd"
							></path>
						</g>
					</svg>
				</a>
				<div class="">
					<button type="button" class="button-text">
						<svg class="Zi--EditSurround" fill="currentColor" viewBox="0 0 24 24" width="24" height="32">
							<path
								d="M18.453 7.992l-1.833-1.65.964-.978a1.223 1.223 0 0 1 1.73-.012l.005.006a1.24 1.24 0 0 1 .007 1.748l-.873.886zm-1.178 1.194l-5.578 5.66-1.935.697a.393.393 0 0 1-.504-.504l.697-1.935 5.488-5.567 1.832 1.65zM7.58 5.848l5.654.006-1.539 1.991-3.666.012A1.02 1.02 0 0 0 7 8.868v7.993c0 .558.46 1.01 1.029 1.01l7.941-.01c.568 0 1.03-.453 1.03-1.012v-4.061l2-1.442v6.002c0 1.397-1.2 2.501-2.62 2.501H7.574C6.153 19.85 5 18.717 5 17.32V8.35c0-1.397 1.16-2.502 2.58-2.502z"
							></path>
						</svg>
						<h4 class="header-text">写文章</h4>
					</button>
				</div>
			</div>
		</div>
		<div class="column-body"><img src="../assets/image/middle.jpg" alt="" style="width: 100%;" /></div>
		<div class="column-bottom">
			<div class="container1">
				<div class="row">
					<div class="col-4-column" v-for="(item, index) in pageColumns" :key="index">
						<div class="column-card">
							<div class="column-top"><img :src="item.imageUrl" alt="" class="column-img" /></div>
							<div class="column-middle">
								<h4 class="column-font">{{ item.title }}</h4>
								<div class="font-space">
									<h4 class="colunm-font2">{{ item.description.substring(0, 28) }}</h4>
								</div>
								<h4 class="colum-font1">{{ item.followers }}关注|{{ item.articlesCount }}文章</h4>
							</div>
							<div class="column-bottom">
								<div class="header-col-column">
									<!-- 	  跳转链接 -->
									<a v-bind:href="item.url" class="button-cloum" style="display: block;">进入专栏</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="column-container-mid-btn"><Button class="button-column-bottom" @click="getBatch()">换一换</Button></div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	inject: ['reload'],
	data() {
		return {
			column: [],
			pageColumns: [],
			count: 0
		};
	},
	created() {
		this.getColumns()
	},
	methods: {
		getColumns() {
			this.axios({
				method: 'get',
				url: 'http://localhost:8080/api/column'
			}).then(res => {
				this.column = res.data.data;
				this.pageColumns = this.column.slice(this.count, this.count + 8);
				console.log(this.pageColumns);
			});
		},
		getBatch() {
			this.count += 8;
			this.pageColumns = this.column.slice(this.count, this.count + 8);
			if (this.count + 7 >= this.column.length) {
				this.count = 0;
			}
		}
	}
};
</script>
<style lang="scss" scoped>
.container1 {
	display: block;
	margin: auto;
	width: 80%;
	margin-top: -0.625rem;
}
.column-body {
	background-image: url('https://static.zhihu.com/heifetz/assets/patterns.c72a480c.png');
	width: 100%;
	height: 100%;
}
.column-bottom {
	background-image: url('https://static.zhihu.com/heifetz/assets/patterns.c72a480c.png');
	width: 100%;
	height: 100%;
}

.ColumnPageHeader {
	position: relative;
	width: 100%;
	height: 52px;
	background: #fff;
	background-clip: content-box;
	-webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
	box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
}
.column-container-mid-btn{
		width: 100%;
		height: 30px;
		display: flex;
		justify-content: center;
		margin: 2% 0 10% 0;
		/* background-color: red; */
	}
.ColumnPageHeader-content {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	height: 52px;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
}
.button-cloum {
	display: block;
	margin-top: 45px;
	width: 102px;
	height: 34px;
	border-radius: 3px;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	margin-left: 80px;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
}
.button-column-bottom{
	width: 102px;
	height: 34px;
	font-size:18px;
}
.colunm-font2 {
	text-align: center;
	margin-top: 30px;
}
.colum-font1 {
	color: lightgrey;
	font-size: 15px;
	margin-top: 20px;
	margin-left: 80px;
}
.row {
	display: flex;
	flex-wrap: wrap;
}
.column-card {
	height: 350px;
	width: 300px;
	box-shadow: 2px 5px 5px #aaa;

	margin-top: 20px;
}
.column-img {
	height: 70px;
	width: 70px;
	border-radius: 50%;
	margin-top: 0.9375rem;
	margin-left: 110px;
}
.column-font {
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	margin-top: 20px;
}
.font-space {
	width: 80%;
	margin-left: 20px;
}
.col-4-column {
	flex: 0, 0, 25%;
	background-color: #ffffff;
	padding: 15px;
}
a {
	color: inherit;
	text-decoration: none;
}
.ZhihuLogo {
	fill: #0084ff;
	margin-left: 220px;
	margin-top: 5px;
}
.Zi--EditSurround {
	fill: #0084ff;
	margin-top: -12px;
	margin-left: -50px;
}
.header-text {
	color: #0084ff;
	margin-left: 13px;
	margin-top: -25px;
}
.button-text {
	color: #0084ff;
	background: none;
	border: 1px solid;
	width: 90px;
	height: 32px;
	margin-left: 920px;
	cursor: pointer;
}
</style>
