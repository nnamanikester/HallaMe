import Realm from 'realm';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string?',
  },
  primaryKey: '_id',
};

export default async () => {
  return await Realm.open({
    path: 'database',
    schema: [TaskSchema],
  });
};

// export default
