<template>
	<div>
		<!-- 最新专题 -->
		<div class="container">
			<div class="head">
				<img src="" alt="" />
				<i class="iconfont">&#xe65d;</i>
				<h2 style="margin-left: 0.125rem;font-weight: bold;">最新专题</h2>
			</div>
			<div class="row">
				<div class="explore" v-for="(item, index) in specials" :key="index">
					<img :src="item.banner" alt="" class="banner-img" />
					<div class="w-row">
						<div class="left">
							<h3>{{ item.title }}</h3>
							<h5 class="meta">{{ item.updated }}更新,{{ item.viewCount }}次浏览</h5>
						</div>
						<div class="right">
							<button class="button"><h4 style="color: #1E90FF;font-size: 1.125rem;font-weight: bold;">关注专题</h4></button>
						</div>
					</div>

					<p class="introduction">{{ item.introduction }}</p>

					<span v-for="(section, index) in item.sections" :key="index" class="section">{{ section.sectionTitle }}</span>
				</div>
			</div>

			<div class="topic">
				<router-link to="/special/all" class="btn"><button class="button-topic">查看更多专题></button></router-link>
			</div>
		</div>
		<!-- 圆桌讨论 -->
		<div class="container">
			<div class="head">
				<img src="../assets/image/roundtable.png" alt="" style="height: 50px;width: 3.125rem;" />
				<h2 style="margin-left: 10px;font-weight: bold;">圆桌讨论</h2>
			</div>
			<div class="row">
				<div class="explore1" v-for="(item, index) in roundtable" :key="index">
					<div class="card-img-wrapper" ref="box">
						<img :src="item.tinyBanner" ref="bgImg" />
						<div class="mask" ref="mask1"></div>
						<div class="mask" ref="mask2"></div>
					</div>
					<div class="little-card">
						<router-link :to="{ path: '/roundtable/' + item.urlToken }">
							<div class="left">
								<h3 class="name-set">{{ item.name }}</h3>
								<h5 class="meta-set">{{ item.includeCount }}位嘉宾参与 | {{ item.visitsCount }}人关注</h5>
							</div>
						</router-link>
					</div>
					<div class="w-row">
						<div class="right1">
							<button class="button1" ref="btn"><h4 style="color: #1E90FF;font-size: 1.125rem;font-weight: bold;">关注圆桌</h4></button>
						</div>
					</div>
				</div>
			</div>

			<div class="topic">
				<router-link to="/roundtable" class="btn"><button class="button-topic">查看更多圆桌></button></router-link>
			</div>
		</div>
		<!-- 热门收藏夹 -->
		<div class="container">
			<div class="head">
				<img src="../assets/image/start.png" alt="" style="height: 45px;width: 2.8125rem;" />
				<h2 style="margin-left: 0.625rem;font-weight: bold;">热门收藏夹</h2>
			</div>
			<div class="row">
				<div class="explore1" v-for="(item, index) in favorite" :key="index">
					<div class="card-heard">
						<div class="card-header-row">
							<div class="header-col-1">
								<h3 style="font-weight: bold;">{{ item.title }}</h3>
							</div>
							<div class="header-col-2"><input type="button" value="关注收藏夹" /></div>
						</div>
						<div class="card-header-row">
							<div class="header-col-3">
								<ul class="">
									<li><img :src="item.creatorAvatar" alt="" /></li>
									<li>{{ item.creatorName }}</li>
									<li class="header-text">创建</li>
									<li class="header-text">{{ item.followers }}人关注</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="card-body">
						<div class="card-body-row">
							<div class="card-col-1">{{ item.questionTitle }}</div>
						</div>
						<div class="header-col-1">
							<h3 style="font-weight: bold;">{{ item.question_title }}</h3>
						</div>
						<div class="card-body-row">
							<div class="card-col-2">{{ item.answerAuthorName }}:{{ item.answerContent }}</div>
						</div>
						<div class="card-body-row">
							<div class="card-col-3">
								<ul class="body-ul">
									<li>回答</li>
									<li>{{ item.voteupCount }}赞同·{{ item.commentCount }}评论</li>
								</ul>
							</div>
						</div>
						<div class="card-body-row">
							<div class="card-col-1">{{ item.questionTitle }}</div>
						</div>
						<div class="header-col-1">
							<h3 style="font-weight: bold;">{{ item.question_title }}</h3>
						</div>
						<div class="card-body-row">
							<div class="card-col-2">{{ item.answerAuthorName }}:{{ item.answerContent }}</div>
						</div>
						<div class="card-body-row">
							<div class="card-col-3">
								<ul class="body-ul">
									<li>回答</li>
									<li>{{ item.voteupCount }}赞同·{{ item.commentCount }}评论</li>
								</ul>
							</div>
						</div>

						<div class="card-body-row">
							<div class="card-col-4">
								已经收藏{{ item.totalCount }}条内容>
								<i class="fa fa-angle-right"></i>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="topic">
				<router-link to="/collection/hot" class="btn"><button class="button-topic">查看更多收藏夹></button></router-link>
			</div>
		</div>
		<!-- 专栏 -->
		<div class="container">
			<div class="head">
				<svg class="currentcolor" fill="currentColor" viewBox="0 0 24 24" width="36" height="36">
					<path
						d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
						fill-rule="evenodd"
					></path>
				</svg>
				<span style="margin-left: 0.625rem;font-weight: bold;font-size: 25px;">专栏</span>
			</div>
			<div class="row">
			  <div class="col-4-column" v-for="(item, index) in column" :key="index">
				  <div class="column-card">
					  <div class="column-top">
						 <img :src="item.imageUrl" alt="" class="column-img"/>
					  </div>
					  <div class="column-middle">
						  <h4 class="column-font">{{item.title}}</h4>
						  <span class="colum-font1">{{item.followers}}关注·{{item.articlesCount}}文章</span>
						  <div class="font-space">
							  <h4 class="colunm-font2">{{item.description.substring(0,10)}}</h4> 
						  </div>
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

			<div class="topic">
				<router-link to="/columns" class="btn"><button class="button-topic">查看更多专栏></button></router-link>
			</div>
		</div>
	    <button class="goto-top" @click="backToTop" v-show="btnFlag">
				<svg class="grey-icon" title="回到顶部" viewBox="0 0 24 24" width="24" height="24">
					<path
						d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"
					></path>
				</svg>
	    </button>
	</div>
</template>
<script>
export default {
	name: 'hot',
	data() {
		return {
			specials: [],
			roundtable: [],
			favorite: [],
			column:[],
			btnFlag: false
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/special').then(res => {
			console.log(res);
			this.specials = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/roundtable/forth').then(res => {
			console.log(res);
			this.roundtable = res.data.data;
			this.$nextTick(() => {
							//获得循环中的引用对象，都将会是数组的形式
							let boxArr = this.$refs.box;
							let imgArry = this.$refs.bgImg;
							let btnArr = this.$refs.btn;
							let mask1Arr = this.$refs.mask1;
							let mask2Arr = this.$refs.mask2;
							//遍历，对每个对象进行处理
							for (var i = 0, len = boxArr.length; i < len; i++) {
								let box = boxArr[i];
								let img = imgArry[i];
								let btn = btnArr[i];
								let mask1 = mask1Arr[i];
								let mask2 = mask2Arr[i];
								//第三方库，可以获取图片的主色、次色等
								RGBaster.colors(img, {
									success: function(payload) {
										// payload.dominant是主色，payload.secondary是次色, payload.palette是调色板，含多个主要颜色数组,RGB形式表示
										this.dominant = payload.dominant;
										this.secondary = payload.secondary;
										// console.log('主色：' + payload.dominant);
										//去掉rgb的外层rgb字母和括号，得到112,34,56这样的值
										let str = payload.dominant.substring(4, payload.dominant.length - 1);
										//按逗号分割，得到字符串数组
										let strArr = str.split(',');
										//分别获得r,g,b的值，并转为整型
										let r = parseInt(strArr[0]);
										let g = parseInt(strArr[1]);
										let b = parseInt(strArr[2]);
										// console.log(r + '=>' + g + '=>' + b);
										//定义两个透明度的值
										let a1 = 0;
										let a2 = 0.5;
										//创建两个rgba颜色，用来生成遮罩层的渐变色
										let color1 = `rgba(${r},${g},${b},${a1})`;
										let color2 = `rgba(${r},${g},${b},${a2})`;
										// console.log('颜色1：' + color1);
										// console.log('颜色2：' + color2);
										//圆桌卡片顶部整宽部分背景色设置为图片主色
										box.style.backgroundColor = this.dominant;
										//右侧logo图覆盖两层蒙版，使用以下渐变色规则
										mask1.style.background = 'linear-gradient(to right,' + this.dominant + ' 0%,' + color1 + ' 100%)';
										mask2.style.background = 'linear-gradient(to right,' + color2 + ' 0%,' + color1 + ' 100%)';
										//关注按钮的文字颜色，使用图片主色
										btn.style.color = this.dominant;
									}
								});
							}
						});
		});
		this.axios.get('http://localhost:8080/api/favorite/forth').then(res => {
			console.log(res);
			this.favorite = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/column/fifth').then(res => {
			console.log(res);
			this.column = res.data.data;
		});
		
	},
	mounted() {
			// window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
			window.addEventListener('scroll', this.scrollToTop);
		},
	methods: {
				backToTop() {
					//加定时器，平滑过渡回到顶部
					let timer = setInterval(() => {
						let ispeed = Math.floor(-this.scrollTop / 5);
						document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop + ispeed;
						if (this.scrollTop === 0) {
							clearInterval(timer);
						}
					}, 16);
				},
				// 计算距离顶部的高度，当高度大于300显示回顶部图标，小于300则隐藏
				scrollToTop() {
					let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
					this.scrollTop = scrollTop;
					if (this.scrollTop > 300) {
						this.btnFlag = true;
					} else {
						this.btnFlag = false;
					}
				}
			}
};
</script>

<style lang="scss" scoped>
@font-face {
	font-family: 'iconfont'; /* project id 1616266 */
	src: url('//at.alicdn.com/t/font_1616266_b8gknsgz736.eot');
	src: url('//at.alicdn.com/t/font_1616266_b8gknsgz736.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1616266_b8gknsgz736.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1616266_b8gknsgz736.woff') format('woff'), url('//at.alicdn.com/t/font_1616266_b8gknsgz736.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1616266_b8gknsgz736.svg#iconfont') format('svg');
}
.card-img-wrapper {
		position: relative;
		width: 100%;
		height: 320px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		img,
		.mask {
			position: absolute;
			top: 0;
			right: 0;
			width: 240px;
			height: 400px;
			border-top-right-radius: 5px;
		}
		img {
			z-index: 90;
		}
		.mask {
			z-index: 100;
		}
}
.button-cloum{
	display: block;
    margin-top: 50px;
	width: 102px;
	height: 34px;
	border-radius: 3px;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	margin-left: 70px;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
}
.colunm-font2{
	text-align: center;
	margin-top: 25px;
}
.colum-font1{
	color: lightgrey;
	font-size: 13px;
	margin-top: 13px;
	margin-left: 68px;
}
.column-card{
	height: 350px;
	width: 300px;
	box-shadow: 2px 5px 5px #aaa;
	// background-color: bisque;
	padding: 22px;
	margin-left: 30px;
	margin-top: 20px;
}
.column-img{
	height: 70px;
	width: 70px;
	border-radius: 50%;
	margin-top: 0.9375rem;
	margin-left: 85px;
}
.column-font{
	font-weight: bold;
	font-size: 20px;
	text-align: center;
	margin-top: 20px;
}
.col-4-column{
	flex: 0,0,25%;
}
.title-set1 {
	margin-top: 240px;
	margin-left: -380px;
	font-size: 1.3125rem;
	font-weight: bold;
}
.col-4{
	
}
.currentcolor{
	fill: rgb(18, 150, 219);
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 30px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
	color: blue;
	margin: 10px;
}
.name-set {
	margin-top: -15.625rem;
	color: white;
	font-weight: bold;
}
.meta-set {
	margin-top: 6.25rem;
	margin-left: 1.25rem;
}
.row {
	display: flex;
	flex-wrap: wrap;
}
.container {
	display: block;
	margin: auto;
	width: 80%;
	margin-left:205px;
}
.little-card {
	width: 320px;
	transition: all 0.6s;
	background: rgb(255, 255, 255);
	animation: myfirst 2s;
}
.head {
	display: flex;
	align-items: center;
	margin-top: 80px;
}
.explore {
	box-shadow: 2px 5px 5px #aaa;
	width: 46%;
	margin: 1%;
	height: 430px;
	background-color: rgb(255, 255, 255);
}
.explore img {
	border-radius: 5px;
	width: 100%;
	height: 50%;
	filter: brightness(0.8);
}
.explore1 {
	box-shadow: 2px 5px 5px #aaa;
	width: 46%;
	margin: 1%;
	height: 430px;
	background-color: rgb(255, 255, 255);
}
.explore1 img {
	border-radius: 5px;
	width: 100%;
	height: 60%;
	background: rgba(0, 0, 0, 0.3);
	z-index: 999;
}

.left {
	height: 100px;
	width: 80%;
	padding: 25px;
}
.left img {
	border-radius: 5px;
	width: 100%;
	height: 50%;
}
.left h5 {
	color: darkgray;
}
.right {
	height: 100px;
	width: 20%;
	padding-top: 30px;
}
.right1 {
	height: 100px;
	width: 20%;
	margin-top: -12.5rem;
	margin-left: 28.125rem;
}
.button {
	width: 90%;
	border: none;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
	height: 40px;
	border-radius: 5px;
}
.button1 {
	margin-top: -300px;
	width: 90%;
	border: none;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
	height: 40px;
	border-radius: 5px;
}
.button2 {
	margin-top: -100px;
	width: 90%;
	border: none;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
	height: 40px;
	border-radius: 5px;
}
.introduction {
	margin: 20px;
	margin-top: -0.9375rem;
	text-indent: 50px;
}
.topic {
	margin-top: 20px;
	height: 100px;
	text-align: center;
}
.button-topic {
	border: none;
	width: 200px;
	background-color: rgb(255, 255, 255);
	height: 50px;
	border-radius: 50px;
	font-size: 1.125rem;
	font-weight: bold;
}
.card-heard {
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	height: 112px;
	border-bottom: 1px solid #ebebeb;
	overflow: hidden;
	margin: 0px 10px 20px 20px;
	width: 92%;
}
.card-header-row {
	margin: 15px;
	display: flex;
	width: 100%;
	height: 48%;
}
.header-col-1 {
	flex: 0 0 60%;
}
.header-col-3 {
	flex: 0 0 100%;
	ul {
		margin-top: -20px;
		width: 100%;
		display: flex;
		img {
			margin-left: -20px;
			width: 2.5rem;
			height: 2.5rem;
		}
		li {
			list-style-type: none;
			margin-left: 15px;
			margin-top: -7px;
		}
		li:last-child {
			margin-left: 30px;
		}
		.header-text {
			color: #999;
		}
	}
}
.header-col-2 {
	flex: 0 0 37%;
	input[type='button'] {
		width: 102px;
		height: 34px;
		border-radius: 3px;
		font-size: 14px;
		font-weight: 600;
		color: #0084ff;
		border: none;
		float: right;
		outline: none;
		background-color: rgba(0, 132, 255, 0.08);
		margin-top: 20px;
	}
}
.card-body {
	width: 92%;
	height: 210px;
	margin: 20px 20px 20px 20px;
}
.card-body-row {
	display: flex;
	width: 100%;
}
.card-col-1 {
	flex: 0 0 100%;
	display: block;
	height: 21px;
	line-height: 21px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-weight: 600;
	font-synthesis: style;
}
.card-col-2 {
	margin-top: 15px;
	height: 21px;
	line-height: 21px;
	color: #444;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.card-col-4 {
	height: 24px;
	font-size: 18px;
	color: #8590a6;
	font-weight: 600;
	margin-top: 22px;
	margin-left: 5px;
	font-synthesis: style;
	i {
		color: #8590a6;
		font-size: 22px;
		margin: 5px 20px;
	}
}
.card-col-3 {
	.body-ul {
		height: 17px;
		line-height: 17px;
		font-size: 15px;
		display: flex;
		margin-left: -20px;
		margin-top: 15px;
		margin-left: 20px;
		color: gainsboro;
		list-style-type: none;
		li:first-child {
			margin-left: -15px;
		}
		li {
			margin-left: 20px;
			color: gainsboro;
		}
	}
}
</style>
