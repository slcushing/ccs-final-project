from django.conf import settings                                                                                                                                                       
from django.http import HttpResponse
from twilio.rest import Client


def broadcast_sms(recipients, message):
    print(recipients)
    for recipient in recipients:
        print(recipient.phone_number)
    # message_to_broadcast = ("Have you played the incredible TwilioQuest "
    #                                             "yet? Grab it here: https://www.twilio.com/quest")
    # client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    # for recipient in settings.SMS_BROADCAST_TO_NUMBERS:
    #         client.messages.create(to=recipient,
    #                                from_=settings.TWILIO_NUMBER,
    #                                body=message)
    # return HttpResponse("messages sent!", 200)

