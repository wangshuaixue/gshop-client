//定义一个自定义过滤器

import Vue from 'vue'
import moment from 'moment'

Vue.filter('data-format',function (value,format='YYYY-MM-DD HH:mm:ss') {
  return moment(value).format(format)
})
