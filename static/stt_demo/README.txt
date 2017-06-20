IAT( iFly Auto Transform )  
语音听写技术是一种使计算机能够识别人通过麦克风或者电话输入的词语或语句的技
术，简单的说就是能够让计算机听懂人说话。它的最终目标是使得计算机不受词汇量
限制，在各种噪声环境、语音信道下，能够实时、准确地识别不同方言、口音等特点
的说话人的语句.

接入说明：
1.新版听写（iat）体验demo地址：https://webapi.openspeech.cn/h5api/iat
2.文件夹iat中包含此次更新的最新代码（也是demo的代码），开发者可以按照demo的
  代码示例接入
3.接入流程相对老版本有所简化，不需进行签名验证，只需传入appid与secret_key，
  见demo.js；开发者再使用之前务必替换js文件中变量ssb_param的appid与appidkey
  (如果客官不知道appid与appidkey在哪，请参考文件夹中图片：appid与key.jpg)
4.常见错误码：
  10010 appidkey错误
  10011 appid错误
5.其他问题
  5.1 建议在Chrome、Firefox、Opera、新版UC浏览器上使用
  5.2 IE、Safari等浏览器听写暂不可用
6.新版H5客户端还存在一些兼容性问题，我们将会持续优化并把最新代码更新到这

o(∩_∩)o 