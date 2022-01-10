//import { Builder, By, Key } from "selenium-webdriver";
const {Builder, By, Key, until} = require('selenium-webdriver');

function printLog(log){
    console.log(`
    >>> ${log} <<<
    `)
}
// selenium 원래 에러를 정확하게 안알려줘서 순차적으로 오류 잡아가면서 해야돼여

async function addLinks(arr, d){
    printLog('here')
    let elems= await d.findElements(By.className('yuRUbf'))
    printLog(elems.length)
    
    elems.forEach(async function(item){
        const _link= await item.getAttribute('href')
        arr.push(_link)
    })
}
// 원래 좀 늦게 열려요
// 지금 나오는 에러가
// 저 에러들은 처음부터 나왔어요
async function app(){
    let driver
    try {
        driver= await new Builder().forBrowser("chrome").build();

    
        // 아.. 이거 몇번 하면 구글에서 로봇이라고 감지해서 안돼요
        let searchSentence= "Add comment";
        let searchUrl= "https://fan.fc-anji.ru/";
        let searchStr= `${searchSentence} site:${searchUrl}`;
        
        await driver.get(`https://www.google.com/search?q=${searchStr}`);

    
        // await driver.findElement(By.className("gLFyf gsfi")).sendKeys(searchStr, Key.RETURN);
        // await driver.wait(until.titleIs(searchStr+rstGoogle));
    
        // 쿼리가 잘못된거같아요
        // 전에는 By.className("yuRUbf") 였던것 같은데
        // a 태그에는 클라쓰네임이 yuRUbf가 아니고 그 아래 a태그라서
        let aTagQr= "div[class='yuRUbf'] a"
        let aTags= await driver.findElements(By.css(aTagQr));
        // 이 방법 저도 해봤는데 차단당해여 구글한테ㅠ
        // 그럼 다른방법 있나요..?
        // 그리고 이렇게 검색결과 한번에 가져와서 그냥 돌려버리면
        // 글을 못쓰거나 실패하는 경우가 생겨서
        // 저는 하나하나 다 확인하고 리스트에 추가시켜버려용 좀 노가단데
        // 하루에 3~50개씩만 꾸준하게 추가해줘도
        // 나중에는 몇천개 되드라구여  제꺼 원격 들어오실래영?
        // 잠시만여  흠 그럼 저방식보단 링크 리스트 만들어서 직접 url 로 접속해서
        // 하는 방식이 낫겠네여?? 네  

        // 그리고 보안 문자도 자동으로 해결될수 있나여?
        // 그건 영업 비밀인데 ㅎㅎ..
        // 아아 ㅋㅋ 네넹 ㅎㅎ 제껄로 보여드릴게요 

        // 이거 기억났는데 저도 옛날에 배열 속성 가져올려고 고생했었던거같아요 ㅋㅋ
        // 어 근데 배열 아니구 한개도 못가져오던데용. 방금 한개만 해봤는데 가져왔어요
        var arrLink= []
        for (const a of aTags) {
            let href= await a.getAttribute("href")
            arrLink.push(href)
        }
        console.log(arrLink)
        // 왜 하나만 뜨져? 테스트로 하나만 가져와봤어요
        // 아녀 쓰다가 만거에요 ㅋㅋㅋ hoho
        // 뭐죠 ㅋㅋ 아까랑 뭔 차이졍
        
        // 그리고 함수형프로그래밍 한다고  자바스크립트에서 forEach 많이 쓰는데
        // array 반환하는 map, filter 함수 말고 반복에서는
        // for (let e of collection) {}
        // 이게 훨씬 편해여
        // python 에서 range loop 랑 똑같아여 ㅎㅎ

        


    
        // 화면 확대 + x 2
    
        // addLinks(arrLink, driver)
    
        // let elems= await driver.findElement(By.className('yuRUbf'))
        // console.log(elems)
        // let s= await elems.getAttribute('href')
        // console.log(s)
        // let s= await elems.getText()
        // await console.log(s)
        // printLog(s)
        // await elems.getAttribute('href').then((foo) => {
        //     console.log(foo)
        // })
    
    
        // printLog('here')
        // let elems= await driver.findElements(By.className('yuRUbf'))
        // printLog(elems.length)
        
        // elems.forEach(async function(item){
        //     const _link= await item.getAttribute('href')
        //     printLog(_link)
        //     arrLink.push(_link)
        // })
    
        
    
        // printLog(arrLink);
    
    
    
        // driver.quit();
    } catch (e) {
        console.log(e)
    }
    await driver.quit()
}

// app();



for (let i=0; i < 5; i++) {
    //
}

let collection = [1,2,3,4,5]
for (let n of collection) {
    // console.log(n) // <- 얘뗌에
}  // --> 요 타입이 포이치 타입 아닌가여? 결과는 같죵


// ah kk

//함수루프는 뭔갈 반환하게 생겼는데 폴이치는 반환도 안하고
// 암튼 진짜 요긴한거 알려드릴게요 ㅋㅋㅋㅋ 이거 진짜 좋아요

// object{} loop
const persons = [
    {name: "slam", age: 33, height: 173},
    {name: "gildong", age: 20, height: 150},
    {name: "jinju", age: 25, height: 130}
]

// json = {
//    key: "value"
//}

for (const p of persons) {
    for (const aa of Object.entries(p)) {
        if (p.age >= 25) {
            console.log(`${p.name}의 나이가 25보다 큼`)
        }
    }
}

// 아무튼  객체 루프는  Object.entries(obj)로 key, value 뽑아낼수있구용
// Object.keys(obj)로 키만 뽑아낼수 있고, Object.values(obj)로 값만 뽑아낼수있어요
// 네넵 ㅎㅎㅎ 감사함다, 저 변수 타입이 map 인거져? javascript key value hashmap은 json 객체에욤

// for (const [key, value] of Object.entries(person)) {
//     // console.log("key: "+key+" value: "+value)
//     if (key == "age") {
//         if (value > 30) {
//             // console.log(`hello`)
//         }
//     }
// }

// for (const key of Object.keys(person)) {
//     // console.log(key)
// }
// for (const v of Object.values(person)) {
//     // console.log(v)
// }