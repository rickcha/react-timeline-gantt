import React, { Component } from "react";
import TimeLine from "libs/TimeLine";
import Generator from "./Generator";
import "./App.css";
import { TASK_ROW_HEIGHT, TASK_MARGIN } from "../../lib/Const";

const color = {
  // Lea's Design
  blurple: "#6347ff",
  blurple_alpha: "#f5f0ff",

  // Ant Design
  blue: "#1890ff",
  toDo: "#9E35EB",
  inProgress: "#FFCA53",
  underReview: "#FF9A21",
  completed: "#4DD87A",
};

let config = {
  header: {
    // borderLeft cannot be changed
    top: {
      style: {
        fontSize: 10,
        backgroundColor: "transparent",
        color: "rgba(0, 0, 0, 0.6)",
        justifyContent: "flex-start",
      },
    },
    middle: {
      style: {
        fontSize: 16,
        backgroundColor: "transparent",
        color: "rgba(0, 0, 0, 0.87)",
        borderBottom: "none",
      },
      selectedStyle: { backgroundColor: "#b13525" },
    },
    bottom: {
      style: {
        fontSize: 10,
        backgroundColor: "transparent",
        color: "#9E9E9E",
        borderBottom: "1px solid #C4C4C4",
      },
      selectedStyle: { backgroundColor: "#fff", fontWeight: "bold" },
    },
  },
  taskList: {
    title: {
      label: "Tasks",
      style: {
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.87)",
        backgroundColor: "white",
        borderBottom: "0px",
        borderTopRightRadius: "5px 5px",
        borderTopLeftRadius: "5px 5px",
      },
    },
    task: {
      style: {
        fontSize: 16,
        color: "rgba(0, 0, 0, 0.87)",
        borderBottom: "0px",
      },
    },
    verticalSeparator: {
      disable: true,
      style: { backgroundColor: "red" },
      grip: {
        style: { backgroundColor: "#cfcfcd" },
      },
    },
  },
  dataViewPort: {
    rows: {
      style: {
        backgroundColor: "transparent",
        borderBottom: "0px",
      },
    },
    task: {
      showLabel: true,
      labelStyle: {
        color: "#fff",
        fontSize: 14,
        whiteSpace: "nowrap",
        textAlign: "left",
        lineHeight: TASK_ROW_HEIGHT - TASK_MARGIN + "px",
        marginLeft: 10,
      },
      style: {
        position: "absolute",
        borderRadius: 5,
        color: "grey",
        backgroundColor: "lightgrey",
      },
      selectedStyle: {
        borderRadius: 5,
        border: "none",
        backgroundColor: color.blurple,
      },
    },
  },
  links: {
    color: "black",
    selectedColor: "blue",
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemheight: 30,
      data: [
        {
          id: "c7f4f984-1b61-416c-903c-288eb6bc7406",
          name: "Username should be case-insensitive during login",
          start: 1590019300274,
          end: 1591029300274,
          status: "inProgress",
          collection: "tasks",
          color: "#FF9A21",
        },
        {
          id: "f6d40111-7c32-4a63-a30b-1381f276aabb",
          name: "User should be able to save empty text in email",
          start: 1590019300274,
          end: 1591029300274,
          status: "toDo",
          collection: "tasks",
          color: null,
        },
        {
          id: "8fb6c893-6140-4fc4-996c-621491989fac",
          name: "Backward compatibility with the previous db schema",
          start: 1590019300274,
          end: 1591029300274,
          status: "underReview",
          collection: "tasks",
          color: "#4DD87A",
        },
        {
          id: "aaba372e-ef08-4e5f-af40-6f3a1880c71c",
          name:
            "[Bug] Chat msdfsdessages are not loading fast enough/incorrect order",
          start: 1590019300274,
          end: 1591029300274,
          status: "completed",
          collection: "tasks",
          color: "red",
        },
        {
          id: "aaba472e-ef08-4e5f-af40-6f3a1880c71c",
          name:
            "[Bug] Chat messages are not loading fast enough/incorrect order",
          start: 1590019300274,
          end: 1591029300274,
          status: "completed",
          collection: "tasks",
          color: null,
        },
        {
          id: "aaba152e-ef08-4e5f-af40-6f3a1880c71c",
          name:
            "[Bug] Chat messages are not loading fast enough/incorrect order",
          start: 1590019300274,
          end: 1591029300274,
          status: "completed",
          collection: "tasks",
          color: null,
        },
        {
          id: "2f4ed0b8-5093-4d24-9d4f-c9e62bf047d5",
          name: "[Design] Redesign marketing website ",
          start: 1590019300274,
          end: 1591029300274,
          status: "inProgress",
          collection: "tasks",
          color: "#F8591E",
        },
        {
          id: "53cbafed-c69c-4739-8599-c3a2e9fbecb0",
          name: "Research Libraries",
          start: 1590019300274,
          end: 1591029300274,
          status: "toDo",
          collection: "tasks",
          color: null,
        },
        {
          id: "8acd82d4-e036-4e16-95bd-9410b0bf153c",
          name: "Setup Visual Studio",
          start: 1590019300274,
          end: 1591029300274,
          status: "toDo",
          collection: "tasks",
          color: "#FF9A21",
        },
      ],
      selectedItem: {
        _id: "5e28ae9168d7960007ef7e19",
        start: "f6d40111-7c32-4a63-a30b-1381f276aabb",
        end: "53cbafed-c69c-4739-8599-c3a2e9fbecb0",
        active: true,
        id: "998b79ff-0d68-4b30-9a77-b9cf11a4eb39",
        courseId: "e1772f2c-141c-4b79-938a-62fdb2664515",
        groupId: "80472564-a837-4847-bbe0-9e8cbe2f1dc5",
        collection: "links",
        createdBy: "697dadae-3bf3-4ddf-96c6-1f5e9ce3e47e",
        createdOn: 1579724433431,
        modifiedBy: "697dadae-3bf3-4ddf-96c6-1f5e9ce3e47e",
        modifiedOn: 1579724433431,
      },
      timelineMode: "month",
      links: [
        {
          _id: "5e28ae9168d7960007ef7e19",
          start: "f6d40111-7c32-4a63-a30b-1381f276aabb",
          end: "53cbafed-c69c-4739-8599-c3a2e9fbecb0",
          active: true,
          id: "998b79ff-0d68-4b30-9a77-b9cf11a4eb39",
          courseId: "e1772f2c-141c-4b79-938a-62fdb2664515",
          groupId: "80472564-a837-4847-bbe0-9e8cbe2f1dc5",
          collection: "links",
          createdBy: "697dadae-3bf3-4ddf-96c6-1f5e9ce3e47e",
          createdOn: 1579724433431,
          modifiedBy: "697dadae-3bf3-4ddf-96c6-1f5e9ce3e47e",
          modifiedOn: 1579724433431,
        },
      ],
      nonEditableName: false,
    };
  }

  onHorizonChange = (start, end) => {
    let result = this.state.data.filter((item) => {
      return (
        (item.start < start && item.end > end) ||
        (item.start > start && item.start < end) ||
        (item.end > start && item.end < end)
      );
    });
    this.setState({ data: result });
  };

  onSelectItem = (item) => {
    this.setState({ selectedItem: item });
  };

  onUpdateTask = (item, props) => {
    item.start = props.start;
    item.end = props.end;
    this.setState({ data: [...this.state.data] });
  };

  onCreateLink = (item) => {
    let newLink = Generator.createLink(item.start, item.end);
    this.setState({ links: [...this.state.links, newLink] });
    console.log(`Update Item ${item}`);
  };

  getbuttonStyle(value) {
    return this.state.timelineMode == value
      ? { backgroundColor: "grey", boder: "solid 1px #223344" }
      : {};
  }

  modeChange = (value) => {
    this.setState({ timelineMode: value });
  };

  genID() {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-4" +
      S4().substr(0, 3) +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    ).toLowerCase();
  }

  getRandomDate() {
    let result = new Date();
    result.setDate(result.getDate() + Math.random() * 10);
    return result;
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addTask = () => {
    let newTask = {
      id: this.state.data.length + 1,
      start: new Date(),
      end: this.getRandomDate(),
      name: "New Task",
      color: this.getRandomColor(),
    };
    this.setState({ data: [newTask, ...this.state.data] });
  };

  delete = () => {
    console.log("On delete");
    if (this.state.selectedItem) {
      let index = this.state.links.indexOf(this.state.selectedItem);
      if (index > -1) {
        this.state.links.splice(index, 1);
        this.setState({ links: [...this.state.links] });
      }
      index = this.state.data.indexOf(this.state.selectedItem);
      if (index > -1) {
        this.state.data.splice(index, 1);
        this.setState({ data: [...this.state.data] });
      }
    }
  };

  render() {
    return (
      <div className="app-container">
        <div className="time-line-container">
          <TimeLine
            dayWidth={40}
            config={config}
            data={this.state.data}
            links={this.state.links}
            onHorizonChange={this.onHorizonChange}
            onSelectItem={this.onSelectItem}
            onUpdateTask={this.onUpdateTask}
            onCreateLink={this.onCreateLink}
            mode={this.state.timelineMode}
            itemheight={TASK_ROW_HEIGHT}
            selectedItem={this.state.selectedItem}
            nonEditableName={true}
          />
        </div>
      </div>
    );
  }
}

export default App;
