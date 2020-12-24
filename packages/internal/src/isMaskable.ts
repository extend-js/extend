import { coreJsData } from './constant';
import { isFunction } from 'extends-validator';

/**
 * 检测参数的源码是否能够被屏蔽
 * @since 0.0.1
 * @author roshin
 * @param { * } value 要检测的参数
 * @returns { boolean } 如果参数能够被屏蔽, 返回true, 否则返回false
 */
const isMaskable = (value: any): boolean => {
  if (!coreJsData) return false;
  return isFunction(value);
};

export default isMaskable;
