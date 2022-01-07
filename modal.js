'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LikeButton = function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  function LikeButton(props) {
    _classCallCheck(this, LikeButton);

    var _this = _possibleConstructorReturn(this, (LikeButton.__proto__ || Object.getPrototypeOf(LikeButton)).call(this, props));

    _this.state = { liked: false };
    return _this;
  }

  _createClass(LikeButton, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return React.createElement(
          'div',
          { className: 'modal active', onClick: function onClick() {
              return _this2.setState({ liked: false });
            } },
          React.createElement(
            'div',
            { className: 'modal__content active', onClick: function onClick(e) {
                return e.stopPropagation();
              } },
            React.createElement(
              'form',
              { action: '#' },
              React.createElement(
                'div',
                null,
                React.createElement('input', { className: 'webform__form-elem', id: 'form-name', type: 'text', name: 'name', required: true,
                  placeholder: '\u0412\u0430\u0448\u0435 \u0438\u043C\u044F' })
              ),
              React.createElement(
                'div',
                null,
                React.createElement('input', {
                  className: 'webform__form-elem', id: 'form-phone', type: 'tel', name: 'phone', required: true,
                  placeholder: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D' })
              ),
              React.createElement(
                'div',
                null,
                React.createElement('input', {
                  className: 'webform__form-elem',
                  id: 'form-email',
                  type: 'email',
                  name: 'email',
                  required: true,
                  placeholder: 'E-mail' })
              ),
              React.createElement(
                'div',
                null,
                React.createElement('input', { id: 'form-comment', className: 'webform__form-elem', type: 'text', placeholder: '\u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439' })
              ),
              React.createElement(
                'div',
                { className: 'form__checkbox' },
                React.createElement('input', { className: 'checkbox__input', type: 'checkbox', id: 'userAgreement' }),
                React.createElement(
                  'label',
                  { className: 'checkbox__label',type: 'text', 'for': 'userAgreement' },
                  '\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0443 \u044F \u0434\u0430\u044E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430',
                  React.createElement(
                    'a',
                    null,
                    '\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0441\u0432\u043E\u0438\u0445 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445.\*'
                  )
                )
              ),
              React.createElement(
                'div',
                null,
                React.createElement(
                  'button',
                  { className: 'webform__form-btn' },
                  '\u041E\u0421\u0422\u0410\u0412\u0418\u0422\u042C \u0417\u0410\u042F\u0412\u041A\u0423!'
                )
              )
            )
          )
        );
      }

      return React.createElement(
        'div',
        null,
        React.createElement('input', {
          onClick: function onClick() {
            return _this2.setState({ liked: true });
          },
          className: 'plans__btn',
          type: 'button',
          value: '\u041E\u0421\u0422\u0410\u0412\u0418\u0422\u042C \u0417\u0410\u042F\u0412\u041A\u0423!' })
      );
    }
  }]);

  return LikeButton;
}(React.Component);

var domContainer = document.querySelector('#modal');
ReactDOM.render(React.createElement(LikeButton, null), domContainer);