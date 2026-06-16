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
    topic: "book-topic",
    fromBeginning: true,
  });


  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(message.value.toString());



                    //   const author = new Author({
              
                    //       firstName: "Test",
                    //       lastName: "Test",
                    //       email: "test@example.com",
                    //       biography: "This is a test author.",
      
                    //   });
      
                    //   const savedAuthor = await author.save();
    },
  });
}

run().catch(console.error);