<template>
	<main class="container">
		<div class="span11">
			<h2 class="s16b page-header">
				<span>
					所有文章
				</span>
			</h2>
			<articleList></articleList>
		</div>
		<div class="span5">
			<articleRankingList></articleRankingList>
			<articleLabel></articleLabel>
		</div>
	</main>	
</template>

<script>
import articleList from './article_list.vue'
import articleRankingList from './index_ranking_list.vue'
import articleLabel from './index_label.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    articleList, articleRankingList, articleLabel
  }
}
</script>
<style>
.span5{
	width: 280px;
	float: right;
}
	.page-header {
		padding-bottom: 8px;
		margin: 18px 0 27px;
		margin: 0 0 18px 0;
		border-bottom: 1px solid #eeeeee;
	}
	.s16b {
		font-size: 16px;
		font-weight: bold;
	}
	.flr {
    float: right;
    font-weight: normal;
}
.s13 {
    font-size: 13px;
    font-weight: normal;
}
.s16b {
    font-size: 16px;
    font-weight: bold;
}
	.span11 {
		width: 640px;
		float: left;
	}
	.mb15{
	margin-bottom:15px;
}
.mb20{
	margin-bottom:20px;
}
.round {
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
	max-width: 100%;
    width: auto\9;
    height: auto;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
}
.pic {
    padding: 1px;
    border: 1px solid #ddd;
}
</style>