'use strict';


class LikeButton extends React.Component {
      constructor(props) {
      super(props);
      this.state = { liked: false };
    }

    render() {
      if (this.state.liked) {
      return (
        <div className={'modal active'} onClick={() => this.setState({liked: false})}>
          <div className={'modal__content active'} onClick={e => e.stopPropagation()}>
          <form action="#">
          <div>
          <input className="webform__form-elem" id="form-name" value={this.state.name} onChange={this.handleChange} type="text" name="name" required
        placeholder="Ваше имя"/>
        </div>
        <div>
        <input
        className="webform__form-elem" id="form-phone" value={this.state.phone} onChange={this.handleChange} type="tel" name="phone" required
        placeholder="Телефон"/>
        </div>
        <div>
        <input
        className="webform__form-elem" id="form-email" value={this.state.email} onChange={this.handleChange} type="email" name="email"requiredplaceholder="E-mail"/>
        </div>
        <div>
        <input id="form-comment" className="webform__form-elem" type="text" placeholder="Ваш комментарий"/>
        </div>
        <div className="form__checkbox">
        <input className="checkbox__input" value={this.state.checkbox} onChange={this.handleChange} type="checkbox" id="userAgreement"/>
        <label className="checkbox__label" type="text" for="userAgreement">Отправляя заявку я даю согласие на
        <a>обработку своих персональных данных</a>.<span>*</span></label>
        </div>
        <div>
        <button className="webform__form-btn">ОСТАВИТЬ ЗАЯВКУ!</button>
        </div>
        </form>
        </div>
        </div>
      )
      }

      return (
      <div>
      <input
      onClick={() => this.setState({ liked: true }) }
      className="plans__btn"
      type="button"
      value="ОСТАВИТЬ ЗАЯВКУ!" />
      </div>
      );
      }
    }

    export default class SignIn extends Component {
    state = {
    name: '',
    phone: '',
    email: '',
    checkbox: false
    };

    handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
    
    this.setState({ [input.name]: value });
    };

    handleFormSubmit = () => {
    const { name,phone,email, checkbox } = this.state;
    localStorage.setItem('checkbox', checkbox);
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    };
    render() { /*...*/ }

}

let domContainer = document.querySelector('#modal');
ReactDOM.render(<LikeButton />, domContainer);