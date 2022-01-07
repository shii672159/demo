function dateFormat(fmt, date) {
  let ret;
  date = new Date(date);
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'm+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'M+': date.getMinutes().toString(), // 分
    'S+': date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (const k in opt) {
    if (Object.hasOwnProperty.call(opt, k)) {
      ret = new RegExp(`(${k})`).exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
      }
    }
  }
  return fmt;
}

function getWeekDate() {
  const now = new Date();
  const day = now.getDay();
  // eslint-disable-next-line no-array-constructor
  const weeks = new Array('星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六');
  const week = weeks[day];
  return week;
}

export { dateFormat, getWeekDate };
