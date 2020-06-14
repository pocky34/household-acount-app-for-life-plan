const expenseTypes = [
  '基本生活費',
  'その他生活費',
  '住宅ローン',
  '家賃・管理費等',
  '生命保険料',
  '一時的な支出',
  '教育費',
  '車関連費',
  '奨学金'
];

const items = [];
let nextId = 1;

class Item {
  constructor({ date, expenseType, expense, memo }) {
    this.id = nextId++;
    this.date = date;
    this.expenseType = expenseType;
    this.expense = expense;
    this.memo = memo;
  }
}

items.push(new Item({
  date: '2020/1/1',
  expenseType: 'その他生活費',
  expense: 160000,
  memo: '冷蔵庫'
}));
items.push(new Item({
  date: '2020/2/1',
  expenseType: 'その他生活費',
  expense: 20000,
  memo: '家具'
}));
items.push(new Item({
  date: '2020/3/1',
  expenseType: 'その他生活費',
  expense: 10000,
  memo: '帰省'
}));

module.exports = {
  getExpenseTypes: () => {
    return expenseTypes;
  },
  findAll: () => {
    return items.slice();
  },
  create: ({ date, expenseType, expense, memo }) => {
    const item = new Item({
      date: date,
      expenseType: expenseType,
      expense: expense,
      memo: memo
    });
    items.push(item);

    return item;
  },
  update: ({ id, date, expenseType, expense, memo }) => {
    const item = items.find(item => id === item.id);
    if (!item) {
      throw new Error('not found');
    }

    item.date = date;
    item.expenseType = expenseType;
    item.expense = expense;
    item.memo = memo;

    return item;
  },
  remove: (id) => {
    const targetIndex = items.findIndex(item => id === item.id);
    if (targetIndex === -1) {
      throw new Error('not found');
    }

    const removedItem = items.splice(targetIndex, 1)[0];

    return removedItem;
  }
}