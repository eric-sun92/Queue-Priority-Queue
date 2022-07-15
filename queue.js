// queue is a data structure that uses array but follows a FIFO (first in first out) system
class Queue {
    
    constructor(){
        this.storage = []
        this.size = 0
    }

    print(){
        console.log(this.storage)
    }

    //add element to end of list
    enqueue(data){
        this.size++
        return this.storage.push(data)
    }
    dequeue(){
        if(this.size > 0){
            this.size--
            return this.storage.shift()
        }
    }

    front(){
        return this.storage[0]
    }
}

let q1 = new Queue()

q1.print()
q1.enqueue(50)
q1.enqueue(40)
q1.enqueue(30)
q1.enqueue(20)
q1.enqueue(10)

q1.print()

q1.dequeue()
q1.print()

q1.dequeue()
q1.print()


//priority queue - each element inside queue has a priority property 
//this priority will enqueue the element where it has the highest priortiy of all the
//elements behind it
//if elements have same priority, then follows FIFO like a regular queue structure


class priorityQueue {

    constructor(){
        this.storage = []
        this.size = 0
    }

    print(){
        console.log(this.storage)
    }

    

    enqueue(data, priority){
        let added = false
        if(this.storage.size === 0){
            this.storage.push([data, priorty])
            this.size++
            return
        }

        for(let i = 0; i < this.storage.length; i++){
            if(priority > this.storage[i][1]){
                this.storage.splice(i, 0, [data, priority])
                added = true;
                break;
            }
        }

        if(!added){
            this.storage.push([data, priority])
        }
    }

    dequeue(){
        let head = this.storage[0][0]
        this.storage.shift()
        return head
    }

    front(){
        return this.storage[0][0]
    }
}

let q2 = new priorityQueue()
q2.enqueue(5, 2)
q2.enqueue(2, 1)
q2.enqueue(1, 2)
q2.dequeue()
q2.print()


// stack is just the same but follows FILO (first in last out rule)