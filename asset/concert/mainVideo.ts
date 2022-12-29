import type { Video } from '../types/types'

const mainConcert: Video[] = [
  {
    id: 'main001',
    status: false,
  },
  {
    id: 'main002',
    status: false,
  },
  {
    id: 'main003',
    status: true,
    baseSrc: '3rd/',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005-001.mp4', addtitle: '1. 小序曲' },
      { available: true, data: 4, path: '005-002.mp4', addtitle: '2. 特徴のある踊り a. 小行進曲' },
      { available: true, data: 4, path: '005-003.mp4', addtitle: '2. 特徴のある踊り b. 金米糖の精の踊り' },
      { available: true, data: 4, path: '005-004.mp4', addtitle: '2. 特徴のある踊り c. トレパーク' },
      { available: true, data: 4, path: '005-005.mp4', addtitle: '2. 特徴のある踊り d. アラビアの踊り' },
      { available: true, data: 4, path: '005-006.mp4', addtitle: '2. 特徴のある踊り e. 中国の踊り' },
      { available: true, data: 4, path: '005-007.mp4', addtitle: '2. 特徴のある踊り f. あし笛の踊り' },
      { available: true, data: 4, path: '005-008.mp4', addtitle: '3. 花のワルツ' },
      { available: true, data: 5, path: '006-001.mp4', addtitle: '第1楽章 プレリュードとアズテックダンス' },
      { available: true, data: 5, path: '006-002.mp4', addtitle: '第2楽章 ミサ' },
      { available: true, data: 5, path: '006-003.mp4', addtitle: '第3楽章 カーニバル' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
    ],
  },
  {
    id: 'main004',
    status: false,
  },
  {
    id: 'main005',
    status: true,
    baseSrc: '5th/',
    // poster: 'https://photo.winds-n.com/20th/original/082.jpg',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004-001.mp4' },
      { available: true, data: 4, path: '004-002.mp4' },
      { available: true, data: 5, path: '004-003.mp4' },
      { available: true, data: 6, path: '005.mp4' },
      { available: true, data: 7, path: '006.mp4' },
      { available: true, data: 8, path: '007-001.mp4', addtitle: 'テーマ' },
      { available: true, data: 8, path: '007-002.mp4', addtitle: '盆踊り' },
      { available: true, data: 8, path: '007-003.mp4', addtitle: '朝のうた' },
      { available: true, data: 8, path: '007-004.mp4', addtitle: 'フィナーレ' },
      { available: true, data: 9, path: '008.mp4' },
      { available: true, data: 10, path: '009.mp4' },
      { available: true, data: 11, path: '010.mp4' },
    ],
  },
  {
    id: 'main006',
    status: true,
    baseSrc: '6th/',
    // poster: 'https://photo.winds-n.com/20th/original/082.jpg',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008-001.mp4', addtitle: 'I. ファンファーレと序奏' },
      { available: true, data: 7, path: '008-002.mp4', addtitle: 'II. パ・ドゥ・ドゥ' },
      { available: true, data: 7, path: '008-003.mp4', addtitle: 'III. 風変わりなポルカ' },
      { available: true, data: 7, path: '008-004.mp4', addtitle: 'IV. 全員の踊り' },
      { available: true, data: 8, path: '009-001.mp4', addtitle: 'I. パストラール' },
      { available: true, data: 8, path: '009-002.mp4', addtitle: 'II. 間奏曲' },
      { available: true, data: 8, path: '009-003.mp4', addtitle: 'III. メヌエット' },
      { available: true, data: 8, path: '009-004.mp4', addtitle: 'IV. ファランドール' },
      { available: true, data: 9, path: '010.mp4' },
      { available: true, data: 10, path: '011.mp4' },
      { available: true, data: 11, path: '012.mp4' },
    ],
  },
  {
    id: 'main007',
    status: true,
    baseSrc: '7th/',
    // poster: 'https://photo.winds-n.com/20th/original/082.jpg',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003-001.mp4', addtitle: '第1楽章' },
      { available: true, data: 2, path: '003-001.mp4', addtitle: '第2楽章' },
      { available: true, data: 2, path: '003-003.mp4', addtitle: '第3楽章' },
      { available: true, data: 2, path: '003-004.mp4', addtitle: '第4楽章' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008-001.mp4', addtitle: '第1楽章 祈り' },
      { available: true, data: 7, path: '008-002.mp4', addtitle: '第2楽章 唄' },
      { available: true, data: 7, path: '008-003.mp4', addtitle: '第3楽章 祭り' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
    ],
  },
  {
    id: 'main008',
    status: true,
    baseSrc: '8th/',
    // poster: 'https://photo.winds-n.com/20th/original/082.jpg',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004-001.mp4', addtitle: '第1楽章 高原にて' },
      { available: true, data: 3, path: '004-002.mp4', addtitle: '第2楽章 ブラッドフォードのバラード' },
      { available: true, data: 3, path: '004-003.mp4', addtitle: '第3楽章 ダーウェントウォーターにて' },
      { available: true, data: 4, path: '005-001.mp4' },
      { available: true, data: 4, path: '005-002.mp4' },
      { available: true, data: 4, path: '005-003.mp4' },
      { available: true, data: 5, path: '006-001.mp4', addtitle: '第1部 ボルゲーゼ荘の松' },
      { available: true, data: 5, path: '006-002.mp4', addtitle: '第2部 カタコンバ付近の松' },
      { available: true, data: 5, path: '006-003.mp4', addtitle: '第3部 ジャニコロの松' },
      { available: true, data: 5, path: '006-004.mp4', addtitle: '第4部 アッピア街道の松' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
    ],
  },
  {
    id: 'main009',
    status: true,
    baseSrc: '9th/',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003-001.mp4', addtitle: 'I. リスボン' },
      { available: true, data: 2, path: '003-002.mp4', addtitle: 'II. ホークストウの農場' },
      { available: true, data: 2, path: '003-003.mp4', addtitle: 'III. ラフォード公園の密猟者' },
      { available: true, data: 2, path: '003-004.mp4', addtitle: 'IV. 元気な若い水夫' },
      { available: true, data: 2, path: '003-005.mp4', addtitle: 'V. メルボルン卿' },
      { available: true, data: 2, path: '003-006.mp4', addtitle: 'VI. 行方不明の婦人が見つかった' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005-001.mp4' },
      { available: true, data: 4, path: '005-002.mp4' },
      { available: true, data: 4, path: '005-003.mp4' },
      { available: true, data: 4, path: '005-004.mp4' },
      { available: true, data: 4, path: '005-005.mp4' },
      { available: true, data: 4, path: '005-006.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
    ],
  },
  {
    id: 'main010',
    status: true,
    baseSrc: '10th/',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003-001.mp4', addtitle: '1. カウボーイの休日' },
      { available: true, data: 2, path: '003-002.mp4', addtitle: '2. 畜舎の夜想曲' },
      { available: true, data: 2, path: '003-003.mp4', addtitle: '3. 土曜の夜のワルツ' },
      { available: true, data: 2, path: '003-004.mp4', addtitle: '4. ホーダウン' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006-001.mp4', addtitle: '1. 小舟にて' },
      { available: true, data: 5, path: '006-002.mp4', addtitle: '2. 行列' },
      { available: true, data: 5, path: '006-003.mp4', addtitle: '3. メヌエット' },
      { available: true, data: 5, path: '006-004.mp4', addtitle: '4. バレエ' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
    ],
  },
  {
    id: 'main011',
    status: true,
    baseSrc: '11th/',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003-001.mp4', addtitle: '1. ヌピア人の踊り' },
      { available: true, data: 2, path: '003-002.mp4', addtitle: '2. ヌピア人の奴隷の踊り' },
      { available: true, data: 2, path: '003-003.mp4', addtitle: '3. トロイの娘たちの踊り' },
      { available: true, data: 2, path: '003-004.mp4', addtitle: '4. フリネの踊り' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005-001.mp4', addtitle: '第1曲 プレリュード、アンティフォナル・コールI' },
      { available: true, data: 4, path: '005-002.mp4', addtitle: '第2曲 ソング・アンド・ダンス' },
      { available: true, data: 4, path: '005-003.mp4', addtitle: '第3曲 ポストリュードアンティフォナル・コールII' },
      { available: true, data: 5, path: '006-001.mp4', addtitle: '第1楽章' },
      { available: true, data: 5, path: '006-002.mp4', addtitle: '第2楽章' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
    ],
  },
  {
    id: 'main012',
    status: true,
    baseSrc: '12th/',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005-001.mp4', addtitle: '' },
      { available: true, data: 4, path: '005-002.mp4', addtitle: '' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
    ],
  },
  {
    id: 'main013',
    status: true,
    baseSrc: '13th/',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002-001.mp4', addtitle: '1. この世は限りなく最良のもの' },
      { available: true, data: 1, path: '002-002.mp4', addtitle: '2. ウェストファリア・コラールと戦いの場面' },
      { available: true, data: 1, path: '002-003.mp4', addtitle: '3. 判決' },
      { available: true, data: 1, path: '002-004.mp4', addtitle: '4. きらびやかに楽しく' },
      { available: true, data: 1, path: '002-005.mp4', addtitle: '5. 我らの庭を耕そう' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007-001.mp4', addtitle: 'No.5 Bellicoso' },
      { available: true, data: 6, path: '007-002.mp4', addtitle: 'No.6 Amoroso' },
      { available: true, data: 6, path: '007-003.mp4', addtitle: 'No.11 Risoluto' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009-001.mp4', addtitle: '1. 隣人の踊り' },
      { available: true, data: 8, path: '009-002.mp4', addtitle: '2. 粉屋の踊り' },
      { available: true, data: 8, path: '009-003.mp4', addtitle: '3. 終幕の踊り' },
      { available: true, data: 9, path: '010.mp4' },
      { available: true, data: 10, path: '011.mp4' },
    ],
  },
  {
    id: 'main014',
    status: false,
  },
  {
    id: 'main015',
    status: false,
  },
  {
    id: 'main016',
    status: true,
    baseSrc: '16th/',
    // poster: 'https://photo.winds-n.com/20th/original/082.jpg',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4', addtitle: 'I. リリパット' },
      { available: true, data: 2, path: '004.mp4', addtitle: 'II. ブロブディングナグ' },
      { available: true, data: 2, path: '005.mp4', addtitle: 'III. ラピュータ' },
      { available: true, data: 2, path: '006.mp4', addtitle: 'IV. フィヌム' },
      { available: true, data: 3, path: '007.mp4' },
      { available: true, data: 4, path: '008.mp4' },
      { available: true, data: 5, path: '009.mp4' },
      { available: true, data: 6, path: '010.mp4' },
      { available: true, data: 7, path: '011.mp4' },
      { available: true, data: 8, path: '012.mp4' },
      { available: true, data: 9, path: '013.mp4' },
      { available: true, data: 10, path: '014.mp4' },
    ],
  },
  {
    id: 'main017',
    status: true,
    baseSrc: '17th/',
    // poster: 'https://photo.winds-n.com/20th/original/082.jpg',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003-001.mp4', addtitle: 'I. 行進曲「日曜日で17歳」' },
      { available: true, data: 2, path: '003-002.mp4', addtitle: 'II. 間奏曲「マイ・ポニー・ボーイ」' },
      { available: true, data: 2, path: '003-003.mp4', addtitle: 'III. 行進曲「サマーセットの民謡」' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
      { available: true, data: 10, path: '011.mp4' },
      { available: true, data: 11, path: '012.mp4' },
      { available: true, data: 12, path: '013.mp4' },
    ],
  },
  {
    id: 'main018',
    status: true,
    baseSrc: '18th/',
    // poster: 'https://photo.winds-n.com/20th/original/082.jpg',
    poster: 'https://video.winds-n.com/poster_800_586.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4', addtitle: 'I. プロローグ' },
      { available: true, data: 6, path: '008.mp4', addtitle: 'II. 道化師のギャロップ' },
      { available: true, data: 6, path: '009.mp4', addtitle: 'V. パントマイム' },
      { available: true, data: 6, path: '010.mp4', addtitle: 'VII. 小さな抒情的シーン' },
      { available: true, data: 6, path: '011.mp4', addtitle: 'X. エピローグ' },
      { available: true, data: 7, path: '012.mp4' },
      { available: true, data: 8, path: '013.mp4' },
      { available: true, data: 9, path: '014.mp4' },
      { available: true, data: 10, path: '015.mp4' },
      { available: true, data: 11, path: '016.mp4' },
      { available: true, data: 12, path: '017.mp4' },
      { available: true, data: 13, path: '018.mp4' },
      { available: true, data: 14, path: '019.mp4' },
      { available: true, data: 15, path: '020.mp4' },
    ],
  },
  {
    id: 'main019',
    status: true,
    baseSrc: '19th/',
    // poster: 'https://photo.winds-n.com/20th/original/082.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
      { available: true, data: 10, path: '011.mp4' },
      { available: true, data: 11, path: '012.mp4' },
      { available: true, data: 12, path: '013.mp4' },
      { available: true, data: 13, path: '014.mp4' },
      { available: true, data: 14, path: '015.mp4' },
    ],
  },
  {
    id: 'main020',
    status: true,
    baseSrc: '20th/',
    // poster: 'https://photo.winds-n.com/20th/original/082.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '014.mp4' },
      { available: true, data: 1, path: '015.mp4' },
      { available: true, data: 2, path: '016.mp4' },
      { available: true, data: 3, path: '018.mp4' },
      { available: true, data: 4, path: '019.mp4' },
      { available: true, data: 5, path: '001.mp4' },
      { available: true, data: 6, path: '002.mp4' },
      { available: true, data: 7, path: '003.mp4' },
      { available: true, data: 8, path: '004.mp4' },
      { available: true, data: 9, path: '005.mp4' },
      { available: true, data: 10, path: '006.mp4' },
      { available: true, data: 11, path: '007.mp4' },
      { available: true, data: 12, path: '008.mp4' },
      { available: true, data: 13, path: '009.mp4' },
      { available: true, data: 14, path: '010.mp4' },
      { available: true, data: 15, path: '011.mp4' },
      { available: true, data: 16, path: '012.mp4' },
      { available: true, data: 17, path: '013.mp4' },
    ],
  },
  {
    id: 'main021',
    status: true,
    baseSrc: '21st/',
    // poster: 'https://photo.winds-n.com/21st/original/139.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '010.mp4' },
      { available: true, data: 1, path: '011.mp4' },
      { available: true, data: 2, path: '012.mp4' },
      { available: true, data: 3, path: '013.mp4' },
      { available: true, data: 4, path: '001.mp4' },
      { available: true, data: 5, path: '002.mp4' },
      { available: true, data: 6, path: '003.mp4' },
      { available: true, data: 7, path: '004.mp4' },
      { available: true, data: 8, path: '005.mp4' },
      { available: true, data: 9, path: '006.mp4' },
      { available: true, data: 10, path: '007.mp4' },
      { available: true, data: 11, path: '008.mp4' },
      { available: true, data: 12, path: '009.mp4' },
    ],
  },
  {
    id: 'main022',
    status: true,
    baseSrc: '22nd/',
    // poster: 'https://photo.winds-n.com/22nd/original/070.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '008.mp4' },
      { available: true, data: 1, path: '009.mp4' },
      { available: true, data: 2, path: '010.mp4' },
      { available: true, data: 3, path: '001.mp4' },
      { available: true, data: 4, path: '002.mp4' },
      { available: true, data: 5, path: '003.mp4' },
      { available: true, data: 6, path: '004.mp4' },
      { available: true, data: 7, path: '005.mp4' },
      { available: true, data: 8, path: '006.mp4' },
      { available: true, data: 9, path: '007.mp4' },
    ],
  },
  {
    id: 'main023',
    status: true,
    baseSrc: '23rd/',
    // poster: 'https://photo.winds-n.com/23rd/original/501.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
    ],
  },
  {
    id: 'main024',
    status: true,
    baseSrc: '24th/',
    // poster: 'https://photo.winds-n.com/24th/original/521.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
    ],
  },
  {
    id: 'main025',
    status: true,
    baseSrc: '25th/',
    // poster: 'https://photo.winds-n.com/25th/original/050.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
    ],
  },
  {
    id: 'main026',
    status: true,
    baseSrc: '26th/',
    // poster: 'https://photo.winds-n.com/26th/original/220.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
    ],
  },
  {
    id: 'main027',
    status: true,
    baseSrc: '27th/',
    // poster: 'https://photo.winds-n.com/27th/original/385.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
    ],
  },
  {
    id: 'main028',
    status: true,
    baseSrc: '28th/',
    // poster: 'https://photo.winds-n.com/28th/original/379.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
      { available: true, data: 10, path: '011.mp4' },
    ],
  },
  {
    id: 'main029',
    status: true,
    baseSrc: '29th/',
    // poster: 'https://photo.winds-n.com/29th/original/224.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
      { available: true, data: 10, path: '011.mp4' },
      { available: true, data: 11, path: '012.mp4' },
      { available: true, data: 12, path: '013.mp4' },
    ],
  },
  {
    id: 'main030',
    status: true,
    baseSrc: '30th/',
    // poster: 'https://photo.winds-n.com/30th/original/466.jpg',
    poster: 'https://video.winds-n.com/poster_854_480.png',
    data: [
      { available: true, data: 0, path: '001.mp4' },
      { available: true, data: 1, path: '002.mp4' },
      { available: true, data: 2, path: '003.mp4' },
      { available: true, data: 3, path: '004.mp4' },
      { available: true, data: 4, path: '005.mp4' },
      { available: true, data: 5, path: '006.mp4' },
      { available: true, data: 6, path: '007.mp4' },
      { available: true, data: 7, path: '008.mp4' },
      { available: true, data: 8, path: '009.mp4' },
      { available: true, data: 9, path: '010.mp4' },
      { available: true, data: 10, path: '011.mp4' },
    ],
  },
  {
    id: 'main031',
    status: true,
    baseSrc: '31st/',
    data: [
      { available: true, data: 0, path: '001.mp4', addtitle: '1. Charanga di Xiomara Reyes' },
      { available: true, data: 0, path: '002.mp4', addtitle: '2. Merengue Sempre di Aychem Sunal' },
      { available: true, data: 0, path: '003.mp4', addtitle: '3. Dansa Latino di Maria del Real' },
      { available: true, data: 1, path: '004.mp4' },
      { available: true, data: 2, path: '005.mp4' },
      { available: true, data: 3, path: '006.mp4' },
      { available: true, data: 4, path: '007.mp4' },
      { available: true, data: 5, path: '008.mp4' },
      { available: true, data: 6, path: '009.mp4', addtitle: '第1楽章 プレリュードとアズテック・ダンス' },
      { available: true, data: 6, path: '010.mp4', addtitle: '第2楽章 ミサ' },
      { available: true, data: 6, path: '011.mp4', addtitle: '第3楽章 カーニヴァル' },
      { available: true, data: 7, path: '012.mp4' },
      { available: true, data: 8, path: '013.mp4' },
      { available: true, data: 9, path: '014.mp4' },
    ],
  },
]

module.exports = {
  mainConcert,
}
