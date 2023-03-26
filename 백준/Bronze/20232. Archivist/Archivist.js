//문제: 20232
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
  let ITMO = "ITMO";
  let SPbSU = "SPbSU";
  let PetrSU = "PetrSU";
  let a = "PetrSU, ITMO";
  const arr = {
    1995: ITMO,
    1996: SPbSU,
    1997: SPbSU,
    1998: ITMO,
    1999: ITMO,
    2000: SPbSU,
    2001: ITMO,
    2002: ITMO,
    2003: ITMO,
    2004: ITMO,
    2005: ITMO,
    2006: a,
    2007: SPbSU,
    2008: SPbSU,
    2009: ITMO,
    2010: ITMO,
    2011: ITMO,
    2012: ITMO,
    2013: SPbSU,
    2014: ITMO,
    2015: ITMO,
    2016: ITMO,
    2017: ITMO,
    2018: SPbSU,
    2019: ITMO,
  };
  console.log(arr[input[0]]);
}