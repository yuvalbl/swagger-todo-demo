/**
 * Created by yuval on 19/07/17.
 */
var url = require('url');

module.exports = {
    GetTodoById: GetTodoById
};

function GetTodoById(req, res, next) {
    var url_parts = req.url.split('/')
    console.log(url_parts[url_parts.length-1])

    res.json({
        id: parseInt(url_parts[url_parts.length-1]),
        todo:  'Sample text',
        createTime:  '2017-07-18T22:16:09.497Z',
        completed: true
    });
}