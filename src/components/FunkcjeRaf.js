export const getDataRaf = (data) => {
    const r = new Date(data);

    const y = r.getFullYear();
    const m = r.getMonth();
    const d = r.getDate();

    return (new Date(y, m, d));
}

export const getFormatDate = (data) => {
    const r = new Date(data);

    const result = '';
    const y = r.getFullYear();
    const m = r.getMonth() + 1;
    const d = r.getDate();

    return result.concat(y, "-", m, "-", d);
}


export const isBeetweenInt = (n, nMin, nMax) => {
    if (!Number.isInteger(n) ||
        !Number.isInteger(nMin) ||
        !Number.isInteger(nMax)
    )
        return false;

    if (n >= nMin && n <= nMax) {
        return true;
    }
    return false;
}

export function sortDaneBaza(o1, o2) {
    if (o1.data < o2.data) return -1;
    if (o1.data > o2.data) return 1;

    if (o1.godzinaDo < o2.godzinaDo) return -1;

    if (o1.godzinaDo > o2.godzinaDo) return 1;

    return 0;
}

export const createDaysTab = (dataRozl, daysExtraFree) => {

    const year = new Date(dataRozl).getFullYear();
    const month = new Date(dataRozl).getMonth();

    const daysExtra = daysExtraFree.filter((index) =>
        (new Date(index).getFullYear() === year && new Date(index).getMonth() === month))

    if (!Number.isInteger(year) || !isBeetweenInt(month, 1, 12))
        return null;

    const days = [];
    let weekend = false;
    const date = new Date(year, month, 1);

    while (date.getMonth() === month) {

        const daysNow = daysExtra.filter((index) =>
            getDataRaf(index).getTime() === getDataRaf(date).getTime())

        if (isBeetweenInt(date.getDay(), 1, 5) && (daysNow.length === 0)) {
            weekend = false;
        }
        else
            weekend = true;
        days.push({ data: new Date(date), weekend: weekend });

        date.setDate(date.getDate() + 1);
    }
    return days;
}

export const createWorkDaysTab = (daysOfMonth, daneZBazy) => {

    const daneZBazySort = daneZBazy.sort(sortDaneBaza);

    const days = daysOfMonth.map((item) => {
        if (item.weekend === true)
            return item;

        const workDay = daneZBazySort.filter((day) =>
            getDataRaf(item.data).getTime() === getDataRaf(day.data).getTime()
        )
        if (workDay.length > 0)
            return workDay;

        return [{ data: item.data, rodzaj: 0, godzinaOd: 0, godzinaDo: 0 }]
    })

    return days;
}