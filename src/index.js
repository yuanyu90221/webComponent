module.exports = function (app) {

  /**
     * 取得歡迎訊息。
     *
     * @method helloWorld
     * @summary [GET] /
     * @type JSON
     * @example
     * {
     *   msg: 'Hello World!'
     * }
     */
    app.get('/', function (req, res) {
      res.json({msg: 'Hello World!'})
    })
  
    /**
     * 取得客製歡迎訊息。
     *
     * @method sayHi
     * @summary [POST] /
     * @param {String} name - 名字。
     * @type JSON
     * @example
     * {
     *   msg: 'Hi! Larry.'
     * }
     */
    app.post('/', function (req, res) {
      if (req.body.name) {
        res.json({msg: 'Hi! ' + req.body.name + '.'})
      } else res.json({msg: 'error'})
    })
  };