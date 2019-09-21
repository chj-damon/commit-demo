'use strict';

module.exports = {

  types: [
    {
      value: 'WIP',
      name : '💪  WIP:      开发中'
    },
    {
      value: 'feat',
      name : '✨  feat:     新功能'
    },
    {
      value: 'fix',
      name : '🐞  fix:      修复bug'
    },
    {
      value: 'refactor',
      name : '🛠  refactor: 代码重构（既不是新功能也不是改bug）'
    },
    {
      value: 'docs',
      name : '📚  docs:     修改了文档'
    },
    {
      value: 'test',
      name : '🏁  test:     更新了测试用例'
    },
    {
      value: 'style',
      name : '💅  style:    修改了样式文件'
    },
    {
      value: 'revert',
      name : '⏪  revert:   回退提交'
    }
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};