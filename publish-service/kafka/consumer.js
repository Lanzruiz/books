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
            const { title, isbn, description, author } = JSON.parse(message.value.toString());

            console.log("Recieved message from Kafka:", { title, isbn, description, author});
            const book = new BookPublish({
                title: title,
                isbn: isbn,
                author: author,
                description: description,
             
            });

            const savedBook = await book.save();


        },
    });
}

run().catch(console.error);