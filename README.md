# simall-ui

[官网链接](https://kuanglinfeng.gitee.io/simall-ui-website)

## 介绍

名字由来：是simple 和 small两个词的拼接，也是该UI库的特点 - 使用简单、体积轻巧

Simall UI 是一款基于 Vue 3 和 TypeScript 的 UI 组件库。

这款组件库其实是我为了学习Vue3 Composition API 而写的，全程亲手编写，尽量不采用第三方库，这个文档也都是我自己写的。

组件的样式、色彩的搭配参考了一些成熟的UI框架（如：Ant Design、Element UI）。

目前代码尚未完工，持续更新中。本组件库仅供学习交流，请勿在生产环境中使用。 欢迎讨论交流，如果你觉得还不错，可以给我 Star。


## 安装

该组件库基于 Vue3，所以请在 Vue3 环境下安装使用。

打开终端运行下列命令：

```
npm install simall-ui
```

或

```
yarn add simall-ui
```

## 开始使用

请先安装本组件库。

然后在你的代码中写入下面的代码

*** 注意：使用时，请按如下方式引入组件及组件样式 ***

```js
// 引入组件
import { Button, Switch, Tabs, Tab, Dialog, openDialog } from 'simall-ui'
// 引入样式
import 'simall-ui/dist/lib/simall-ui.css'
```

就可以使用我提供的组件了。

### Vue 单文件组件

代码示例：

```vue
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
// 引入组件
import { Button, Switch, Tabs, Tab, Dialog, openDialog } from 'simall-ui'
// 引入样式
import 'simall-ui/dist/lib/simall-ui.css'

export default {
  components: { Button }
}
</script>
```
