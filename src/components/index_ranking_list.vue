<template>
	<div id="ranking" class="ranking">
		<h2 class="text-center">最新文章 <span class="label label-warning">NEW !!</span></h2>
		<div class="sboxInner">
			<ul class="unstyled s12" id="new_lessons">
				<li class="clearfix" v-for="list in obj">
					<div class="new_lesson_img">
						<a><img :src="list.cover" width="40" height="40" class="pic" alt=""></a>
					</div>
					<div class="new_lesson_info">
						<a>{{list.title}}</a>
						<span class="s11"></span>
						<img src="../assets/premium_tag.png" width="43" height="11" title="プレミアム"><br>
						{{list.content && list.content != '' ? list.content.substring(0,30) : '暂无简介'}}
					</div>
				</li>
			</ul>
			<div class="text-right s12"><a href="/lessons/search">» 查看更多</a></div>
		</div><!-- /sboxInner -->
	</div>
</template>
<script>
export default {
  name: 'ranking',
  data () {
    return {
      obj: [
        {
          'cover': 'https://dotinstall.com/package_img/basic_html_v3/main.png',
          'title': 'ES6经典入门到进阶',
          'content': '早期的 ECMA版本是 ECMA-262 标准，可以俗称 1.0后续好几年，不断提案不断改进，后来一直到2011年，版本其实到了 ECMA5.x了'
        },
        {
          'cover': 'https://dotinstall.com/package_img/basic_html_v3/main.png',
          'title': 'ES6经典入门到进阶',
          'content': '早期的 ECMA版本是 ECMA-262 标准，可以俗称 1.0后续好几年，不断提案不断改进，后来一直到2011年，版本其实到了 ECMA5.x了'
        },
        {
          'cover': 'https://dotinstall.com/package_img/basic_html_v3/main.png',
          'title': 'ES6经典入门到进阶',
          'content': '早期的 ECMA版本是 ECMA-262 标准，可以俗称 1.0后续好几年，不断提案不断改进，后来一直到2011年，版本其实到了 ECMA5.x了'
        }
      ]
    }
  }
}
</script>
<style>
.ranking {
    margin: 0 0 18px;
    border: 1px solid #ddd;
    -webkit-box-shadow: inset 0 1px 0 #ffffff;
    -moz-box-shadow: inset 0 1px 0 #ffffff;
    box-shadow: inset 0 1px 0 #ffffff;
    position: relative;
}
.ranking>h2 {
    font-size: 12px;
}
.ranking>h2, .ranking>h3 {
    background-color: #f2f2f2;
    padding: 2px 8px;
    text-shadow: 0 1px 0 #ffffff;
    line-height: 30px;
    border-bottom: 1px solid #ccc;
    margin: 0;
}
.label-warning, .badge-warning {
    background-color: #f89406;
}
.label {
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
}
.label, .badge {
    display: inline-block;
    padding: 2px 4px;
    font-size: 10.998px;
    font-weight: bold;
    line-height: 14px;
    color: #ffffff;
    vertical-align: baseline;
    white-space: nowrap;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}
.sboxInner {
    border-top: 1px solid #fdfdfd;
    padding: 12px;
}
ul.unstyled, ol.unstyled {
    margin-left: 0;
    list-style: none;
}
.sboxInner ul {
    margin-bottom: 0;
}
.s12 {
    font-size: 12px;
    font-weight: normal;
}
.side_lessons > li, #new_lessons > li, .side-sbox-list > li {
    border-bottom: 1px dashed #ccc;
    margin-bottom: 7px;
    padding-bottom: 4px;
}
.new_lesson_img {
    float: left;
    width: 55px;
}
.new_lesson_img img {
    width: 40px;
    height: 40px;
}
.pic {
    padding: 1px;
    border: 1px solid #ddd;
}
img {
    max-width: 100%;
    width: auto\9;
    height: auto;
    vertical-align: middle;
    border: 0;
    -ms-interpolation-mode: bicubic;
}
.new_lesson_info {
    float: left;
    width: 195px;
    line-height: 1.4;
}
.s11 {
    font-size: 11px;
    font-weight: normal;
}
</style>