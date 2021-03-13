<<<<<<< HEAD
import "./App.css";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { TopNav } from "./components/TopNav/TopNav";
import { ChoreChart } from "./components/ChoreChart/ChoreChart";
import { TimelineHome } from "./components/TimeLine/TimeLineHome";
import { GroceryList } from "./components/GroceryList/GroceryList";
import { Todo } from "./components/TaskApp/Todo";
import Calender from "./components/Calender/Calender";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <Switch>
          <Route path="/" exact component={TimelineHome} />
          <Route path="/stats" component={ChoreChart} />
          <Route path="/grocerylist" component={GroceryList} />
          <Route path="/todolist" component={Todo} />
          <Route path="/calender" component={Calender} />
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
=======
import "./App.scss";

import {BottomNav} from "./components/BottomNav/BottomNav";
import {TopNav} from "./components/TopNav/TopNav";
import {ChoreChart} from "./components/ChoreChart/ChoreChart";
import {TimelineHome} from "./components/TimeLine/TimeLineHome";
import {GroceryList} from "./components/GroceryList/GroceryList";
import {Todo} from "./components/Todo/Todo";
import {Survey} from "./components/Survey/Survey";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<TopNav />
				<Switch>
					<Route path="/" exact component={TimelineHome} />
					<Route path="/stats" component={ChoreChart} />
					<Route path="/grocerylist" component={GroceryList} />
					<Route path="/todo" component={Todo} />
					<Route path="/survey" component={Survey} />
					<Route path="/todolist" component={Todo} />
				</Switch>
				<BottomNav />
			</div>
		</Router>
	);
>>>>>>> 987a65456ffbd683fa50af3da7043e688eacb436
}

export default App;
