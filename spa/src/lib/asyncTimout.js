export function asyncTimeout(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
} 