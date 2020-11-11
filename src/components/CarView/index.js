import React from "react";
import ChartView from "./ChartView";

const CarView = (props) => {
  return (
    <div className="text-white m-2 flex flex-col h-full">
      <div className="bg-gray-800 rounded-lg mb-2 h-full p-4 flex flex-col items-center justify-evenly">
        <div className="w-32">
          <div className="flex flex-col items-center justify-center border-4 border-white rounded-full p-4">
            {/* Speedometer */}
            <div className="text-5xl font-bold text-gray-300">{props.mph}</div>
            <div className="text-xl font-semibold -mt-4 text-gray-500">mph</div>
          </div>
        </div>

        <div className="flex items-center justify-between px-8 w-full">
          <div className="flex flex-col items-center">
            <svg
              className={`w-16 h-16 ${
                props.leftLight ? "text-yellow-500" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-xs text-gray-600">Left Indicator</div>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className={`w-16 h-16 ${
                props.rightLight ? "text-yellow-500" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-xs text-gray-600">Right Indicator</div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between px-8 w-full">
          {/* RPM */}
          <div className="flex items-center">
            <div className="text-xl font-bold text-gray-300 mr-1">{props.rpm}</div>
            <div className="text-base font-semibold -mt-1 text-gray-500">
              rpm
            </div>
          </div>

          <svg
            height="512"
            viewBox="0 0 57 57"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
          >
            <g id="018---Car-Door-Open">
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m43 33c.5522847 0 1-.4477153 1-1s-.4477153-1-1-1h-2l.707 2z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m16 51c.5522847 0 1-.4477153 1-1v-3h-3v3c0 .5522847.4477153 1 1 1z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m41 51c.5522847 0 1-.4477153 1-1v-3h-3v3c0 .5522847.4477153 1 1 1z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m15 35c-1.6568542 0-3 1.3431458-3 3v6c0 .5522847.4477153 1 1 1h30c.5522847 0 1-.4477153 1-1v-6c0-1.6568542-1.3431458-3-3-3zm18 4.867c.0038619-.9936243.7338565-1.8350101 1.717-1.979l5-.715c.5739979-.0820462 1.1553504.0890539 1.5933901.468957.4380398.3799031.6896457.931211.6896099 1.511043v1.847c0 1.1045695-.8954305 2-2 2h-5c-1.1045695 0-2-.8954305-2-2zm-7-2.867h4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1zm0 4h4c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-4c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1zm-3-1.133v1.133c0 1.1045695-.8954305 2-2 2h-5c-1.1045695 0-2-.8954305-2-2v-1.847c-.0000358-.579832.2515701-1.1311399.6896099-1.511043.4380397-.3799031 1.0193922-.5510032 1.5933901-.468957l5 .715c.9831435.1439899 1.7131381.9853757 1.717 1.979z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m16 41h5v-1.133l-5-.714z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m37.074 25.9c-.4952926-1.7133747-2.0614813-2.8946353-3.845-2.9h-10.458c-1.7835187.0053647-3.3497074 1.1866253-3.845 2.9l-2.512 7.1h23.171c-3.354-9.478-2.336-6.515-2.511-7.1zm-16.074 1.767c-.4217481.0011623-.7988882-.2624014-.9427662-.6588505-.1438781-.3964491-.0235609-.8405485.3007662-1.1101495l2-1.666c.4241547-.3540145 1.0549855-.2971547 1.409.127s.2971547 1.0549855-.127 1.409c-2.14 1.783-2.158 1.899-2.64 1.899zm8.64-1.9c-6.579 5.487-6.14 5.233-6.64 5.233-.4212412.0006536-.7977236-.2627371-.9415002-.6586826-.1437765-.3959455-.0240139-.8395339.2995002-1.1093174l6-5c.27438-.2290073.6500914-.2942387.9856075-.1711223s.5798639.4158763.641.768-.0702275.7101151-.3446075.9391223z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m14.294 33 .706-2h-2c-.3998548.0027797-.7596133.2434908-.9147349.6120405-.1551215.3685497-.0757807.7940764.2017349 1.0819595.378.385.62.306 2.007.306z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m2 43h8v-5c.0036768-1.0854693.3641933-2.1396111 1.026-3h-11.026v6c0 1.1045695.8954305 2 2 2zm1-6h2c.55228475 0 1 .4477153 1 1s-.44771525 1-1 1h-2c-.55228475 0-1-.4477153-1-1s.44771525-1 1-1z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m12.043 50.423c-4.979 1.071-6.043 2.29-6.043 2.577 0 1.357 7.766 4 22 4s22-2.643 22-4c0-.287-1.064-1.506-6.043-2.577-.2098643 1.4736303-1.468515 2.5705336-2.957 2.577h-1c-1.6568542 0-3-1.3431458-3-3v-3h-18v3c0 1.6568542-1.3431458 3-3 3h-1c-1.488485-.0064664-2.7471357-1.1033697-2.957-2.577z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m13 29h2.709l.991-2.8-4.859-1.815c-1.35-.511-1.481-.385-9.841-.385-1.1045695 0-2 .8954305-2 2v7h10.181c-.32901031-.9167457-.1908749-1.93629.370211-2.7324389.561086-.7961489 1.4747931-1.269109 2.448789-1.2675611z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m40 39.153-5 .714v1.133h5z"
              />
              <path
                fill={props.carDoor ? "red" : "white"}
                id="Shape"
                d="m46 0c-6.0751322 0-11 4.92486775-11 11 0 6.0751322 4.9248678 11 11 11s11-4.9248678 11-11c0-2.91738139-1.1589252-5.71527443-3.2218254-7.77817459-2.0629002-2.06290017-4.8607932-3.22182541-7.7781746-3.22182541zm0 18c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1 1 .4477153 1 1-.4477153 1-1 1zm1-5c0 .5522847-.4477153 1-1 1s-1-.4477153-1-1v-8c0-.55228475.4477153-1 1-1s1 .44771525 1 1z"
              />
            </g>
          </svg>
        </div>
        <div className="flex">
          {/* Gear */}
          {props.currentGear ? (
            <div className={`text-base font-bold mx-2`}>P</div>
          ) : (
            <div className={`text-base font-bold mx-2`}>D</div>
          )}
        </div>
      </div>
      <div className="">
        <ChartView />
      </div>
    </div>
  );
};

export default CarView;
