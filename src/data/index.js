const { getRandomInt } = require("@/helpers");

export const records = [
  { type: "morning", time: "05.21", thumb: "/images/d01.jpg" },
  { type: "lunch", time: "05.21", thumb: "/images/d02.jpg" },
  { type: "dinner", time: "05.21", thumb: "/images/l01.jpg" },
  { type: "snack", time: "05.21", thumb: "/images/l02.jpg" },
  { type: "morning", time: "05.20", thumb: "/images/l03.jpg" },
  { type: "lunch", time: "05.20", thumb: "/images/m01.jpg" },
  { type: "dinner", time: "05.20", thumb: "/images/m02.jpg" },
  { type: "snack", time: "05.20", thumb: "/images/m03.jpg" },
];

export const exercises = [
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
  { text: "家事全般（立位・軽い）", cal: "26", time: "10" },
];

export const diaries = [
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    title: "私の日記の記録が一部表示されます。",
    text: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
];

const chartLabels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

export const chartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "身長",
      data: chartLabels.map(() => getRandomInt(70)),
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
    {
      label: "重さ",
      data: chartLabels.map(() => getRandomInt(70)),
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

export const columns = [
  {
    date: "2021.05.17",
    time: "23:25",
    desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    thumb: "/images/column-1.jpg",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    date: "2021.05.17",
    time: "23:25",
    desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    thumb: "/images/column-2.jpg",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    date: "2021.05.17",
    time: "23:25",
    desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    thumb: "/images/column-3.jpg",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    date: "2021.05.17",
    time: "23:25",
    desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    thumb: "/images/column-4.jpg",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    date: "2021.05.17",
    time: "23:25",
    desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    thumb: "/images/column-5.jpg",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    date: "2021.05.17",
    time: "23:25",
    desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    thumb: "/images/column-6.jpg",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    date: "2021.05.17",
    time: "23:25",
    desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    thumb: "/images/column-7.jpg",
    tags: ["魚料理", "和食", "DHA"],
  },
  {
    date: "2021.05.17",
    time: "23:25",
    desc: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    thumb: "/images/column-8.jpg",
    tags: ["魚料理", "和食", "DHA"],
  },
];
