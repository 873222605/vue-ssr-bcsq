<template>
	<main class="container">
		<div class="span11">
			<a href="/premium">
				<img src="../assets/premium_banner_v2.png" class="mb15 round pic" width="635" height="80">
			</a>
			<a href="/business">
				<img src="../assets/business_banner.png" class="mb20 round pic" width="635" height="80">
			</a>
			<indexList></indexList>
		</div>
		<div class="span5">
			<indexRankingList></indexRankingList>
			<indexLabel></indexLabel>
		</div>
	</main>
</template>

<script>
import indexList from './index_list.vue'
import indexRankingList from './index_ranking_list.vue'
import indexLabel from './index_label.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    indexList, indexRankingList, indexLabel
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
