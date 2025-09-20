import dayjs from "dayjs";
import 'dayjs/locale/it';

export default function useDate(date: string, format: string) {
    dayjs.locale('it');

    if (date) return dayjs(date).format(`${format}`);

    return 'N/A';
}