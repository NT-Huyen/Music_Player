const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    songs: [
    {
        name: 'Nevada',
        singer: 'Vicetone',
        path: './assets/music/song1.mp3',
        image: './assets/image/song1.png',
    },
    {
        name: 'SummerTime',
        singer: 'K-391',
        path: './assets/music/song2.mp3',
        image: './assets/image/song2.png',
    },
    {
        name: 'Monody',
        singer: 'TheFatRat',
        path: './assets/music/song3.mp3',
        image: './assets/image/song3.png',
    },
    {
        name: 'Đen',
        singer: 'Giang Phạm',
        path: './assets/music/song4.mp3',
        image: './assets/image/song4.png',
    },
    {
        name: 'Cả nhà thương nhau',
        singer: 'Xuân Mai',
        path: './assets/music/song5.mp3',
        image: './assets/image/song5.png',
    },
    {
        name: 'Quả Phụ Tướng',
        singer: 'Dung Hoàng Phạm',
        path: './assets/music/song6.mp3',
        image: './assets/image/song6.png',
    },
    {
        name: 'Mật Ngọt',
        singer: 'Dung Hoàng Phạm',
        path: './assets/music/song7.mp3',
        image: './assets/image/song7.png',
    },
    ]
    
}

const PLAYER_STORAGE_KEY = "F8_PLAYER";
const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
