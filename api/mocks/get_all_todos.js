/**
 * Created by yuval on 20/07/17.
 */
var todos = [
    {
        id: 1,
        todo:  'Kill bill',
        createTime:  '2017-07-18T22:16:09.497Z',
        completed: false
    },
    {
        id: 2,
        todo:  'Kill bill 2 - reloaded',
        createTime:  '2017-07-18T22:16:09.497Z',
        completed: false
    }
];
module.exports = {
    GetAllTodos: GetAllTodos
};

function GetAllTodos(req, res, next) {
    res.json(todos);
}