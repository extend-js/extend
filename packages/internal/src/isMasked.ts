import { coreJsData } from './constant';

/**
 * 用于检测是否是伪装成内置方法
 */
const maskSrcKey = (function () {
  const uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
})();

/**
 * 检测参数的源码是否被屏蔽
 * @since 0.0.1
 * @author roshin
 * @param { * } value 要检测的参数
 * @returns { boolean } 如果参数被屏蔽, 返回true, 否则返回false
 */
const isMasked = (value: any): boolean => {
  return !!maskSrcKey && maskSrcKey in value;
};

export default isMasked;
