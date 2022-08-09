<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
             wx.login({
				 success: (res) => {
					 console.log(res.code)
					 uniCloud.callFunction({
					 	name:"login",
						data:{
							code:res.code
						},
						success: async (res) => {
						        const openid = res.result.data.openid
								const db = uniCloud.database()
								let dbRes = await db.collection("users").where({openid: openid}).get()
								
								if (dbRes.result.data.length > 0) {
									console.log({dbRes})
									return dbRes.result.data[0]
								} else {
									const now = Date.now()
									dbRes = await db.collection("users").add({
										openid:openid,
										createtime: now
									})
								}
								return {
									_id:dbRes.id,
									openid:openid,
									createtime:now
								}
								
							}	
					 })
				 }
			 })
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
