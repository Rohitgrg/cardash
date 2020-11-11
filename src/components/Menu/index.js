import React from "react";

import { useSnackbar } from "react-simple-snackbar";

import horn from "../../assets/horn.mp3";

const Menu = (props) => {
  const [openSnackbar] = useSnackbar();
  const audioRef = React.useRef();

  const handleAcc = () => {
    if (props.fuel > 0 && props.engine) {
      props.setStates("mph", props.mph + 2);
      props.setStates("rpm", props.rpm + 1);
      if (props.fuel < 2) {
        props.setStates("fuel", 0);
      } else {
        props.setStates("fuel", props.fuel - 1);
      }
      if (props.engine < 2) {
        props.setStates("engine", 0);
      } else {
        props.setStates("engine", props.engine - 1);
      }
    }
  };
  const handleBreak = () => {
    props.setStates("mph", 0);
    props.setStates("rpm", 0);
  };

  return (
    <div className="w-full flex flex-col h-full">
      <div className="bg-gray-800 w-full p-6 rounded-lg mb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-10 h-10 mr-2"
            >
              <path
                fill="#A0AEC0"
                d="M496 208h-16v-16c0-8.837-7.163-16-16-16h-16v-16c0-17.673-14.327-32-32-32H32c-17.673 0-32 14.327-32 32v192c0 17.673 14.327 32 32 32h384c17.673 0 32-14.327 32-32v-16h16c8.837 0 16-7.163 16-16v-16h16c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16zm-80-16v160H32V160h384v32z"
              />
              <path
                fill="#48BB78"
                d="M64 192h32v128H64zM128 192h32v128h-32zM192 192h32v128h-32zM256 192h32v128h-32zM320 192h32v128h-32z"
              />
            </svg>
            <div className="text-white text-sm text-semibold text-gray-400">
              80%
            </div>
          </div>
          <div className="text-white text-base font-semibold text-gray-100">
            2200 kms
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly flex-wrap flex-1">
        <div className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600">
          {/* Nav */}
          <svg
            class="w-16 h-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          <div className="text-gray-600">Navigator</div>
        </div>
        <div
          onClick={() => props.setStates("fuel", 100)}
          className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600 flex items-center justify-center"
        >
          {/* Feaul */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368 368"
            className="w-16 h-16"
          >
            <path
              fill="white"
              d="M328 0h-96a7.994 7.994 0 00-6.4 3.2L216 16H104c-4.416 0-8 3.576-8 8v40H72c-22.056 0-40 17.944-40 40v224c0 22.056 17.944 40 40 40h224c22.056 0 40-17.944 40-40V8c0-4.424-3.584-8-8-8zM112 32h92l-24 32h-68V32zm208 296c0 13.232-10.768 24-24 24H72c-13.232 0-24-10.768-24-24v-8h216c4.416 0 8-3.576 8-8s-3.584-8-8-8H48v-32h272v56zm0-72H48V144h272v112zm0-128H48v-24c0-13.232 10.768-24 24-24h112a7.994 7.994 0 006.4-3.2L236 16h84v112z"
            />
          </svg>
          <div className="text-gray-600">Fuel</div>
        </div>
        <div
          onClick={() => props.setStates("currentGear", !props.currentGear)}
          className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368 368"
            className="w-16 h-16"
          >
            <path
              fill="white"
              d="M264 288h-40V166.304c29.312-14.952 48-45.112 48-78.304 0-48.52-39.48-88-88-88S96 39.48 96 88c0 33.2 18.696 63.376 48 78.304V288h-40c-22.056 0-40 17.944-40 40v32c0 4.416 3.584 8 8 8h224c4.416 0 8-3.584 8-8v-32c0-22.056-17.944-40-40-40zM112 88c0-39.696 32.304-72 72-72s72 32.304 72 72c0 28.616-16.96 54.504-43.24 65.968-13.568 6.008-28.968 7.504-43.448 4.504a70.121 70.121 0 01-14.12-4.52C128.96 142.504 112 116.616 112 88zm48 136.496v-51.832c.64.184 1.312.24 1.952.408a84.433 84.433 0 008.112 1.712c.968.152 1.92.328 2.888.448 3.648.456 7.32.768 11.048.768 3.736 0 7.408-.312 11.056-.768.96-.12 1.904-.296 2.864-.448a84.721 84.721 0 008.152-1.712c.632-.168 1.296-.224 1.928-.408v51.832h-48zm48 16V288h-48v-47.504h48zM288 352H80v-24c0-13.232 10.768-24 24-24h160c13.232 0 24 10.768 24 24v24z"
            />
          </svg>
          <div className="text-gray-600">Gear</div>
        </div>
        <div
          onClick={() => audioRef.current.play()}
          className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600"
        >
          {/* Horn */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368 368"
            className="w-16 h-16"
          >
            <path
              fill="white"
              d="M352 64h-40c-4.424 0-8 3.584-8 8 0 39.696-32.296 72-72 72H131.616C118.4 124.208 96.056 112 72 112c-39.704 0-72 32.304-72 72 0 39.704 32.296 72 72 72 24.088 0 46.456-12.24 59.624-32H152.2c-5.072 6.704-8.2 14.96-8.2 24 0 22.056 17.944 40 40 40s40-17.944 40-40c0-9.04-3.128-17.296-8.208-24H232c39.704 0 72 32.296 72 72 0 4.424 3.576 8 8 8h39.992c8.832 0 16.008-7.176 16.008-16V80c0-8.824-7.176-16-16-16zM120.424 212.024C110.52 229.28 91.968 240 72 240c-30.872 0-56-25.128-56-56 0-30.88 25.128-56 56-56 19.976 0 38.52 10.72 48.472 28.064C125.4 164.416 128 174.072 128 184s-2.6 19.584-7.576 28.024zM139.88 208c.528-1.488.968-3.008 1.392-4.528.088-.312.2-.616.288-.928.712-2.664 1.232-5.384 1.632-8.128.096-.648.176-1.304.248-1.96.336-2.792.56-5.608.56-8.456 0-2.84-.224-5.656-.56-8.448-.08-.664-.16-1.32-.256-1.984-.4-2.728-.912-5.432-1.616-8.08-.096-.352-.224-.696-.32-1.04-.424-1.496-.848-2.984-1.368-4.448H176v48h-36.12zM184 272c-13.232 0-24-10.768-24-24s10.768-24 24-24 24 10.768 24 24-10.768 24-24 24zm167.992 16H319.64c-4.056-44.792-41.808-80-87.64-80h-40v-48h40c45.832 0 83.584-35.208 87.64-80l32.36-.008L351.992 288z"
            />
          </svg>
          <div className="text-gray-600">Horn</div>
        </div>
        <div
          onClick={() => props.setStates("carDoor", !props.cardDoor)}
          className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600"
        >
          {/* Car Door */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368 368"
            className="w-16 h-16"
          >
            <path
              fill="white"
              d="M328 32H103.648a7.99 7.99 0 00-6.664 3.576l-95.648 144A7.984 7.984 0 000 184v112c0 22.056 17.944 40 40 40h240c22.056 0 40-17.944 40-40v-45.904l46.376-61.264c.256-.336.384-.728.576-1.096.16-.304.352-.568.472-.896.352-.904.576-1.856.576-2.84V72c0-22.056-17.944-40-40-40zm24 144H86.76l52.12-80H352v80zm0-96H134.536a8.012 8.012 0 00-6.704 3.632l-62.536 96a8.016 8.016 0 00-.336 8.176A8.017 8.017 0 0072 192h271.912l-38.288 50.576a7.99 7.99 0 00-1.624 4.832V296c0 13.232-10.768 24-24 24H40c-13.232 0-24-10.768-24-24V186.416L107.936 48H328c13.232 0 24 10.768 24 24v8z"
            />
            <path
              fill="white"
              d="M264 224H72c-4.416 0-8 3.584-8 8v48c0 4.416 3.584 8 8 8h192c4.424 0 8-3.584 8-8v-48c0-4.416-3.576-8-8-8zm-8 48H80v-32h176v32z"
            />
          </svg>
          <div className="text-gray-600">Car Door</div>
        </div>
        <div
          onClick={() => {
            if (props.acState) {
              openSnackbar("AC Turned on!");
              props.setStates("acState", false);
            } else {
              openSnackbar("AC Turned off!");
              props.setStates("acState", true);
            }
          }}
          className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600"
        >
          {/* Door */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368 368"
            className="w-16 h-16"
          >
            <path
              fill="white"
              d="M328 64H40C17.944 64 0 81.944 0 104v160c0 22.056 17.944 40 40 40h288c22.056 0 40-17.944 40-40V104c0-22.056-17.944-40-40-40zm-72 224H40c-13.232 0-24-10.768-24-24V104c0-13.232 10.768-24 24-24h216v208zm48 0h-32v-80h32v80zm0-96h-32V80h32v112zm48 72c0 13.232-10.768 24-24 24h-8V80h8c13.232 0 24 10.768 24 24v160z"
            />
            <path
              fill="white"
              d="M215.504 144H56c-4.416 0-8 3.584-8 8s3.584 8 8 8h159.504c4.424 0 8-3.584 8-8s-3.576-8-8-8zM215.504 192H56c-4.416 0-8 3.576-8 8s3.584 8 8 8h159.504c4.424 0 8-3.576 8-8s-3.584-8-8-8zM215.504 240H56c-4.416 0-8 3.576-8 8s3.584 8 8 8h159.504c4.424 0 8-3.576 8-8s-3.584-8-8-8z"
            />
          </svg>
          <div className="text-gray-600">AC</div>
        </div>

        <div
          onClick={handleAcc}
          className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600"
        >
          {/* ACC */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368 368"
            className="w-16 h-16"
          >
            <path
              fill="white"
              d="M232 80c22.056 0 40-17.944 40-40V8c0-4.416-3.584-8-8-8H104c-4.416 0-8 3.584-8 8v32c0 22.056 17.944 40 40 40h8v112h-32-.016c-4.272 0-8.28 1.664-11.304 4.68A15.935 15.935 0 0096 208v144c0 8.824 7.176 16 16 16h144c8.824 0 16-7.176 16-16V208c0-8.824-7.176-16-16.032-16H224V80h8zm24 127.208V352H112V208H152.024c27.688-.008 48.264-.024 63.552-.088.144.016.272.088.424.088.16 0 .296-.08.448-.088 23.336-.096 34.272-.288 39.552-.704zM160 192V80h48v112h-48zM136 64c-13.232 0-24-10.768-24-24V16h144v24c0 13.232-10.768 24-24 24h-96z"
            />
            <path
              fill="white"
              d="M216 240.504h-64c-4.416 0-8 3.584-8 8s3.584 8 8 8h64c4.416 0 8-3.584 8-8s-3.584-8-8-8zM216 304.504h-64c-4.416 0-8 3.584-8 8s3.584 8 8 8h64c4.416 0 8-3.584 8-8s-3.584-8-8-8z"
            />
          </svg>
          <div className="text-gray-600">Acclerator</div>
        </div>

        <div
          onClick={handleBreak}
          className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600 "
        >
          {/* Acc */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 368 368"
            className="w-16 h-16"
          >
            <path
              fill="white"
              d="M248 208H120c-4.416 0-8 3.576-8 8s3.584 8 8 8h128c4.424 0 8-3.576 8-8s-3.576-8-8-8zM248 256H120c-4.416 0-8 3.576-8 8s3.584 8 8 8h128c4.424 0 8-3.576 8-8s-3.576-8-8-8zM248 304H120c-4.416 0-8 3.576-8 8s3.584 8 8 8h128c4.424 0 8-3.576 8-8s-3.576-8-8-8z"
            />
            <path
              fill="white"
              d="M288 160h-64V16h24c4.424 0 8-3.576 8-8s-3.576-8-8-8H120c-4.416 0-8 3.576-8 8s3.584 8 8 8h24v144H80c-8.824 0-16 7.176-16 16v152c0 22.056 17.944 40 40 40h160c22.056 0 40-17.944 40-40V176c0-8.824-7.176-16-16-16zM160 16h48v144h-48V16zm128 312c0 13.232-10.768 24-24 24H104c-13.232 0-24-10.768-24-24V176l71.976-.008c.008 0 .016.008.024.008h64c.016 0 .032-.008.048-.008l71.952-.008V328z"
            />
          </svg>
          <div className="text-gray-600">Brake</div>
        </div>
      </div>

      <div className="flex w-full p-6 w-full">
        <div className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600 w-full">
          <div
            onClick={() => props.setStates("leftLight", !props.leftLight)}
            className="flex items-center justify-start"
          >
            <svg
              height="512"
              viewBox="0 0 513.356 513.356"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <path
                fill="white"
                d="M371.999 133.97c-29.66-29.982-70.296-48.134-115.314-48.134-86.867 0-159.221 69.195-162.124 156.709-1.848 55.723 24.653 107.391 69.448 138.678 3.763 2.849 6.01 7.413 6.01 12.348v33.125c0 47.785 38.876 86.661 86.66 86.661s86.66-38.876 86.66-86.661v-33.271c0-5.006 2.548-9.794 6.814-12.808 81.901-57.838 92.383-175.343 21.846-246.647zm-40.305 220.508c-12.746 9.001-20.355 23.561-20.355 38.947v33.271c0 30.14-24.521 54.661-54.66 54.661s-54.66-24.521-54.66-54.661v-25.879a162.647 162.647 0 0028.616 7.344c8.782 1.421 16.948-4.572 18.351-13.237 1.269-7.835-3.393-15.245-10.675-17.699V275.048c0-10.128 8.24-18.368 18.368-18.368s18.368 8.24 18.368 18.368v53.924c0 8.836 7.163 16 16 16s16-7.164 16-16v-53.924c0-27.773-22.595-50.368-50.368-50.368s-50.368 22.595-50.368 50.368v93.124c-47.917-20.056-81.626-68.53-79.768-124.567 2.325-70.09 60.362-125.77 130.15-125.77 33.884 0 67.168 12.975 92.556 38.639 56.508 57.122 48.361 151.454-17.555 198.004zM59.736 224.68H31.999c-8.837 0-16 7.164-16 16s7.163 16 16 16h27.737c8.837 0 16-7.164 16-16s-7.163-16-16-16zM481.358 224.68h-27.737c-8.837 0-16 7.164-16 16s7.163 16 16 16h27.737c8.837 0 16-7.164 16-16s-7.163-16-16-16zM256.678 59.738c8.837 0 16-7.164 16-16V16c0-8.836-7.163-16-16-16s-16 7.164-16 16v27.738c0 8.836 7.163 16 16 16z"
              />
              <path
                fill="white"
                d="M106.106 368.625l-19.614 19.614c-6.249 6.249-6.249 16.379 0 22.627 6.248 6.249 16.378 6.249 22.627 0l19.614-19.614c6.249-6.249 6.249-16.379 0-22.627-6.247-6.247-16.378-6.247-22.627 0zM395.937 117.421c4.094 0 8.189-1.563 11.313-4.686l19.614-19.613c6.248-6.248 6.249-16.379.001-22.627s-16.378-6.248-22.628 0l-19.614 19.613c-10.112 10.111-2.81 27.313 11.314 27.313zM407.25 368.625c-6.248-6.248-16.379-6.249-22.627 0-6.249 6.249-6.249 16.379 0 22.627l19.614 19.614a15.95 15.95 0 0011.313 4.686c14.126 0 21.422-17.206 11.313-27.314zM106.106 112.735c6.248 6.248 16.378 6.248 22.628 0 6.248-6.249 6.247-16.379-.001-22.627l-19.614-19.613c-6.248-6.248-16.378-6.248-22.628 0-6.248 6.249-6.247 16.379.001 22.627z"
              />
            </svg>
            <div className="text-base text-gray-600 font-semibold ml-4">
              Left
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-gray-800 text-white  rounded-lg m-1 p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-600 w-full">
          <div
            onClick={() => props.setStates("rightLight", !props.rightLight)}
            className="flex items-center justify-end"
          >
            <div className="text-base text-gray-600 font-semibold mr-4">
              Right
            </div>
            <svg
              height="512"
              viewBox="0 0 513.356 513.356"
              width="512"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <path
                fill="white"
                d="M371.999 133.97c-29.66-29.982-70.296-48.134-115.314-48.134-86.867 0-159.221 69.195-162.124 156.709-1.848 55.723 24.653 107.391 69.448 138.678 3.763 2.849 6.01 7.413 6.01 12.348v33.125c0 47.785 38.876 86.661 86.66 86.661s86.66-38.876 86.66-86.661v-33.271c0-5.006 2.548-9.794 6.814-12.808 81.901-57.838 92.383-175.343 21.846-246.647zm-40.305 220.508c-12.746 9.001-20.355 23.561-20.355 38.947v33.271c0 30.14-24.521 54.661-54.66 54.661s-54.66-24.521-54.66-54.661v-25.879a162.647 162.647 0 0028.616 7.344c8.782 1.421 16.948-4.572 18.351-13.237 1.269-7.835-3.393-15.245-10.675-17.699V275.048c0-10.128 8.24-18.368 18.368-18.368s18.368 8.24 18.368 18.368v53.924c0 8.836 7.163 16 16 16s16-7.164 16-16v-53.924c0-27.773-22.595-50.368-50.368-50.368s-50.368 22.595-50.368 50.368v93.124c-47.917-20.056-81.626-68.53-79.768-124.567 2.325-70.09 60.362-125.77 130.15-125.77 33.884 0 67.168 12.975 92.556 38.639 56.508 57.122 48.361 151.454-17.555 198.004zM59.736 224.68H31.999c-8.837 0-16 7.164-16 16s7.163 16 16 16h27.737c8.837 0 16-7.164 16-16s-7.163-16-16-16zM481.358 224.68h-27.737c-8.837 0-16 7.164-16 16s7.163 16 16 16h27.737c8.837 0 16-7.164 16-16s-7.163-16-16-16zM256.678 59.738c8.837 0 16-7.164 16-16V16c0-8.836-7.163-16-16-16s-16 7.164-16 16v27.738c0 8.836 7.163 16 16 16z"
              />
              <path
                fill="white"
                d="M106.106 368.625l-19.614 19.614c-6.249 6.249-6.249 16.379 0 22.627 6.248 6.249 16.378 6.249 22.627 0l19.614-19.614c6.249-6.249 6.249-16.379 0-22.627-6.247-6.247-16.378-6.247-22.627 0zM395.937 117.421c4.094 0 8.189-1.563 11.313-4.686l19.614-19.613c6.248-6.248 6.249-16.379.001-22.627s-16.378-6.248-22.628 0l-19.614 19.613c-10.112 10.111-2.81 27.313 11.314 27.313zM407.25 368.625c-6.248-6.248-16.379-6.249-22.627 0-6.249 6.249-6.249 16.379 0 22.627l19.614 19.614a15.95 15.95 0 0011.313 4.686c14.126 0 21.422-17.206 11.313-27.314zM106.106 112.735c6.248 6.248 16.378 6.248 22.628 0 6.248-6.249 6.247-16.379-.001-22.627l-19.614-19.613c-6.248-6.248-16.378-6.248-22.628 0-6.248 6.249-6.247 16.379.001 22.627z"
              />
            </svg>
          </div>
        </div>
      </div>
      <audio ref={audioRef}>
        <source src={horn} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Menu;
