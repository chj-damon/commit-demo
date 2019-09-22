#!/usr/bin/env node 
'use strict';

const conventionalGithubReleaser = require('conventional-github-releaser');

const auth = {
  type: 'oauth',
  url: 'https://api.github.com/',
  token: '8b3515655168a3f1cba7f5ebf727ce6ac012b1e6'
};
const changelogOpts = {
  preset: 'custom-config',
  emojis: true,
  authorName: true,
  authorEmail: true
};
const context = {
  title: '陈杰测试',
  host: 'https://github.com',
  owner: 'chj-damon',
  repository: 'commit-demo',
};
const gitRawCommitsOpts = {};
const parserOpts = {};
const writerOpts = {};
const userCb = (err, responses) => {
  if (!err) {
    console.log(responses);
  }
}
conventionalGithubReleaser(auth, changelogOpts, context, gitRawCommitsOpts, parserOpts, writerOpts, userCb);