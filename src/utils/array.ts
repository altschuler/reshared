export const removeAt = <T>(array: T[], index: number, deleteCount = 1) => [
    ...array.slice(0, index),
    ...array.slice(index + deleteCount),
];
