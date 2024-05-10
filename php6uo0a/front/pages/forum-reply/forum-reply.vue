<template>
	<view class="container">
		<form>
			<view class="cu-form-group">
				<textarea :style='{"boxShadow":"0 0 0px rgba(0,0,0,.6) inset","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(227, 227, 227, 1)","borderRadius":"8rpx","color":"#333","borderWidth":"6rpx","fontSize":"28rpx","borderStyle":"solid","height":"300rpx"}' v-model="contont" placeholder="回复"></textarea>
			</view>
			<button :style='{"boxShadow":"0 0 0px rgba(0,0,0,0) inset","backgroundColor":"rgba(0, 102, 51, 1)","borderColor":"rgba(255, 255, 255, 1)","borderRadius":"8rpx","color":"#fff","borderWidth":"1","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onReplyTap" class="bg-red margin-tb-sm">提交回复</button>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pid: '',
				content: '',
				username: '',
				user: {},
			}
		},
		async onLoad(options) {
			this.pid = options.pid;
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
									                                    if(table == `xuesheng`){
                this.username = this.user.xuehao
            }
                                                                                                                                                                                                                        						            						                                    if(table == `jiaoshi`){
                this.username = this.user.jiaoshigonghao
            }
                                                                                                                                                                                                                        						            			            			            			            			            			            			            			            			            			            		},
		methods: {
			async onReplyTap() {
				await this.$api.save('forum',{
					parentid: this.pid,
					content: this.contont,
					username: this.username
				});
				this.$utils.msgBack('回复成功');
			}
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
	
	.container {
		padding: 20upx;
	}
	
	.cu-form-group {
		padding: 0;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.bg-red {
		line-height: 80rpx;
	}
</style>
