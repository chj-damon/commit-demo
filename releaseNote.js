'use strict';

var conventionalGithubReleaser = require('conventional-github-releaser');

var AUTH = {
  type: 'oauth',
  token: '8b3515655168a3f1cba7f5ebf727ce6ac012b1e6'
};

conventionalGithubReleaser(AUTH, {
  preset: 'angular'
});