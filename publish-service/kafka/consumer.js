const { Kafka } = require("kafkajs");
// const Author = require('./../models/Author');
const BookPublish = require('../models/BookPublish')

const kafka = new Kafka({
    clientId: "publish-service",
    brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({
    groupId: "book-group-test",
});

async function run() {
    await consumer.connect();

    await consumer.subscribe({
        topic: "book-topic",
        fromBeginning: true,
    });


    await consumer.run({
        eachMessage: async ({ message }) => {
            console.log(message.value.toString());
            const { title, isbn, description, author, id } = JSON.parse(message.value.toString());
            console.log("id of book", id);
            const book = new BookPublish({
                bookId: id,
                title: title,
                isbn: isbn,
                author: author,
                description: description,
                status: false,
                createdAt: new Date()
            });

            const savedBook = await book.save();


        },
    });
}

run().catch(console.error);