import fse from 'fs-extra'; // fs 扩展工具包
import { resolveRoot } from './utils';
// import docJson from '../docsJson/validator.json';

makeDoc('validator', {});

/**
 * 通过 json 文件产生 markdown
 * @param { string } _target 软件包名
 * @param { any } _json 文档 json 对象
 */
function makeDoc(_target: string, _json: any) {
  fse.ensureDirSync(resolveRoot('doc222')); // 确保目录存在
  // const groups = _json.groups.filter();
  console.log(_target, _json);
  // 创建一个可以写入的流，写入到文件中
  // const writerStream = fse.createWriteStream(resolveRoot(`doc222/${_target}.md`));
  // // 使用 utf8 编码写入数据
  // writerStream.write(data, 'utf-8');
  // // 标记文件末尾
  // writerStream.end();
  // // 处理流事件 --> data, end, and error
  // writerStream.on('finish', function () {
  //   console.log('写入完成。');
  // });
  // writerStream.on('error', function (err) {
  //   console.log(err.stack, '错误');
  // });
}
