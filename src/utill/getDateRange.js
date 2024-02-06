import { getStringDate } from "./dateString";

// 처음날짜부터 마지막날짜 사이를 구하는 변수
export const getDateRange = (date1, date2) => {
    const start = new Date(date1);
    const last = new Date(date2);
    const result = [];

    while (start <= last) {
        result.push(getStringDate(start));
        start.setDate(start.getDate() + 1);
    }
    return result;
};