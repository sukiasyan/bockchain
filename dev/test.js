const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'KHFGFJHFGHRFTHFHGF65656565JBJHBJH';
const currentBlockData = [
    {
        amount: 10,
        sender: 'JHGJHJGH65656565',
        recipient: '9867JHUHJGHHG'
    },
    {
        amount: 30,
        sender: '0988JGH65656565',
        recipient: 'JGGH9867JHUHJGHHG'
    },
    {
        amount: 50,
        sender: '99999JGH65656565',
        recipient: '11111JHUHJGHHG'
    }
];




console.log ( bitcoin.proofOfWork(previousBlockHash, currentBlockData));

