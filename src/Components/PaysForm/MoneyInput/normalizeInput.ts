export const normalizeInput = (value: string) => {
    if (!value) {
        return value;
    }

    const onlyNums: string  = value.replace(/[^\d]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return onlyNums;
}