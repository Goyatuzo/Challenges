import { insertNodeAtHead, SinglyLinkedList, SinglyLinkedListNode } from "../../../../../HackerRank/Practice/Data-Structures/Linked-Lists/insert-node-at-head";
import { expect } from "chai";

describe('Linked List - Insert Node at Head', () => {
    it("Insert head into list of one list", () => {
        const initialHead = new SinglyLinkedListNode(5);

        const newHead = insertNodeAtHead(initialHead, 4);

        expect(newHead.data).to.equal(4);
        expect(newHead.next).to.equal(initialHead);
        expect(initialHead.next).to.equal(null);
    });

    it("Test out given sample", () => {
        const firstHead = new SinglyLinkedListNode(5);
        const secondHead = insertNodeAtHead(firstHead, 383);
        const thirdHead = insertNodeAtHead(secondHead, 484);
        const fourthHead = insertNodeAtHead(thirdHead, 392);
        const fifthHead = insertNodeAtHead(fourthHead, 321);

        // We did value testing in the first one, so we can just test sequence.
        expect(fifthHead.next).to.equal(fourthHead);
        expect(fourthHead.next).to.equal(thirdHead);
        expect(thirdHead.next).to.equal(secondHead);
        expect(secondHead.next).to.equal(firstHead);
        expect(firstHead.next).to.equal(null);
    });
});