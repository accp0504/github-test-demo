function addZero(data) {
    if (data >= 1 && data <= 9) {
        data = "0" + data;
    }
    return data
}

export function getNowTime() {
    var date = new Date();
    //年 getFullYear()：四位数字返回年份
    var year = date.getFullYear(); //getFullYear()代替getYear()
    //月 getMonth()：0 ~ 11
    var month = date.getMonth() + 1;
    //日 getDate()：(1 ~ 31)
    var day = date.getDate();
    //时 getHours()：(0 ~ 23)
    var hour = date.getHours();
    //分 getMinutes()： (0 ~ 59)
    var minute = date.getMinutes();
    var seconds = date.getSeconds() //秒
    const mon = month <= 9 ? '0' + month : month
    const split = "-"
    return addZero(year) + '年' + mon + '月' + addZero(day) + '日  ' + addZero(hour) + ':' + addZero(minute) + ':' + addZero(seconds)

}

export function getNowWeekDay() {
    var date = new Date();
    var weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var weekDay = weekArr[date.getDay()];
    return weekDay

}
// 本地字典转换
export function dictionaryConversion(dictionaryKey, dictionaryList) {
  let dictionaryName = '';
  if (dictionaryKey) {
    dictionaryList?.map(e => {
      if (e.value === dictionaryKey) dictionaryName = e.name || e.label
    });
  }
  return dictionaryName
}
