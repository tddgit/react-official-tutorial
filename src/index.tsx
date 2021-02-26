import React, { Props } from "react";
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

function tickNew() {
  ReactDOM.render(<Clock />, document.getElementById("root"));
}

// setInterval(tickNew, 1000);

ReactDOM.render(<Clock />, document.getElementById("root"));
