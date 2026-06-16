const { Kafka } = require("kafkajs");
const Author = require('./../models/Author');

const kafka = new Kafka({
  clientId: "author-service",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({
  groupId: "book-group",
});

async function run() {
  await consumer.connect();

  await consumer.subscribe({
    topic: "author-topic",
    fromBeginning: true,
  });


  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(message.value.toString());

    },
  });
}

run().catch(console.error);