import Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world';
});
console.log('123');
app.listen(3000);
