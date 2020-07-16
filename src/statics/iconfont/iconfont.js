import { createGlobalStyle } from 'styled-components';

export const Iconfontstyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1594126119839'); /* IE9 */
  src: url('./iconfont.eot?t=1594126119839#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1594126119839') format('woff'),
  url('./iconfont.ttf?t=1594126119839') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1594126119839#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xin:before {
  content: "\\e600";
}

.icon-shumiao:before {
  content: "\\e601";
}

.icon-shoucang:before {
  content: "\\e629";
}

.icon-shu2:before {
  content: "\\e731";
}

.icon-bi:before {
  content: "\\e62b";
}

.icon-video:before {
  content: "\\e634";
}

.icon-erji:before {
  content: "\\e608";
}

.icon-yaoqing:before {
  content: "\\e682";
}

.icon-gengduo:before {
  content: "\\e62c";
}

.icon-yuan:before {
  content: "\\e62f";
}

.icon-xiangyou:before {
  content: "\\e60c";
}

.icon-shu:before {
  content: "\\e635";
}

.icon-solid-person:before {
  content: "\\e640";
}

.icon-qizi:before {
  content: "\\e651";
}

.icon-chuangzuozhongxin:before {
  content: "\\e6bc";
}

.icon-qianbao:before {
  content: "\\e6c4";
}

.icon-icon--:before {
  content: "\\e712";
}

.icon-dengdai:before {
  content: "\\e616";
}

.icon-pinglun:before {
  content: "\\e6ba";
}

.icon-xiaoxi:before {
  content: "\\e6eb";
}

.icon-aixin:before {
  content: "\\e636";
}

.icon-wenbenwendang:before {
  content: "\\e61f";
}

.icon-fangdajing:before {
  content: "\\e637";
}

.icon-dian:before {
  content: "\\ec1e";
}

.icon-xiaoxi1:before {
  content: "\\e64d";
}

.icon-zhifeiji:before {
  content: "\\e7d5";
}

.icon-cuo:before {
  content: "\\e63f";
}

.icon-xinwen:before {
  content: "\\e607";
}

.icon-xiaoxi2:before {
  content: "\\e67b";
}

.icon-xiangxia:before {
  content: "\\e626";
}

.icon-shuxian:before {
  content: "\\e638";
}

.icon-jiahao:before {
  content: "\\e602";
}

.icon-xueyuan-fufeikecheng:before {
  content: "\\e6bd";
}

.icon-xinbaniconshangchuan-:before {
  content: "\\e606";
}

.icon-changjianwenti:before {
  content: "\\e675";
}

.icon-new:before {
  content: "\\e652";
}

.icon-show_renqiredu:before {
  content: "\\e603";
}

.icon-banquan-kuai:before {
  content: "\\e896";
}

.icon-shangjiantou:before {
  content: "\\e609";
}

.icon-shandian:before {
  content: "\\e604";
}

.icon-xiajiantou:before {
  content: "\\e647";
}
`;



