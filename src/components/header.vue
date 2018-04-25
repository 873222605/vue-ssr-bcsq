<template>
  <header>
    <div class="navbar navbar-fixed-top " id="index_index_page">
    <div class="navbar-inner">
    <div id="topbar_inner_container" class="container">
    <img class="logo" src="../assets/logo.png" />

    <ul class="nav" id="global_menu" style="position:relative;font-size:12px;">
    <li class=" movable" data-menu-index="1"><router-link to="/index"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首页</font></font></router-link></li>
    <li class=" movable" data-menu-index="2"><router-link to="/article"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章</font></font></router-link></li>
    <li class=" movable" data-menu-index="3"><router-link to="/index"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">笔记</font></font></router-link></li>
    <li>
    <form action="https://dotinstall.com/search" id="topbar_search" class="form pull-left enable-incremental-lesson-search" onsubmit="if ($(this).find('.q').val() === '') { return false; }">
    <div class="input-append" style="padding:12px 0 0 0;">
    <div class="btn-group">
    <input type="text" style="font-size:12px;" placeholder="" name="q" class="q" id="q_in_topbar" value="" autocomplete="off">
    <a type="submit" class="q_in_topbar_btn"><i class="icon-search"></i></a>
    </div>
    </div>
    <div id="incremental"></div>
    </form>

    </li>
    </ul><!-- /.nav -->

    <ul class="nav pull-right topbar-right-nav">
      <li id="topbar_login_button">
      <a class="btn btn-small lh24" href="https://dotinstall.com/login"><i class="icon-user"></i> 注册</a>
      </li>
    </ul><!-- /nav pull-right -->

    </div><!--/container -->
    </div><!-- /navbar-inner -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
