import {h} from 'vue'
import {
  createWebHashHistory,
  createRouter
} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'

const md = filename => h(Markdown, {path: `../markdown/${filename}`, key: filename})

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
          component: md('intro.md')
        },
        {
          path: 'install',
          component: md('install.md')
        },
        {
          path: 'get-started',
          component: md('get-started.md')
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