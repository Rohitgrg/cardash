import React from "react";
import SnackbarProvider from "react-simple-snackbar";

import CarView from "./CarView";
import { Footer } from "./Footer";
import Map from "./Map";
import Menu from "./Menu";
import Music from "./Music";
import Navbar from "./navbar";

class App extends React.Component {
  state = {
    currentLat: -33.86543,
    currentLng: 151.21002,
    fuel: 80,
    currentGear: true,
    carDoor: true,
    acState: true,
    mph: 45,
    rpm: 1000,
    engine: 80,
    leftLight: false,
    rightLight: false
  };

  setStates = (state, value) => {
    this.setState({
      [state]: value,
    });
  };

  render() {
    return (
      <SnackbarProvider>
        <div className="h-screen bg-black flex flex-col">
          <Navbar />
          <div className="flex-1 flex">
            <div className=" flex flex-col w-3/4">
              <div className="flex">
                <div className="bg-black ">
                  <Map
                    currentLat={this.state.currentLat}
                    currentLng={this.state.currentLng}
                  />
                </div>

                <div className=" w-1/2 m-2">
                  <Menu
                    leftLight={this.state.leftLight}
                    rightLight={this.state.rightLight}
                    mph={this.state.mph}
                    fuel={this.state.fuel}
                    rpm={this.state.rpm}
                    engine={this.state.engine}
                    acState={this.state.acState}
                    cardDoor={this.state.carDoor}
                    currentGear={this.state.currentGear}
                    setStates={this.setStates}
                    currentLat={this.state.currentLat}
                    currentLng={this.state.currentLng}
                  />
                </div>
              </div>
              <div className="">
                <Music />
              </div>
            </div>
            <div className="h-full w-1/4">
              <CarView
                leftLight={this.state.leftLight}
                rightLight={this.state.rightLight}
                mph={this.state.mph}
                rpm={this.state.rpm}
                carDoor={this.state.carDoor}
                currentGear={this.state.currentGear}
              />
            </div>
          </div>
          <div>
            <Footer fuel={this.state.fuel} engine={this.state.engine} />
          </div>
        </div>
      </SnackbarProvider>
    );
  }
}

export default App;
