export const normalizeInput = (value: string) => {
    if (!value) {
        return "0";
    }

    const onlyNums: string  = value.replace(/[^\d]/g, '').replace(/^0+/, '').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return onlyNums;
}