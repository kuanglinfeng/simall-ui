# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

*** 注意：使用时，请按如下方式引入组件及组件样式 ***

```
// 引入组件
import { Button, Switch, Tabs, Tab, Dialog, openDialog } from 'simall-ui'
// 引入样式
import 'simall-ui/dist/lib/simall-ui.css'
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
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