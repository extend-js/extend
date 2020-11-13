if (!/yarn\.js$/.test(process.env.npm_execpath || '')) {
  console.warn('\u001b[33m这个存储库需要 Yarn 1.x 才能使脚本正常工作.\u001b[39m\n');
  process.exit(1);
}
