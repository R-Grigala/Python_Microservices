#amqps://mbhkiujr:1U0YbrO4RETrtwul5wK8YHNwBVHzURJq@hawk.rmq.cloudamqp.com/mbhkiujr
import pika

params = pika.URLParameters('amqps://mbhkiujr:1U0YbrO4RETrtwul5wK8YHNwBVHzURJq@hawk.rmq.cloudamqp.com/mbhkiujr')

connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='main')

def callback(ch, method, properties, body):
    print('Received in main')
    print(body)

channel.basic_consume(queue='main', on_message_callback=callback, auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()