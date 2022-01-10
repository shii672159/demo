import { Base64 } from "js-base64";
import { getTheDay } from "@/utils/tools.js";

export function userName(rule, value, callback) {
  if (value == "user01@dtdx.dev") {
    callback();
  } else {
    callback("用户名不存在！");
  }
}

export function passWord(rule, value, callback) {
  const str = Base64.encode(getTheDay(), true);
  if (value == str.substr(str.length - 6)) {
    callback();
  } else {
    callback("密码错误！");
  }
}
