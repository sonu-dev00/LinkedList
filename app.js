
const linkL = require('./linkedList');

let LinkList = new linkL();

LinkList.prepend(30);
LinkList.prepend(40);
LinkList.prepend(50);
LinkList.prepend(60);
LinkList.append(99);
LinkList.insert(100, 3);
LinkList.deleteFirst();
LinkList.display();
LinkList.deleteLast();
LinkList.display();
LinkList.deleteIndex(2);
LinkList.display();
































