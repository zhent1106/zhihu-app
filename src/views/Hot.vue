<template>
	<div>
		<div class="banner">
			<img src="../assets/image/start.png" alt="" style="height: 2.5rem;width: 2.5rem;margin-left: 250px;" />
			<h3 style="margin-left:10px;font-weight: bold;">热门收藏夹</h3>
		</div>
		<div class="container">
			<div class="row" v-for="(item, index) in favorite" :key="index">
				<div class="left">
					<div class="top1">
						<h4 class="title-set">{{ item.title }}</h4>
					</div>
					<div class="middle1">
						<img :src="item.creatorAvatar" alt="" class="img-avatara" />
						<h3 style="margin-left:60px;margin-top: -35px;font-size: 18px;">{{ item.creatorName }}&nbsp;&nbsp;创建</h3>
					</div>
					<div class="bottom">
						<div class="w-row">
							<div class="right1">
								<button class="button2"><h4 style="color: #1E90FF;font-size: 1.125rem;font-weight: bold;">关注收藏夹</h4></button>
							</div>
						</div>
						<h4 class="follower">{{ item.followers }}人关注</h4>
					</div>
				</div>
				<!-- 			竖线的写法 -->
				<div style="float:left;margin-top: 24px;width: 1px;height: 200px; background: darkgray;margin-right: 25px;"></div>
				<div class="right">
					<div class="top2">
						<h4 class="title-set1">{{ item.question_title }}</h4>
					</div>
					<div class="middle2">
						<h4 class="answer">{{ item.answerAuthorName }}:{{ item.answerContent.substring(0, 70) }}...</h4>
					</div>
					<div class="bottom2">
						<button class="button-topic">回答</button>
						<h4 class="tz">{{ item.voteupCount }}赞同·{{ item.commentCount }}评论</h4>
					</div>
					<div class="bottom3">
						<h4 class="totalCount">已收藏{{ item.totalCount }}条内容></h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default { 
	data() {
		return {
			favorite: [],
			currentPage:1,
			count:11,
			scroll: ''
		};
	},
	created() {
		this.axios({
			methods:'post',
			url:'http://localhost:8080/api/favorite/page',
			params:{
				count:this.count,
				currentPage:this.currentPage
			}
		}).then(res => {
			console.log(res.data.data.length);
			this.favorite = res.data.data;
			this.favorite.length = res.data.data.length;
		});
	},
	methods: {
		loadMore() {
			this.currentPage=this.currentPage+1;
			this.axios({
			methods:'post',
			url:'http://localhost:8080/api/favorite/page',
			params:{
				count:this.count,
				currentPage:this.currentPage
			}
				}).then(res => {
					console.log(res.data.data);
					let temp=[];
					temp=res.data.data;
					for(var i = 0 ;i < temp.length;i++){
						this.favorite.splice(this.currentPage*this.count,0,temp[i]);
					}
					console.log(this.favorite.length);
				});
		},
		scrollDs() {
			//变量scrollTop是滚动条滚动时，距离顶部的距离
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			//变量windowHeight是可视区的高度
			var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
			//变量scrollHeight是滚动条的总高度
			var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
			//滚动条到底部的条件
			if (scrollTop + windowHeight == scrollHeight) {
				//到了这个就可以进行业务逻辑加载后台数据了
				console.log("已经到底了哦！")
				this.loadMore();
				}
			}
		},
		mounted() {
			window.addEventListener('scroll', this.scrollDs);
		}
};
</script>

<style lang="scss" scoped>
.img-avatara {
	height: 2.5rem;
	width: 2.5rem;
	margin-top: 50px;
	margin-left: 0.625rem;
}
.follower {
	margin-top: -30px;
	margin-left: 120px;
	font-size: 18px;
}
.tz {
	font-size: 15px;
	margin-top: -25px;
	margin-left: 60px;
}
.answer {
	font-size: 1.125rem;
	color: #333333;
	margin-top: 20px;
}
h3 {
	color: #1a1a1a;
	font-size: 30px;
}
.totalCount {
	margin-top: 40px;
	font-size: 18px;
}
h4 {
	color: #a8b2b4;
	font-size: 20px;
}
.title-set {
	font-size: 1.125rem;
	font-weight: bold;
	color: black;
	margin-top: 20px;
}
.title-set1 {
	font-size: 1.125rem;
	font-weight: bold;
	color: black;
	margin-top: 15px;
}
.img1 {
	width: 30px;
	height: 30px;
	margin-top: 15px;
}
.button {
	width: 6.25rem;
	border: none;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
	height: 40px;
	border-radius: 5px;
	margin-left: 40.625rem;
	margin-top: -9.375rem;
}
.left {
	margin-left: 1.25rem;
	width: 35%;
}
.right {
	width: 65%;
}
.title-color {
	color: black;
	font-size: 1.25rem;
	font-weight: bold;
}
.button-topic {
	border: none;
	width: 40px;
	background-color: lightgray;
	height: 30px;
	font-size: 15px;
	font-weight: bold;
	margin-top: 15px;
}
.meta {
	margin-top: -0.625rem;
	color: gray;
}
.banner {
	margin-bottom: 10px;
	margin-top: 70px;
	height: 100px;
	border: 1px solid #d6d6d6;
	box-shadow: 2px 5px 5px #ddd;
	padding-left: 10;
	display: flex;
	align-items: center;
	img {
		width: 12.5rem;
		height: 6.25rem;
	}
}
.button2 {
	width: 100%;
	border: none;
	background-color: rgb(235, 245, 255);
	color: rgb(30, 134, 255);
	height: 35px;
	border-radius: 5px;
	margin-left: 0.3125rem;
	margin-top: 60px;
}
.container {
	overflow: auto;
	margin: 0 auto;
	width: 70%;
	.row {
		background-color: #ffffff;
		display: flex;
		border: 1px solid #d6d6d6;
		border-radius: 4px;
		height: auto;
		padding: 14px;
		box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);
	}
}
.introduction {
	font-size: 18px;
	// color: #5c5e5c;
	margin-top: 0.625rem;
}
</style>
