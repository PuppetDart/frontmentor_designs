const puppeteer = require('puppeteer');
const async = require('async');

const urlPrefix = "http://3.86.254.186/";

const links = {
    '01': '01%20NFT%20Review%20Card%20Component/nft_index.html',
    '02': '02%20Order%20Summary%20Component/order_index.html',
    '03': '03%20Stats%20Preview%20Card%20Component/stats_index.html',
    '04': '04%20Car%20Types%203%20Column%20Card%20component/car_index.html',
    '05': '05%20Profile%20Card%20Component/profile_index.html',
    '06': '06%20FAQ%20Card/faq_index.html',
    '07': '07%20Social%20Proof%20Section/social_index.html',
    '08': '08%20Article%20Preview%20Component/article_index.html',
    '09': '09%20Four%20Card%20Feature%20Section/card4_index.html',
    '10': '10%20Coming%20Soon%20Section/comingSoon_index.html',
    '11': '11%20Sign%20Up%20form/signUp_index.html',
    '12': '12%20Single%20Price%20Grid/priceGrid_index.html',
    '13': '13%20Ping%20Coming%20Soon%20Page/ping_index.html',
    '14': '14%20Huddle%20Landing%20Page/huddle_index.html',
    '15': '15%20Advice%20Generator/advice_gen_index.html'
};

async function updateSS(element, callback) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.setViewport({ height: 768, width: 1366, deviceScaleFactor: 1 });

    await page.goto(urlPrefix + links[element], {"waitUntil" : "networkidle0"});
    await page.screenshot({ path: './siteSS/' + element + '.png'});

    // console.log(urlPrefix + links[element]);
    // console.log('./siteSS/' + element + '.png');
    browser.close();
}

async.eachSeries(Object.keys(links), updateSS, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('All SS updated successfully');
        process.exit(0);
    }
});