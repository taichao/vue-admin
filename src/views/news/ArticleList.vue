<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" >
				<el-form-item>
					<el-input v-model="title" placeholder="输入内容可过滤"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" >查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="filterArticle" highlight-current-row v-loading="listLoading" style="width: 100%;">
			<el-table-column prop="id" label="ID" width="120">
			</el-table-column>
			<el-table-column prop="title" label="新闻标题" width="500" sortable>
			</el-table-column>
			<el-table-column prop="publish_date" label="发布时间" width="180" sortable>
			</el-table-column>
			<el-table-column label="操作" width="150">
				<template scope="scope">
					<el-button size="small" type="danger" @click="toComment(scope.$index, scope.row)">评论</el-button>
				</template>
			</el-table-column>
		</el-table>
	</section>
</template>

<script>
	import util from '../../common/js/util'
	import { getArticleList } from '../../api/api';

	export default {
		data() {
			return {
				title: '',
				article: [],
				listLoading: false,
			}
		},
		methods: {
			getArticleList:async function() {
				let param = {
					recentDays: 1
				}
				let data = await getArticleList(param)
				console.log(data)
				this.article = data.result

			},
			toComment:function(index,row) {
				this.$router.push({path:'/comment-list', params: row})
			}
		},
		computed: {
			filterArticle:function() {
				if(this.title === '') {
					return this.article
				} else {
					return this.article.filter(e => e.title.indexOf(this.title) != -1)
				}
			}
		},

		mounted() {
			this.getArticleList()
		}
	}
</script>

<style scoped>

</style>