const sleep = (ms: number) => {
    return new Promise(sex => setTimeout(sex, ms)); 
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)) // 100