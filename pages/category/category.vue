<template>
	<!-- 最大的盒子 -->
	<view class="categoryContainer">
		<view class="header">
			<!-- 搜索框-->
			<view class="search">搜索商品</view>
		</view>
		<!-- 左边的 -->
		<view class="main">
			<view class="left">
				<view @click="changeIndex(index)" class="leftItem" :class="{active:index ==currentIndex}" v-for="(category, index) in arr" :key="category.id">
					{{ category.name }}
				</view>
			</view>
			<!-- 右边的 -->
			<scroll-view class="rightScroll" scroll-y="true" enable-flex>
				<view class="scrollItem">
					<!-- 右侧上面的大图 -->
					<image :src="showGood.imgUrl" mode="" class="itemImg"></image>
					<!-- 下边的商品图和文字 -->
					<view class="goodsList">
						<view class="goods" v-for="item in showGood.subCateList">
							<image :src="item.wapBannerUrl" mode="" class="goodsImg"></image>
							<text class="goodsText">{{item.name}}</text>
							
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			currentIndex:0
		};
	},
	mounted() {
		this.getCategoryList();
	},
	methods: {
		getCategoryList() {
			this.$store.dispatch('getCategoryData');
		},
		changeIndex(index){
			this.currentIndex = index;
			
		}
	},
	computed: {
		...mapState({
			arr: state => state.category.arr
		}),
		showGood(){
			return this.arr[this.currentIndex];
		}
	}
};
</script>

<style lang="stylus">
.categoryContainer
	.header
		height 80rpx
		display flex
		justify-content center
		align-items center
		.search
			width 90%
			height 60rpx
			background #aaa
			font-size 28rpx
			text-align center
			line-height 60rpx
	.main
		display flex
		border-top 1px solid #AAAAAA
		box-sizing border-box
		.left
			width 150rpx
			.leftItem
				height 80rpx
				font-size 28rpx
				text-align center
				line-height 80rpx
				&.active
					border-bottom 1px solid blue
					background-color pink
		.rightScroll
			height calc(100vh -80rpx)
			flex 1
			border-left 1px solid #aaa
			box-sizing border-box
			.scrollItem
				.itemImg
					display block
					width 520rpx
					height 190rpx
					margin 20rpx auto
				.goodsList
					display flex
					flex-wrap wrap
					margin 0rpx 40rpx
					.goods
						width 33.3333%
						text-align center
						.goodsImg
							width 100%
							height 144rpx
						.goodsText
							font-size 28rpx
</style>
