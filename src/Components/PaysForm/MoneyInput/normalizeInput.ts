export const normalizeInput = (value: string) => {
    if (!value) {
        return value;
    }

    let onlyNums: string  = value.replace(/[^\d]/g, '');
    onlyNums = onlyNums.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return onlyNums;
}