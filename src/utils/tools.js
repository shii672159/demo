// import { Base64 } from 'js-base64';

function dateFormat(fmt, date) {
  let ret;
  date = new Date(date);
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (const k in opt) {
    if (Object.hasOwnProperty.call(opt, k)) {
      ret = new RegExp(`(${k})`).exec(fmt);
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
        );
      }
    }
  }
  return fmt;
}

function getWeekDate() {
  const now = new Date();
  const day = now.getDay();
  // eslint-disable-next-line no-array-constructor
  const weeks = new Array(
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  );
  const week = weeks[day];
  return week;
}

// 获取本周一时间
function getTheDay() {
  let ret;
  let fmt = "YYYYmmdd";
  //将获取的字符转转换为 new date
  var now = new Date();
  //获取该天是周几
  var datnum = now.getDay();
  //调用addDay方法获取本周一new date
  var date = addDay(-datnum + 1, now);
  console.log("date", date);
  //将得到的new date转换为时间
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (const k in opt) {
    if (Object.hasOwnProperty.call(opt, k)) {
      ret = new RegExp(`(${k})`).exec(fmt);
      if (ret) {
        fmt = fmt.replace(
          ret[1],
          ret[1].length === 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
        );
      }
    }
  }
  return fmt;
}

// 方法 增添dayNumber天（整形），date：如果没传就使用今天（日期型）
function addDay(dayNumber, date) {
  date = date ? date : new Date();
  var ms = dayNumber * (1000 * 60 * 60 * 24);
  var newDate = new Date(date.getTime() + ms);
  return newDate;
}

// function autoPassWord() {

//   return ;
// }

export { dateFormat, getWeekDate, getTheDay };
