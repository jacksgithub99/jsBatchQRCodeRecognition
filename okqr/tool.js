
// ————————————————
// 版权声明：本文为CSDN博主「waxuanwa」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/waxuanwa/article/details/125624577
function getFileFromUrl(url, fileName) {
          return new Promise((resolve, reject) => {
              var blob = null;
              var xhr = new XMLHttpRequest();
              xhr.open("GET", url);
              xhr.setRequestHeader('Accept', 'image/png');
              xhr.responseType = "blob";
              // 加载时处理
              xhr.onload = () => {
              	// 获取返回结果
                  blob = xhr.response;
                  let file= new File([blob], fileName, { type: 'image/png' });
                  // 返回结果
                  resolve(file);
              };
              xhr.onerror = (e) => {
                  reject(e)
              };
              // 发送
              xhr.send();
          });
      }
