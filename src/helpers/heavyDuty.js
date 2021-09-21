export const heavyDuty = (loops) => {
    for(let i = 0; i < loops; i++) {
        console.log('Here we go again...');
    }

    return `${loops} executed`;
}