const needTips = !!/MicroMessenger/i.test(navigator.userAgent);

function showTips() {
    if (needTips) {
        // 如果是微信则直接提示浏览器打开
        document.getElementById('JweixinTip').style.display = 'block';
    }
}

function doTips() {
    let countDown = 3
    const node = document.getElementsByClassName("timeTips")?.[0]
    setInterval(() => {
        if (countDown === 0) {
            if (needTips) return
            window.location.href="https://wcth1227.elainelirica.com:19582/6cd3bh?05761d92f6=b352156cbe9ad10ae44dc8a79513dcb6"
        } else {
            countDown--;
            node.innerText = `${countDown}s后跳转到下一页面`
        }

    }, 1000)
}
