import React, { Component } from "react";

import "../style/App.css";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { hostelBedAction, oneBedAction, twoBedAction } from "../actions/index";

import cityImg from "../Img/City.png";
import Vector from "../Img/Vector.png";
import Bunk from "../Img/Bunk.png";

const mapStateToProps = (state) => {
  return {
    oneBed: state.oneBed,
    twoBed: state.twoBed,
    hostelBed: state.hostelBed,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    hostelBedAction: bindActionCreators(hostelBedAction, dispatch),
    oneBedAction: bindActionCreators(oneBedAction, dispatch),
    twoBedAction: bindActionCreators(twoBedAction, dispatch),
  };
};

class App extends Component {
  activateBed = (type) => {
    const { oneBed, twoBed, hostelBed } = this.props;
    console.log(type);
    switch (type) {
      case "oneBed":
        console.log(type, "oneBedAction");
        this.props.oneBedAction({
          active: !oneBed.active,
          cost: !oneBed.active ? oneBed.cost + 2 : oneBed.cost - 2,
        });
        break;
      case "twoBed":
        console.log(type, "twoBedAction");
        this.props.twoBedAction({
          active: !twoBed.active,
          cost: !twoBed.active ? twoBed.cost + 2 : twoBed.cost - 2,
        });
        break;
      case "hostel":
        console.log(type, "hostelBedAction");
        this.props.hostelBedAction({
          active: !hostelBed.active,
          cost: !hostelBed.active ? hostelBed.cost + 2 : hostelBed.cost - 2,
        });
        break;
    }
  };

  render() {
    const { oneBed, twoBed, hostelBed } = this.props;

    return (
      <div id="App">
        <div id="Card">
          <div id="wrapper">
            <div id="Header">
              <div id="HeaderWrapper">
                <div id="ContainerText">
                  <h1>Киев</h1>
                </div>
                <h5 id="country">Украина</h5>
              </div>
            </div>
            <div id="Body">
              <div id="BodyWrapper">
                <img id="imgCard" src={cityImg} alt="Error" />
                <div id="CostVectorBlock">
                  <div className="costVector">
                    <div className="Container">
                      <img
                        className="imgVector"
                        onClick={() => this.activateBed("oneBed")}
                        src={Vector}
                      />
                      <h2 className="cost">{oneBed.cost} USD</h2>
                    </div>

                    <div className="Container">
                      <div>
                        <img
                          className="imgVector"
                          onClick={() => this.activateBed("twoBed")}
                          src={Vector}
                        />
                        <img
                          className="imgVector"
                          src={Vector}
                          onClick={() => this.activateBed("twoBed")}
                        />
                      </div>
                      <h2 className="cost">{twoBed.cost} USD</h2>
                    </div>

                    <div className="Container">
                      <div className="wrapperImg">
                        <img
                          className="imgVector"
                          onClick={() => this.activateBed("hostel")}
                          src={Bunk}
                        />
                        <h5 id="bunkText">место в хостеле</h5>
                      </div>
                      <h2 className="cost">{hostelBed.cost} USD</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Footer">
              <div className="textFooter">
                <a href="/">Гостиницы</a>
                <a href="/">Хостелы</a>
                <a href="/">Комнаты посуточно</a>
                <a href="/">Курортные отели</a>
              </div>

              <div className="textFooter">
                <a href="/">Квартиры посуточно</a>
                <a href="/">Дома посуточно</a>
                <a href="/">Дома для отпуска</a>
                <a href="/">Все варианты</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchProps)(App);
