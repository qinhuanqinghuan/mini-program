<template>
	<!-- 最外层的大盒子 -->
	<view class="indexContainer">
		<!-- 第一行的盒子 -->
		<view class="header">
			<!-- 网易严选的图片 -->
			<image src="../../static/images/logo.png" class="logo" alt="" />
			<!-- 中间搜索的盒子 -->
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" class="input" placeholder="搜索商品" placeholder-class="place" />
			</view>
			<!-- 右边的按钮 -->
			<button class="btn">南方姑娘</button>
		</view>
		<!-- 导航栏 -->
		<scroll-view class="navScroll" scroll-x="true" enable-flex>
			<view class="item" :class="{ active: currentId === -1 }" @click="changeNav(-1)">推荐</view>
			<view class="item" :class="{ active: currentId === nav.L1Id }" @click="changeNav(nav.L1Id)" v-for="(nav, index) in navList" :key="nav.L1Id">{{ nav.text }}</view>
		</scroll-view>
		<!-- 主要内容 -->
		<scroll-view scroll-y="true" class="mainScroll">
			<!-- 点击推荐对应内容 -->
			<view class="mainItem">
				<!-- 轮播图 -->
				<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="mainSwiper">
					<swiper-item class="mainItem">
						<view class="swiper-item">
							<img
								src="https://yanxuan.nosdn.127.net/3863da38d02fe0879fd2fad5a4c82359.jpg?type=webp&ima                              geView&quality=75&thumbnail=750x0"
								alt=""
								class="mainImg"
							/>
						</view>
					</swiper-item>

					<swiper-item class="mainItem">
						<view class="swiper-item">
							<image
								class="mainImg"
								src="https://yanxuan.nosdn.127.net/31307c24c668ca2ecfecc6a7c1e5caa5.								jpg?type=webp&imageView&quality=75&thumbnail=750x0"
								mode=""
							></image>
						</view>
					</swiper-item>

					<swiper-item class="mainItem">
						<view class="swiper-item">
							<image
								class="mainImg"
								src="https://yanxuan.nosdn.127.net/07a280b9a1dcb64a7bcf9a969bc996d1.								jpg?type=webp&imageView&quality=75&thumbnail=750x0"
								mode=""
							></image>
						</view>
					</swiper-item>
				</swiper>
				<!-- 图标列表 -->
				<view class="iconList">
					<!-- 每一个小图标 -->
					<view class="iconItem" v-for="(icon,index) in iconList">
						<img :src="icon.icon" alt="" class="iconImg" />
						<text class="iconText">{{icon.desc}}</text>
					</view>

				</view>
				<!-- 十个分类列表 -->
				<view class="categoryList">
					<!-- 每一个小的 -->
					<view class="category" v-for="(category,index) in navList" :key="category.L1Id">
						<img :src="category.picUrl" alt="" class="catImg" />
						<text class="catText">{{category.text}}</text>
					</view>
				</view>
				
			</view>
			<Floor v-for="(floor,index) in floorList" :key="index" :floor="floor" ></Floor>
		</scroll-view>
	
	</view>
</template>

<script>
import Card from  "./Card.vue"
import Floor from './Floor.vue'
import { mapState, mapGetters } from 'vuex';
export default {
	
	data() {
		return {
			currentId: -1
		};
	},
   components: {
		Floor,
		Card
	},
	mounted() {
		this.getHomeData();
	},
	methods: {
		getHomeData() {
			this.$store.dispatch('getHomeData');
		},
		// 点击切换nav
		changeNav(navId) {
			this.currentId = navId;
		}
	},
	computed: {
		...mapState({
			homeData: state => state.home.homeData
		}),
		...mapGetters(['navList', 'iconList', 'floorList'])
	}
};
</script>

<style lang="stylus">
.indexContainer
	.header
		height 80rpx
		align-items center
		display flex
		.logo
			height 40rpx
			width 120rpx
			margin 10px 20rpx
		.search
			height 60rpx
			display flex
			border 1px solid #ccc
			flex 1
			box-sizing border-box
			align-items center
			.iconfont
				margin 0 10rpx
			.input
				.place
					font-size 28rpx
					color red
		.btn
			height 60rpx
			margin 0 10rpx
			text-align center
			line-height 60rpx
			font-size 30rpx
	.navScroll
		height 80rpx
		display flex
		.item
			flex-shrink 0
			width 140rpx
			height 80rpx
			text-align center
			line-height 80rpx
			font-size 28rpx
			box-sizing border-box
			&.active
				border-bottom 1px solid red
	.mainScroll
		height calc(100vh - 160rpx)
		.mainItem
			.mainImg
				width 100%
				height 350rpx
			.iconList
				margin-top 10rpx
				height 32rpx
				display flex
				justify-content space-around
				.iconItem
					height 32rpx
					display flex
					align-items center
					.iconImg
						width 32rpx
						height 32rpx
					.iconText
						font-size 24rpx
			.categoryList
				display flex
				flex-wrap wrap
				.category
					width 20%
					display flex
					flex-direction column
					align-items center
					.catImg
						width 110rpx
						height 110rpx
						border-radius 30rpx
						margin 20rpx 0
					.catText
						font-size 28rpx
</style>
