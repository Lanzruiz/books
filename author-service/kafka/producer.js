const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "author-service",
  brokers: ["localhost:9092"],
});

const producer = kafka.producer();

async function connectProducer() {
  await producer.connect();
  console.log("Kafka Producer Connected");
}

async function publishAuthor(author) {
  await producer.send({
    topic: "author-topic",
    messages: [
      {
        value: JSON.stringify(author),
      },
    ],
  });

  console.log("Message sent to Kafka");
}

module.exports = {
  connectProducer,
  publishAuthor,
};