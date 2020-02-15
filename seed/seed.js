const Item = require('../model/itemModel');
const mongoose = require('mongoose');
const app = require('../app')


async function createUser() {
    await mongoose.connection.dropDatabase();


    let item1 = await Item.create({
        img: 'https://cdn1.ozone.ru/multimedia/c1200/1026952828.jpg',
        name: 'Смартфон Honor 10 Lite 3/64GB',
        price: 10990,
        guarantee: '1 год',
        screenResolution: '2340x1080',
        screenDiagonale: '6,21',
        size: '154.8 x 73.6 x 8',
        cameraResolution: 13,
        internalMemory: '64 ГБ',
        color: ["black", "white", "red", "green"],
        rating: 2
    });

    let item2 = await Item.create({
        img: 'https://cdn1.ozone.ru/s3/multimedia-z/c1200/6005742539.jpg',
        name: 'Смартфон Honor 9X Premium 6/128GB',
        price: 17382,
        guarantee: 'Нет информации',
        screenResolution: '2340x1080',
        screenDiagonale: '6,59',
        size: '163.5 × 77.3 × 8.8',
        cameraResolution: 48,
        internalMemory: 'Нет информации',
        RAM: 'Нет информации',
        color: ["black", "white", "red", "green"],
        rating: 3
    });

    let item3 = await Item.create({
        img: 'https://cdn1.ozone.ru/multimedia/c1200/1028043675.jpg',
        name: 'Смартфон Honor 10i 4/128GB',
        price: 12990,
        guarantee: '1 год',
        screenResolution: '2340x1080',
        screenDiagonale: '6,21',
        size: 'Нет информации',
        cameraResolution: 24,
        internalMemory: '128 ГБ',
        RAM: '4 ГБ',
        color: ["black", "white", "red", "green"],
        rating: 1
    });

    let item4 = await Item.create({
        img: 'https://cdn1.ozone.ru/multimedia/c1200/1034224013.jpg',
        name: 'Смартфон Smartisan U3 4/64GB',
        price: 10495,
        guarantee: 'Нет информации',
        screenResolution: '2160х1080',
        screenDiagonale: '5,99',
        size: 'Нет информации',
        cameraResolution: 13,
        internalMemory: 'Нет информации',
        RAM: 'Нет информации',
        color: ["black", "white", "red", "green"],
        rating: 5
    });

    let item5 = await Item.create({
        img: 'https://cdn1.ozone.ru/s3/multimedia-m/c1200/6005039950.jpg',
        name: 'Смартфон realme XT 8/128GB',
        price: 35000,
        guarantee: '3 года',
        screenResolution: '2340x1080',
        screenDiagonale: '5,99',
        size: 'Нет информации',
        cameraResolution: 13,
        internalMemory: '128 ГБ',
        RAM: '8 ГБ',
        color: ["black", "white", "red", "green"],
        rating: 3
    });

    let item6 = await Item.create({
        img: 'https://cdn1.ozone.ru/s3/multimedia-s/c1200/6006221044.jpg',
        name: 'Смартфон Xiaomi Redmi Note 8T 4/64GB',
        price: 25000,
        guarantee: '2 года',
        screenResolution: '2340x1080',
        screenDiagonale: '5,99',
        size: 'Нет информации',
        cameraResolution: 13,
        internalMemory: '512 ГБ',
        RAM: '4 ГБ',
        color: ["black", "white", "red", "green"],
        rating: 5
    });

    let item6 = await Item.create({
        img: 'https://cdn1.ozone.ru/s3/multimedia-q/c1200/6001501874.jpg',
        name: 'Смартфон Xiaomi Redmi Note 7 4/64GB',
        price: 12000,
        guarantee: '2 года',
        screenResolution: '2340x1080',
        screenDiagonale: '5,99',
        size: 'Нет информации',
        cameraResolution: 13,
        internalMemory: '64 ГБ',
        RAM: '4 ГБ',
        color: ["black", "white", "red", "green"],
        rating: 4
    });

    await mongoose.disconnect();
}

module.exports = createUser();
