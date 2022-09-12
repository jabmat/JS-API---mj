// 12.09 19:15 API start:
console.log('12.09 19:15 API start:');

// 1. SELEKTORY

// a) document.querySelector()
// Przyjmuje jako argument selektor CSSowy, zwraca pierwszy pasujący element, jeżeli nie znajdzie nic to zwraca null

const navH1 = document.querySelector('#nav-h1'); // po #ed
// console.log(navH1);
// console.log(typeof navH1);

const firstSpan = document.querySelector('.nav-span'); // po klasie
// console.log(firstSpan);

const navElement = document.querySelector('nav'); // po nazwie tagu
// console.log(navElement);

// b) document.querySelectorALL()
// Przyjmuje jako argument selektor CSSowy, zwraca NodeList, jeżeli nie znajdzie nic to zwraca null

const navSpans = document.querySelectorAll('.nav-span');
// console.log(navSpans); // node listę należy zamienić na zywkłą listę
const navSpansList = [...navSpans]; // zamiana z node listy na zwykłą
// console.log(navSpansList);

// c) document.getElementById()
// Przyjmuje jako argument ID elementu, zwraca pasujący element, jeżeli nie znajdzie nic to zwraca null.

const contentDiv = document.getElementById('content'); // nie musimy dawać "#", bo już ta metoda szuka po ID
// console.log(contentDiv);

// d) document.getElmeentsByClassName
// Przyjmuje jako argument nazwę klasy, zwraca HTMLCollection, jeżeli nie znajdzie nic to zwraca null.

const paragraphs = document.getElementsByClassName('article-paragraph');
// console.log(paragraphs);

// 2. SUB-SELEKTORY

// console.log(contentDiv);
// a) element.children

const articles = contentDiv.children;
// console.log(articles);

// b) element.childNodes

const articlesNodes = contentDiv.childNodes;
// console.log(articlesNodes);

// c) element.firstElementChild
const list = document.querySelector('ul');
// console.log(list);
// console.log(list.firstElementChild);

// d) element.lastElementChild

// console.log(list.lastElementChild);

// e) element.nextElementSibling / previousElement
const middleLi = list.children[1];
// console.log(middleLi);
// console.log(middleLi.nextElementSibling);

// f) element.parentElement
// console.log(middleLi.parentElement);

// Zad 1.
// Zapisz w zmiennych wszystkie ele,enty występujące w naszym dokumencie HTML. Staraj się nie modyfikować samego kodu HTML, lecz jeżęli będzie to konieczne, zrób to.
console.log('20:52 Zad. 1:');
