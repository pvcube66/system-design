abstract class BNotification{
  protected message: string;
  constructor(message: string) {
    this.message = message;
  }
  abstract send(): void;
}

class EmailBNotification extends BNotification{
  send(): void{
    console.log(`Email sent:${this.message}`)
  }
}

class SMSBNotification extends BNotification{
  send(): void{
    console.log(`SMS sent:${this.message}`)
  }
}

class PushBNotification extends BNotification{
  send(): void{
    console.log(`Push sent:${this.message}`)
  }
}

class BNotificationService{
  sendAll(BNotifications: BNotification[]):void {
    for (const n of BNotifications) {
      n.send();
    }
  }
}

const BNotifications: BNotification[] = [
  new EmailBNotification("Hello"),
  new SMSBNotification("World"),
  new PushBNotification("Test")
];

new BNotificationService().sendAll(BNotifications);