const quotes = [
    {
        quote: "아는것이 힘이다.",
        author: "베이컨",
    },
    {
        quote: "하늘은 스스로 돕는 자를 돕는다.",
        author: "새뮤엘 스마일즈",
    },
    {
        quote: "스스로 일해서 얻은 빵만큼 맛있는 것은 없다.",
        author: "스미일즈",
    },
    {
        quote: "이 또한 지나가리라.",
        author: "솔로몬",
    },
    {
        quote: "고통 뒤에 즐거움은 달콤하다.",
        author: "존 드라이든",
    },
    {
        quote: "눈물 속에서 갈 길을 못 본다.",
        author: "윌리엄 베넘",
    },
    {
        quote: "가장 바쁜 사람이 가장 많은 시간을 갖는다.",
        author: "비네",
    },
    {
        quote: "가장 큰 위험은 위험없는 삶이다.",
        author: "스티븐 코비",
    },
    {
        quote: "꿈꾸지 않는 자에게는 절망도 없다.",
        author: "조지 버나드 쇼",
    },
    {
        quote: "훌륭한 행동이 훌륭한 말보다 낫다.",
        author: "벤자민 프랭클린",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
