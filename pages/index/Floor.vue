<template>
	<view class="floor">
		<!-- 上边的大图 -->
		<image :src="floor.titlePicUrl" class="floorImg" mode=""></image>
		<!-- 下边的小图 -->
		<scroll-view scroll-x="true" enable-flex class="floorScroll">
			<view class="item" v-for="(item,index) in floor.itemList" :key="item.id">
				<image :src="item.showPicUrl" mode="" class="itemImg"></image>
				<text class="itemText">{{item.simpleDesc}}</text>
			</view>
			<view class="item">
				<text class="single">查看更多>></text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
export default{
	props:['floor']
}
</script>

<style lang="stylus">
	.floor
		.floorImg
			width: 100%
			height: 350rpx
		.floorScroll
			height: 300rpx
			display: flex
			.item
				width: 200rpx
				margin-right:20rpx
				.single
					display: block
					width:200rpx
					height: 300rpx
					text-align: center
					line-height: 300rpx
				.itemImg
					background-color:#aaa
					width: 200rpx
					height: 200rpx
				.itemText
					font-size: 28rpx
					display: -webkit-box;
					-webkit-box-orient: vertical
					-webkit-line-clamp: 2
					overflow: hidden
				
</style>