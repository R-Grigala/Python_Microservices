#amqps://mbhkiujr:1U0YbrO4RETrtwul5wK8YHNwBVHzURJq@hawk.rmq.cloudamqp.com/mbhkiujr
import pika, json

params = pika.URLParameters('amqps://mbhkiujr:1U0YbrO4RETrtwul5wK8YHNwBVHzURJq@hawk.rmq.cloudamqp.com/mbhkiujr')

connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='admin', body=json.dumps(body), properties=properties)