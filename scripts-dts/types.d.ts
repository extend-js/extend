import { GlobalsOption, OutputOptions, ExternalOption } from 'rollup';

/**
 * 包的配置接口
 */
export interface BuildOptions {
  /**
   * 生成包名称、全局变量名
   */
  name?: OutputOptions['name'];
  /**
   * 打包格式
   */
  formats?: ('esm-bundler' | 'esm-browser' | 'cjs' | 'global')[];
  /**
   * 环境变量
   */
  env?: 'development' | 'production';
  /**
   * 使用什么导出模式
   */
  exports?: OutputOptions['exports'];
  /**
   * 全局变量
   */
  globals?: GlobalsOption;
  /**
   * 外链
   */
  external?: ExternalOption;
  /**
   * 入口文件
   */
  entryFile?: string;
  /**
   * 是否开启非浏览器分支
   */
  enableNonBrowserBranches?: boolean;
}
