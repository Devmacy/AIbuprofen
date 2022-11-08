
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).


# 分支情况
## main 分支：
主分支，最终的、稳定的、经过测试没有 bug 的、可部署于生产环境的分支
只能由 release 和 hotfix 分支合并，任何情况下都不能直接修改代码
## dev 分支：
主要开发分支，贯穿于整个项目的生命周期
始终保持最新版本，功能模块开发任务交给 feature 分支，测试任务交给 release 分支
## hotfix 分支：
热修复分支，当 main 分支部署到生产环境后发生紧急状况，需要及时处理时，该分支负责热修复，即在保证应用不下线的条件下，对 bug 进行紧急修复
该分支以 main 分支为基线，修复 bug 后，合并到 main 分支部署上线，同时也合并到 dev 分支保持最新进度
命名规则： hotfix/NAME 或 hotfix-NAME
## feature 分支：
功能模块开发分支，对应于一个特定的功能模块
该分支以 dev 分支为基线，完成开发工作后再合并到 dev 分支
命名规则：feature/NAME 或 feature-NAME
## release 分支：
预发布分支，在发布正式版本前进行全面测试和修复
该分支以 dev 分支为基线进行全面测试，若发生 bug 则可直接在该分支修复并提交
经过测试没有问题之后，合并到 main 分支部署上线，同时也合并到 dev 分支保持最新进度
命名规则：release/NAME 或 release-NAME


## git提交信息，每个类型值都表示了不同的含义，类型值必须是以下的其中一个：
- feat：提交新功能
- fix：修复了bug
- docs：只修改了文档
- style：调整代码格式，未修改代码逻辑（比如修改空格、格式化、缺少分号等）
- refactor：代码重构，既没修复bug也没有添加新功能
- perf：性能优化，提高性能的代码更改
- test：添加或修改代码测试
- chore：对构建流程或辅助工具和依赖库（如文档生成等）的更改
