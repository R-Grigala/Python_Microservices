#amqps://mbhkiujr:1U0YbrO4RETrtwul5wK8YHNwBVHzURJq@hawk.rmq.cloudamqp.com/mbhkiujr
import pika

params = pika.URLParameters('amqps://mbhkiujr:1U0YbrO4RETrtwul5wK8YHNwBVHzURJq@hawk.rmq.cloudamqp.com/mbhkiujr')

connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish():
    channel.basic_publish(exchange='', routing_key='main', body='hello main')