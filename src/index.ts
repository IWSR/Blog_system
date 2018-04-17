import * as Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'hello world';
});
let a = 3;
console.log(a);
console.log('123');
console.log('1234');
app.listen(3001);
