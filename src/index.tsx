import React, { MouseEventHandler, Props, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const element = <h1>Hello world!</h1>;

const name = "Stason";
let elementNew = <h1>Hello {name}</h1>;

type User = {
  firstName: string;
  lastName: string;
  avatarUrl?: URL | string;
};
function formatName(user: User) {
  return user.firstName + "" + user.lastName;
}

const user = {
  firstName: "Harper",
  lastName: "Perez",
  avatarUrl: "https://github.com",
};

elementNew = <h1>Hello, {formatName(user)}</h1>;

function getGreating(user: User) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const elementDiv = <div> tabIndex="0"</div>;
const elementImg = <img src={user.avatarUrl || "../public/logo192.png"} />;

const elementWithChildren = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you her</h2>
  </div>
);

const title = "Dr.";
let elementTitle = <h1>{title}</h1>;

const elementObject = <h1 className="greeting">Hello, world</h1>;

const elementWithProps = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);

const elementWithPropsOneMore = {
  type: "h1",
  props: {
    className: "greating",
    children: "Hello, world!",
  },
};

function tick() {
  const element = (
    <div>
      <h1>Hello world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById("root"));
}

// setInterval(tick, 1000);

// type CustomValue = any;
// interface Props {
//   propA: CustomValue
// }

function Welcome(props: { name: string }) {
  return <h1>Hello, {props.name}</h1>;
}

class Wellcome extends React.Component {
  render() {
    return <h1>Hello, {this.props}</h1>;
  }
}

const element1 = <div />;
const elementCustom = <Welcome name={"Sara"} />;

function Welcome1(props: { name: string }) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name={"Sara"} />
      <Welcome name={"Cahal"} />
      <Welcome name={"Edite"} />
    </div>
  );
}

function formatDate(date: Date) {
  return Date.toString();
}

type User1 = { user: { avatarUrl: string; name: string } };

type User2 = {
  author: { avatarUrl: string; name: string };
  date: Date;
  text: string;
};
type DateProps = {
  date?: Date;
};

function Avatar(props: User1) {
  return <img src={props.user.avatarUrl} alt={props.user.name} />;
}

// function Comment(props: User2) {
//   return (
//     <div>
//       <div>
//         <img src={props.author.avatarUrl} />
//         <Avatar user={props.author} />
//         <div className={"UserInfo-name"}>{props.text}</div>
//         <div className={"Comment-text"}>{props.author.name}</div>
//         <div className={"Comment-date"}>{formatDate(props.date)}</div>
//       </div>
//     </div>
//   );
// }

function UserInfo(props: User1) {
  return (
    <div>
      <Avatar user={props.user}></Avatar>
      <div className={"UserInfo-name"}>{props.user.name}</div>
    </div>
  );
}

function Comment(props: User2) {
  return (
    <div className={"Comment"}>
      <div className={"Comment-text"}></div>
      <UserInfo user={props.author} />
      <div className={"Comment-date"}>{formatDate(props.date)}</div>
    </div>
  );
}

interface IState {
  date: Date;
}

class Clock extends React.Component<DateProps, IState> {
  private timerID: NodeJS.Timeout | undefined;
  constructor(props: DateProps) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID instanceof NodeJS.Timeout) {
      clearInterval(this.timerID);
    }
    // this.setState(function (state, props) {
    //   return {
    //     counter: state.counter + props.increment
    //   }
    // })

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     posts: [],
    //     comments: [],
    //   }
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function FormattedDate(props: DateProps) {
  return <h2>It is {props.date!.toLocaleTimeString()}</h2>;
}

// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

function ActionLink() {
  function handleClick(e: any) {
    e.preventDefault();
    console.log("This link was clicked");
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
// class ClockClass extends React.Component<DateProps> {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
type ButtonProps = {
  // isToggleOn: boolean;
  // handleClick() void;
};

interface ButtonState {
  isToggleOn: boolean;
}
class Toggle extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log("this is: ", this);
  };

  render() {
    return <button onClick={this.handleClick}></button>;
  }

  // render() {
  //   return <button onClick={{() => this.handleClick}></button>
  // }
}

function tickNew() {
  ReactDOM.render(<Clock />, document.getElementById("root"));
}

function UserGreeting(props: unknown) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props: unknown) {
  return <h1>Please sign up.</h1>;
}
type IsLoggedIn = {
  isLoggedIn?: boolean;
};

function Greeting(props: IsLoggedIn) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props: { onClick(): HTMLElement }) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props: { onClick(): HTMLElement }) {
  return <button onClick={props.onClick}>Logout</button>;
}
interface LoginProps {}

interface LoginState {
  isLoggedIn: boolean;
}

class LoginControl extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      // @ts-ignore
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      // @ts-ignore
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function Mailbox(props: { unreadMessages: string[] }) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

const messages = ["React", "Re: React", "Re:Re: React"];

// setInterval(tickNew, 1000);

function WarningBanner(props: { warn: boolean }) {
  if (!props.warn) {
    return null;
  }
  return <div className="warning">Warning!</div>;
}

class Page extends React.Component<
  { showWarning?: boolean },
  { showWarning: boolean }
> {
  constructor(props: { showWarning: boolean }) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state: { showWarning: boolean }) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);

const listItems = numbers.map((number) => {
  return <li>{number}</li>;
});

function NumberList(props: { numbers: number[] }) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => <li>{number}</li>);
  return <ul>{listItems}</ul>;
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    );
  }
}

const MyComponents = {
  DatePicker(props: { color: string }) {
    return <div>Imagine a {props.color} datepicker here</div>;
  },
};

function BlueDatePicker() {
  return <MyComponents.DatePicker color={"blue"} />;
}

//*****************************************************

//======================================================

//=======================HOOKS==========================

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

function ExampleWithManyStates() {
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "Learn" + " Hooks" }]);
}

function ExampleNew() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

class XSearch extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(mountPoint);

    const name = this.getAttribute("name");
    const url = "https://www.google.com/search?q=" + encodeURIComponent(name!);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}

customElements.define("x-search", XSearch);

// function FriendStatus(props) {
//   const [isOnline, setIsOnline] = useState(null);
//   function handlessStatusChange(status) {
//     setIsOnline(status.isOnline);
//   }
// }

ReactDOM.render(<ExampleNew />, document.getElementById("root"));
