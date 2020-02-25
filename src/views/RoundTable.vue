<template>
	<div>
		<div class="banner">
			<ul>
				<p class="text" style="margin-left: 1.25rem;font-weight: bold;">圆桌</p>
				<li>
					<router-link to="/creator/roundtable-host" class="router"><p class="createtable-text" style="color: #1E90FF;">举办圆桌</p></router-link>
				</li>
			</ul>
		</div>
		<div class="container">
			<div class="row" >
				<div class="w-col-3 round" v-for="(item, index) in roundtable" :key="index" >
					<div>
					<img :src="item.banner" alt="" />
					<h4>{{ item.name }}</h4>
					<h5>该圆桌被预览{{ item.includeCount }}M次</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'roundtable',
	data() {
		return {
			roundtable: [],
			scroll: '',
			page: 1
		};
	},
	created() {
		this.axios({
			method: 'get',
			url: 'http://localhost:8080/api/roundtable',
			data: JSON.stringify({
				currentPage: this.page,
				pageSize: 4
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			this.roundtable = res.data.data;
		});
	},
	methods: {
		loadMore() {
			this.page = this.page + 1;
			this.axios({
				method: 'get',
				url: 'http://localhost:8080/api/roundtable',
				data: JSON.stringify({
					currentPage: this.page,
					pageSize: 2
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(res => {
				console.log(res.data.data);
				let temp = [];
				temp = res.data.data;
				if (temp.length === 0) {
					return;
				}
				for (var i = 0; i < temp.length; i++) {
					this.roundtable.splice(this.page * 2, 0, temp[i]);
				}
				console.log(this.roundtable.length);
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
				this.loadMore();
			}
		},
		mounted() {
			window.addEventListener('scroll', this.scrollDs);
		}
	}
};
</script>

<style lang="scss" scoped>
h3 {
	color: #1a1a1a;
	font-size: 30px;
}
h4 {
	color: #a8b2b4;
	font-size: 19px;
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
.title-color {
	color: black;
	font-size: 1.25rem;
	font-weight: bold;
}
.meta {
	margin-top: -0.625rem;
	color: gray;
}
.createtable-text {
	color: blue;
	margin-top: -1.3125rem;
	margin-left: 56.25rem;
	font-weight: bold;
}

.banner {
	margin-top: 80px;
	height: 60px;
	width: 60%;
	margin-left: 340px;
	border: 1px solid #d6d6d6;
	display: flex;
	align-items: center;
	background-color: #ffffff;
}
.row {
	display: flex;
	flex-wrap: wrap;
}
.w-fx-between {
	padding: 20px;
	border-bottom: 1px solid rgb(246, 246, 246);
}
.round {
	height: 250px;
	position: relative;
}
.round img {
	margin: 0;
	position: absolute;
	top: 7%;
	left: 7%;
	width: 90%;
	height: 80%;
	opacity: 1.5;
	border-radius: 10px;
}
.round h4 {
	color: white;
	position: absolute;
	bottom: 40px;
	left: 35px;
	width: 70%;
	flex-wrap: wrap;
}
.round h5 {
	position: absolute;
	bottom: 5px;
	left: 20px;
	color: darkgray;
}
.container {
	display: block;
	margin: auto;
	width: 60%;
	background-color: white;
}
</style>
