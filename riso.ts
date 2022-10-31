import {Readable} from 'stream';
import type {ColorBook} from '@atesgoral/acb';
import {encodeAcb} from '@atesgoral/acb';

const book: ColorBook = {
    id: 194629,
    title: 'RISO Inks',
    description: 'Ink Colors available for Risograph ^R Digital Duplicators.',
    colorNamePrefix: '',
    colorNamePostfix: '',
    pageSize: 9,
    pageKey: 1,
    colorModel: 'RGB',
    colors: [
        {name: 'Black', code: 'R_BLAC', components: [75, 70, 65]},
        {name: 'Burgundy', code: 'R_BURG', components: [139, 83, 88]},        
        {name: 'Red', code: 'R_RED_', components: [255, 91, 78]},
        {name: 'Green', code: 'R_GREE', components: [0, 169, 92]},
        {name: 'Blue', code: 'R_BLUE', components: [0, 114, 193]},
        {name: 'Medium Blue', code: 'R_MDBL', components: [64, 79, 162]},
        {name: 'Bright Red', code: 'R_BRRD', components: [236, 65, 76]},
        {name: 'RISO-Federal Blue', code: 'R_FDBL', components: [50, 88, 149]},
        {name: 'Purple', code: 'R_PURP', components: [89, 69, 113]},
        {name: 'Teal', code: 'R_TEAL', components: [0, 131, 138]},
        {name: 'Flat Gold', code: 'R_FGLD', components: [125, 100, 53]},
        {name: 'Hunter Green', code: 'R_HGRE', components: [57, 86, 81]},
        {name: 'Brown', code: 'R_BROW', components: [101, 77, 59]},
        {name: 'Marine Red', code: 'R_MARD', components: [210, 81, 94]},
        {name: 'Orange', code: 'R_ORAN', components: [255, 120, 49]},
        {name: 'Fluorescent Pink', code: 'R_FLOP', components: [255, 103, 206]},
        {name: 'Light Gray', code: 'R_LTGR', components: [161, 157, 158]},
        {name: 'Yellow', code: 'R_YELL', components: [253, 226, 0]},
        {name: 'Metallic Gold', code: 'R_MGLD', components: [186, 156, 127]},
        {name: 'Crimson', code: 'R_MGLD', components: [228, 93, 80]},
        {name: 'Fluorescent Orange', code: 'R_FLOO', components: [255, 131, 125]},
        {name: 'Cornflower', code: 'R_CRNF', components: [98, 168, 229]},
        {name: 'Sky Blue', code: 'R_SKYB', components: [78, 113, 192]},
        {name: 'Sea Blue', code: 'R_SEAB', components: [0, 116, 162]},
        {name: 'Lake', code: 'R_LAKE', components: [47, 76, 162]},
        {name: 'Indigo', code: 'R_INDI', components: [47, 76, 162]},

      ],
  };

const readable = Readable.from(encodeAcb(book));
readable.pipe(process.stdout);