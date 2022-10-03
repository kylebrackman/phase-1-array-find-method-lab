function superbowlWin(record) {
    const win = record.find(obj => obj.result === "W")
    if(win) {
        return win.year
    }
    else {
        return undefined
    }
}







































// function superbowlWin(record) {
//     const win = record.find(obj => obj.result === "W")
//     if(win) {
//         return win.year
//     }
// }


// function superbowlWin(item) {
//     const win = item.find((x) => x.result === "W");
//     if (win) {
//         return win.year
//     }
//     else {
//         return undefined
//     }
// }