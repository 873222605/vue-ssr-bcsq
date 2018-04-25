<template>
  <div id="list">
    <article class="clearfix popular_package_row" v-for="list in obj">
      <div class="package_icon">
        <a><img :src="cover(list.cover)" width="60" height="60" class="pic" alt="封面"></a>
      </div>
      <div class="package_detail">
        <a :title="list.title" class="s20">{{list.title}}</a>
        <div class="s12 clearfix mt12" style="overflow: hidden;">
        	<img src="https://dotinstall.com/profile_images/42/295935_1522202778_square.jpg" class="userIcon pull-left"><span class="listInf">lzh / {{list.type}} / {{time(list.time)}} / {{list.read == null || list.read == '' || list.read == undefined ? 0 : list.read}}次浏览</span>
        </div>
      </div>
    </article>
    <div class="mod-footer">
      <div class="page-control clearfix">
        <ul class="pagination pull-right">
          <li><a class="cp">共{{count}}篇</a></li>
          <li><a class="cp">首页</a></li>
          <li><a class="cp">上一页</a></li>
          <li><a class="cp">下一页</a></li>
          <li><a class="cp">末页</a></li>
        </ul>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      obj: '',
      count: ''
    }
  },
  mounted: function () {
    this.noteList()
  },
  methods: {
    noteList: function () {
      let _this = this
      let limit = 10
      let page = 1
      if (localStorage.obj && localStorage.obj !== ' ' && localStorage.obj !== undefined) {
        _this.obj = JSON.parse(localStorage.obj)
        _this.count = localStorage.totalCount
      } else {
        this.$http({
          method: 'get',
          url: `http://127.0.0.1:9000/article?limit=${limit}&page=${page}`,
          transformResponse: [function (data) {
            let list = JSON.parse(data)
            _this.obj = list.list
            localStorage.obj = JSON.stringify(list.list)
            localStorage.totalCount = list.totalCount
            _this.count = list.totalCount
          }],
          progress: [function (message) {
            console.log(message)
          }]
        })
      }
    },
    time: function (dateTimeStamp) {
      var date = new Date(dateTimeStamp)
      dateTimeStamp = Date.parse(date)
      var minute = 1000 * 60
      var hour = minute * 60
      var day = hour * 24
      var week = day * 7
      var month = day * 30
      var now = new Date().getTime()
      var diffValue = now - dateTimeStamp

      if (diffValue < 0) {
        return
      }

      var minC = diffValue / minute
      var hourC = diffValue / hour
      var dayC = diffValue / day
      var weekC = diffValue / week
      var monthC = diffValue / month
      var result = ''

      if (monthC >= 1) {
        result = '' + parseInt(monthC) + '月前'
      } else if (weekC >= 1) {
        result = '' + parseInt(weekC) + '周前'
      } else if (dayC >= 1) {
        result = '' + parseInt(dayC) + '天前'
      } else if (hourC >= 1) {
        result = '' + parseInt(hourC) + '小时前'
      } else if (minC >= 1) {
        result = '' + parseInt(minC) + '分钟前'
      } else {
        result = '刚刚'
      }
      return result
    },
    cover: function (url) {
      return url === '' || url === null || url === undefined ? '../../static/img/bc_f.png' : url
    }
  }
}
</script>
<style>
.listInf{
  height: 20px;
  line-height: 20px;
  display: block;
  float: left;
  color: #888;
  font-size: 12px;
}
.popular_package_row {
    border-bottom: 1px dashed #ccc;
    margin-bottom: 10px;
    padding-bottom: 10px;
}
.popular_package_row .package_icon {
    float: left;
    width: 65px;
    margin-right: 10px;
}
.popular_package_row .package_detail {
    float: left;
    width: 545px;
}
.popular_package_row .prog_users {
    float: left;
    width: 125px;
}
ul.userIcons {
    list-style: none;
    margin: 0;
}
ul.userIcons>li {
    line-height: 30px;
    display: inline;
}
.userIcon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background-color: #fff;
    padding: 1px;
    border: 1px solid #ddd;
    margin-right: 4px;
    border-radius: 50%;
}
#list .pagination>li>a{
    line-height: 12px;
    font-size: 12px;
}
</style>
