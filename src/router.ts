import {h} from 'vue'
import {
  createWebHashHistory,
  createRouter
} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import ButtonDemo from './components/button/ButtonDemo.vue'
import SwitchDemo from './components/switch/SwitchDemo.vue'
import DialogDemo from './components/dialog/DialogDemo.vue'
import TabsDemo from './components/tabs/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'

const md = content => h(Markdown, {content: content, key: content})

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {
          path: 'intro',
          component: md(intro)
        },
        {
          path: 'install',
          component: md(install)
        },
        {
          path: 'get-started',
          component: md(getStarted)
        },
        { path: 'button', component: ButtonDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    }
  ]
})

export default router