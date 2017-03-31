require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory,browserHistory} from 'react-router'

import { Provider } from 'react-redux'
import { store } from './redux/store'

import Index from './component/index'
import Board from './component/board'
import Send from './component/send'
import Buy from './component/buy'
import My from './component/my'
import Register from './component/Register'
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRedirect to="/board"></IndexRedirect>
        <Route path="board" title="首页" component={Board}></Route>
        <Route path="buy" title="看房日程" component={Buy}></Route>
        <Route path="send" title="发布房源" component={Send}></Route>
        <Route path="my" title="我的" component={My}></Route>
      </Route>

      <Route path="/Register/:type"  component={Register}></Route>

    </Router>
  </Provider>,
  document.getElementById('root')
)
