<template>
	<div class="all-packages-list" id="list">
		<ul class="s12">
			<li class="clearfix">
				<a href="/lessons/basic_html_v3">2018 年腾讯前端一面总结（面向 2019 届学生）</a>
			</li>
			<li class="clearfix">
				<a href="/lessons/basic_html_v3">【收藏】这么多WEB组件(CSS)，攒一个网站够了吧？</a>
			</li>
			<li class="clearfix">
				<a href="/lessons/basic_html_v3">canvas 实现烟花效果（加强版）</a>
			</li>
			<li class="clearfix">
				<a href="/lessons/basic_html_v3">抄别人的，一方面为了自己方便看，另一方面也是方便一下大家</a>
			</li>
			<li class="clearfix">
				<a href="/lessons/basic_html_v3">10分钟搞定Node全栈（基于Egg+vue+webpack）</a>
			</li>
		</ul>
	</div>	
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
	.all-packages-list ul {
    margin: 0;
    list-style: none;
    padding: 0;
}
.s12 {
    font-size: 12px;
    font-weight: normal;
}
.all-packages-list ul li {
    border-bottom: 1px dashed #eee;
    padding: 0 0 7px 0;
    margin: 0 0 7px 0;
}
.s11 {
    font-size: 11px;
    font-weight: normal;
}
</style>