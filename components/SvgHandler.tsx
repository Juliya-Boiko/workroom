/* eslint-disable max-len */
import { EIconsSet } from '@/typings';

export const SvgHandler = ({ icon }: { icon: EIconsSet }) => {
  if (icon === EIconsSet.ArrowDown) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          d="m12.613 19.79.094-.083 5-5a1 1 0 0 0-1.32-1.497l-.094.083L13 16.585V5a1 1 0 0 0-1.993-.117L11 5v11.585l-3.293-3.292a1 1 0 0 0-1.32-.083l-.094.083a1 1 0 0 0-.083 1.32l.083.094 5 5a1 1 0 0 0 1.32.083Z"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.ArrowUp) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          d="m12.613 4.21.094.083 5 5a1 1 0 0 1-1.32 1.497l-.094-.083L13 7.415V19a1 1 0 0 1-1.993.117L11 19V7.415l-3.293 3.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 5-5a1 1 0 0 1 1.32-.083Z"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Circle) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <circle cx={12} cy={12} r={5} fill="currentColor" />
      </svg>
    );
  }
  if (icon === EIconsSet.Checkbox) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} fill="none">
        <path
          fill="#3F8CFF"
          fillRule="evenodd"
          d="M13.364.879a1 1 0 0 1 .078 1.327l-.078.087-7.071 7.071a1 1 0 0 1-1.327.078l-.087-.078L.636 5.121A1 1 0 0 1 1.963 3.63l.087.078 3.536 3.535L11.95.879A1 1 0 0 1 13.277.8l.087.078Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.ChevronDown) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          d="M16.707 9.293a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1 1.32-1.497l.094.083L12 12.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083Z"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.ArrowRight) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m19.79 11.387-.083-.094-5-5a1 1 0 0 0-1.497 1.32l.083.094L16.585 11H5a1 1 0 0 0-.117 1.993L5 13h11.585l-3.292 3.293a1 1 0 0 0-.083 1.32l.083.094a1 1 0 0 0 1.32.083l.094-.083 5-5a1 1 0 0 0 .083-1.32Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Eye) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="#7D8592"
          fillRule="evenodd"
          d="M12 3C8.62 3 5.661 4.632 3.145 7.316a20.492 20.492 0 0 0-2.25 2.891l-.239.378c-.257.417-.441.75-.55.968a1 1 0 0 0 0 .894l.112.215a20.485 20.485 0 0 0 2.928 4.022C5.66 19.367 8.62 21 12 21c3.38 0 6.339-1.633 8.855-4.316a20.483 20.483 0 0 0 2.25-2.892l.239-.377c.257-.417.441-.75.55-.968a1 1 0 0 0 0-.894l-.111-.215a20.49 20.49 0 0 0-2.928-4.022C18.339 4.632 15.38 3 12 3Zm0 2c2.745 0 5.224 1.368 7.395 3.684a18.518 18.518 0 0 1 2.03 2.609l.146.228.134.219.153.26-.153.26a18.521 18.521 0 0 1-2.31 3.056C17.224 17.632 14.745 19 12 19c-2.745 0-5.224-1.367-7.395-3.684a18.521 18.521 0 0 1-2.03-2.609l-.146-.228-.134-.219L2.14 12l.154-.26a18.517 18.517 0 0 1 2.31-3.056C6.776 6.368 9.255 5 12 5Zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.ArrowLeft) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m4.21 11.387.083-.094 5-5a1 1 0 0 1 1.497 1.32l-.083.094L7.415 11H19a1 1 0 0 1 .117 1.993L19 13H7.415l3.292 3.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.32.083l-.094-.083-5-5a1 1 0 0 1-.083-1.32Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Plus) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12.993 5.883A1 1 0 0 0 11 6v5H6l-.117.007A1 1 0 0 0 6 13h5v5l.007.117A1 1 0 0 0 13 18v-5h5l.117-.007A1 1 0 0 0 18 11h-5V6l-.007-.117Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Settings) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="#0A1629"
          fillRule="evenodd"
          d="M12 0a3 3 0 0 0-3 3v.17l-.007.094a.649.649 0 0 1-.225.397l-.062.044-.06.013a1 1 0 0 0-.13.047.65.65 0 0 1-.717-.13l-.052-.052a3 3 0 0 0-5.124 2.122 3 3 0 0 0 .745 1.978l.195.204c.178.182.23.466.122.71-.116.308-.352.477-.618.483H3a3 3 0 1 0 0 6h.17a.649.649 0 0 1 .59.394.654.654 0 0 1-.125.727l-.052.052a3 3 0 0 0 2.122 5.124 3 3 0 0 0 1.978-.745l.204-.195a.647.647 0 0 1 .71-.122c.308.116.477.352.483.618V21a3 3 0 1 0 6 0v-.17a.649.649 0 0 1 .394-.59.654.654 0 0 1 .727.125l.052.052a3 3 0 0 0 4.38-4.1l-.196-.204a.647.647 0 0 1-.122-.71.654.654 0 0 1 .599-.403H21a3 3 0 1 0 0-6h-.17l-.094-.007a.649.649 0 0 1-.397-.225l-.045-.062-.012-.06a1 1 0 0 0-.047-.13.65.65 0 0 1 .13-.717l.052-.052a3 3 0 0 0-4.1-4.38l-.204.196a.647.647 0 0 1-.71.122.654.654 0 0 1-.403-.599V3a3 3 0 0 0-3-3Zm0 2a1 1 0 0 1 1 1v.09a2.651 2.651 0 0 0 1.606 2.43 2.646 2.646 0 0 0 2.913-.535l.068-.068a1 1 0 1 1 1.416 1.415l-.06.06-.13.143a2.654 2.654 0 0 0-.535 2.433L18.32 9a1 1 0 0 0 .08.394A2.65 2.65 0 0 0 20.827 11H21a1 1 0 1 1 0 2h-.09a2.651 2.651 0 0 0-2.43 1.606 2.646 2.646 0 0 0 .535 2.913l.068.068a1 1 0 1 1-1.415 1.416l-.06-.06a2.654 2.654 0 0 0-2.932-.538 2.646 2.646 0 0 0-1.596 2.421V21a1 1 0 1 1-2 0v-.09a2.66 2.66 0 0 0-1.558-2.376l-.177-.072c-.932-.414-2.09-.204-2.864.553l-.068.068a1 1 0 1 1-1.416-1.415l.06-.06c.765-.783.975-1.94.538-2.932a2.646 2.646 0 0 0-2.421-1.596H3a1 1 0 1 1 0-2h.09a2.66 2.66 0 0 0 2.376-1.558l.073-.177c.413-.932.203-2.09-.554-2.864l-.068-.068a1 1 0 1 1 1.415-1.416l.06.06.143.13a2.654 2.654 0 0 0 2.433.536L9 5.68a1 1 0 0 0 .394-.08A2.65 2.65 0 0 0 11 3.173V3a1 1 0 0 1 1-1Zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Logout) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 2a1 1 0 0 1 .993.883L22 3v18a1 1 0 0 1-.883.993L21 22h-6a1 1 0 0 1-.117-1.993L15 20h5V4h-5a1 1 0 0 1-.993-.883L14 3a1 1 0 0 1 .883-.993L15 2h6ZM10.613 6.21l.094.083 5 5a1 1 0 0 1 .083 1.32l-.083.094-5 5a1 1 0 0 1-1.497-1.32l.083-.094L12.585 13H3a1 1 0 0 1-.117-1.993L3 11h9.585L9.293 7.707a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.218-.153l.102.07Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Dashboard) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6 3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm10 0a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2ZM3 16a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2Zm13-3a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3h-2Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Calendar) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 2a1 1 0 0 1 2 0v1h6V2a1 1 0 1 1 2 0v1a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4V2Zm8 3a1 1 0 1 0 2 0l.15.005A2 2 0 0 1 19 7v1H5V7l.005-.15A2 2 0 0 1 7 5a1 1 0 0 0 2 0h6Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Projects) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M13.042 2.637a2 2 0 0 0-2.084 0l-6.109 3.73c-1.29.787-1.274 2.665.028 3.43l6.132 3.606a2 2 0 0 0 2.032-.002L19.134 9.8c1.299-.768 1.312-2.643.024-3.43l-6.116-3.733Zm6.561 8.834a1 1 0 0 1 1.086 1.676l-.098.063-6.594 3.748a2.906 2.906 0 0 1-2.7.096l-.182-.095-6.517-3.752a1 1 0 0 1 .894-1.785l.104.052 6.514 3.75c.24.137.533.153.788.049l.107-.052 6.598-3.75Zm-.097 3.66a1 1 0 0 1 1.086 1.676l-.098.063-6.594 3.747a2.906 2.906 0 0 1-2.7.097l-.182-.095-6.517-3.752a1 1 0 0 1 .894-1.785l.104.052 6.514 3.75c.24.136.533.153.788.049l.107-.052 6.598-3.75Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Persons) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14.027 8.033a5.665 5.665 0 0 1-2.298 6.364 9.117 9.117 0 0 1 4.298 3.294.755.755 0 0 1-.62 1.191H1.758a.758.758 0 0 1-.62-1.19 9.117 9.117 0 0 1 4.298-3.295A5.665 5.665 0 0 1 3.14 8.033 5.685 5.685 0 0 1 8.583 4a5.685 5.685 0 0 1 5.444 4.033Zm7.446-.725a5.664 5.664 0 0 1-2.017 7.09 9.116 9.116 0 0 1 4.298 3.293.755.755 0 0 1-.62 1.191h-4.239a.758.758 0 0 1-.687-.436 10.592 10.592 0 0 0-2.415-3.3.79.79 0 0 1-.042-.043 10.752 10.752 0 0 0-.83-.682.755.755 0 0 1-.193-1.002 7.154 7.154 0 0 0-.364-8.025.755.755 0 0 1 .403-1.18 5.692 5.692 0 0 1 6.706 3.094Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Bell) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a7.3 7.3 0 0 1 7.296 7.06l.004.241v4.5a1.7 1.7 0 0 0 1.553 1.695l.28.013c1.111.12 1.154 1.731.128 1.965l-.128.021-.133.007H3l-.133-.007c-1.156-.124-1.156-1.862 0-1.986l.28-.013a1.7 1.7 0 0 0 1.547-1.547l.006-.147v-4.5A7.3 7.3 0 0 1 12 2Zm1.557 17.103a1 1 0 0 1 .865 1.502 2.8 2.8 0 0 1-4.844 0 1 1 0 0 1 .752-1.496l.113-.006h3.114ZM6.704 9.083A5.3 5.3 0 0 1 17.3 9.3v4.5l.005.197.023.258c.052.426.176.829.36 1.197l.026.049H6.285l.027-.049.1-.217a3.69 3.69 0 0 0 .288-1.434v-4.5l.004-.22Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Burger) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={14} fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={2}
          d="M1 1h22M1 7h22M1 13h11"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Cross) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M20.106 18.696a1.143 1.143 0 0 0-.001-1.662L14.232 11.5l5.873-5.534c.478-.45.478-1.21.001-1.662l-.065-.062a1.143 1.143 0 0 0-1.57-.001L12.5 9.868 6.528 4.24a1.143 1.143 0 0 0-1.569.001l-.065.062a1.143 1.143 0 0 0 .001 1.662l5.873 5.534-5.873 5.534a1.143 1.143 0 0 0-.001 1.662l.065.062c.44.416 1.129.417 1.57.001l5.971-5.627 5.972 5.627c.44.416 1.129.415 1.569-.001l.065-.062Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.CalendarInput) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16.393 1.883A1 1 0 0 0 14.4 2v1h-5V2l-.007-.117A1 1 0 0 0 7.4 2v1H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.6V2l-.007-.117ZM7.407 5.117 7.4 5H7a2 2 0 0 0-2 2v.5h14V7a2 2 0 0 0-2-2h-.6a1 1 0 0 1-1.993.117L14.4 5h-5a1 1 0 0 1-1.993.117ZM19 9.5H5V17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.5Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.ChevronRight) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M9.293 7.293a1 1 0 0 1 1.32-.083l.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.497-1.32l.083-.094L12.585 12 9.293 8.707a1 1 0 0 1-.083-1.32l.083-.094Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Columns) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 2a1 1 0 0 1 .117 1.993L21 4H3a1 1 0 0 1-.117-1.993L3 2h18Zm-1 5.77v6.46c0 1.53-1.343 2.77-3 2.77h-1c-1.657 0-3-1.24-3-2.77V7.77C13 6.24 14.343 5 16 5h1c1.657 0 3 1.24 3 2.77Zm-2 6.341V7.89C18 7.398 17.552 7 17 7h-1c-.552 0-1 .398-1 .889v6.222c0 .491.448.889 1 .889h1c.552 0 1-.398 1-.889ZM8 5H7C5.343 5 4 6.427 4 8.188v10.624C4 20.573 5.343 22 7 22h1c1.657 0 3-1.427 3-3.188V8.188C11 6.428 9.657 5 8 5ZM7 7h1c.552 0 1 .485 1 1.083v10.834C9 19.515 8.552 20 8 20H7c-.552 0-1-.485-1-1.083V8.083C6 7.485 6.448 7 7 7Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.List) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M21 5a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993L3 5h18Zm0 6a1 1 0 0 1 .117 1.993L21 13H3a1 1 0 0 1-.117-1.993L3 11h18Zm1 7a1 1 0 0 0-1-1H3l-.117.007A1 1 0 0 0 3 19h18l.117-.007A1 1 0 0 0 22 18Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Timeline) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a1 1 0 0 1 .993.883L13 3v1h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-2v2h6a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-6v1a1 1 0 0 1-1.993.117L11 21v-1h-1a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3h1v-2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h6V3a1 1 0 0 1 1-1Zm0 16h7a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2Zm3-9H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Filter) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6 2h11.093a3 3 0 0 1 2.242 4.993l-4.789 5.386v6.385c0 .296-.055.588-.162.863l-.09.202a2.382 2.382 0 0 1-3.195 1.065l-.894-.447a3 3 0 0 1-1.659-2.683V12.38L3.758 6.993a3 3 0 0 1-.75-1.773L3 5a3 3 0 0 1 3-3Zm11.093 2H6a1 1 0 0 0-.747 1.664l5.04 5.672a1 1 0 0 1 .253.664v5.764a1 1 0 0 0 .553.894l.894.448a.382.382 0 0 0 .553-.342V12a1 1 0 0 1 .253-.664l5.041-5.672A1 1 0 0 0 17.093 4Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Pensil) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="m15.879 2.879-8.586 8.585a1 1 0 0 0-.293.708v4a1 1 0 0 0 1 1h4a1 1 0 0 0 .707-.293l8.586-8.586a3 3 0 0 0 0-4.243L20.12 2.88a3 3 0 0 0-4.242 0Zm4 2.585.083.095a1 1 0 0 1-.083 1.32l-8.295 8.293H9v-2.586l8.293-8.293a1 1 0 0 1 1.414 0l1.172 1.171ZM11.03 4.172a1 1 0 0 0-1-1H6l-.217.004A5 5 0 0 0 1 8.172v10l.005.216A5 5 0 0 0 6 23.172h10l.217-.005A5 5 0 0 0 21 18.172v-4.919l-.007-.116a1 1 0 0 0-1.993.116v4.919l-.005.176A3 3 0 0 1 16 21.172H6l-.176-.006A3 3 0 0 1 3 18.172v-10l.005-.177A3 3 0 0 1 6 5.172h4.03l.117-.007a1 1 0 0 0 .884-.993Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Location) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2c-4.426 0-8 3.696-8 8.238 0 2.371 1.798 5.703 5.362 10.154l.31.384a3 3 0 0 0 4.657.006C18.099 16.152 20 12.693 20 10.238 20 5.696 16.426 2 12 2Zm0 2c3.306 0 6 2.786 6 6.238 0 1.845-1.73 4.993-5.222 9.28a1 1 0 0 1-1.552-.001l-.304-.378C7.63 15.03 6 12.01 6 10.24 6 6.785 8.694 4 12 4Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Buildings) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11 2a3 3 0 0 1 2.995 2.824L14 5v3h5a3 3 0 0 1 2.995 2.824L22 11v10a1 1 0 0 1-1.993.117L20 21V11a1 1 0 0 0-.883-.993L19 10h-5v11a1 1 0 0 1-1.993.117L12 21V5a1 1 0 0 0-.883-.993L11 4H5a1 1 0 0 0-.993.883L4 5v16a1 1 0 0 1-1.993.117L2 21V5a3 3 0 0 1 2.824-2.995L5 2h6Zm0 5a1 1 0 0 0-1-1H6l-.117.007A1 1 0 0 0 6 8h4l.117-.007A1 1 0 0 0 11 7Zm-5 6h4a1 1 0 0 1 .117 1.993L10 15H6a1 1 0 0 1-.117-1.993L6 13Zm5 5a1 1 0 0 0-1-1H6l-.117.007A1 1 0 0 0 6 19h4l.117-.007A1 1 0 0 0 11 18Zm7-3a1 1 0 0 1 .117 1.993L18 17h-2a1 1 0 0 1-.117-1.993L16 15h2Zm1-2a1 1 0 0 0-1-1h-2l-.117.007A1 1 0 0 0 16 14h2l.117-.007A1 1 0 0 0 19 13Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Meetings) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="#FDC748"
          fillRule="evenodd"
          d="M9 2a5 5 0 1 0 0 10A5 5 0 0 0 9 2Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm8.995 14.783A5 5 0 0 0 13 14H5l-.217.005A5 5 0 0 0 0 19v2l.007.117A1 1 0 0 0 2 21v-2l.005-.176A3 3 0 0 1 5 16h8l.176.005A3 3 0 0 1 16 19v2l.007.117A1 1 0 0 0 18 21v-2l-.005-.217Zm1.037-3.903a1 1 0 0 1 1.218-.718 5 5 0 0 1 3.745 4.611L24 19v2a1 1 0 0 1-1.993.117L22 21v-2a3 3 0 0 0-2.25-2.902 1 1 0 0 1-.718-1.218ZM16.248 2.161a1 1 0 1 0-.496 1.938 3 3 0 0 1 0 5.812 1 1 0 1 0 .496 1.938 5 5 0 0 0 0-9.688Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Gift) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="#DE92EB"
          fillRule="evenodd"
          d="M12 3.428c.113-.171.237-.326.375-.464A3.296 3.296 0 0 1 17.525 7H19a3 3 0 0 1 3 3v1a3.001 3.001 0 0 1-2 2.83V19a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19v-5.17A3.001 3.001 0 0 1 2 11v-1a3 3 0 0 1 3-3h1.474a3.297 3.297 0 0 1 5.151-4.036c.138.138.262.293.375.464Zm3.621 2.783a1.295 1.295 0 0 0 0-1.832l-.106-.094a1.296 1.296 0 0 0-1.726.094c-.255.254-.493.93-.637 1.83-.03.184-.054.368-.075.547l-.019.184.361-.039.367-.052.355-.063c.732-.147 1.265-.36 1.48-.575ZM13 20h4a1 1 0 0 0 .993-.883L18 19v-5h-5v6Zm-2-6v6H7l-.117-.007A1 1 0 0 1 6 19v-5h5Zm2-2h6a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-6v3Zm-2-3v3H5a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h6Zm-.789-4.621c.215.215.428.748.575 1.48l.063.355.052.367.039.359-.359-.039c-.248-.03-.49-.069-.722-.115-.732-.147-1.265-.36-1.48-.575a1.295 1.295 0 0 1 1.832-1.832Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.CirclesTriangle) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Zm8 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-2 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm8 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM6 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.ClockFilled) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="#7D8592"
          fillRule="evenodd"
          d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.993-11.117A1 1 0 0 0 11 9v3.75l.007.12a1 1 0 0 0 .608.803l3 1.25.11.039a1 1 0 0 0 1.198-.577l.039-.11a1 1 0 0 0-.577-1.198L13 12.083V9l-.007-.117Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.ClockOutlined) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm.993 2.883A1 1 0 0 0 11 7v5.25l.009.13a1 1 0 0 0 .59.786l4 1.75.11.04a1 1 0 0 0 1.207-.555l.04-.11a1 1 0 0 0-.555-1.207L13 11.596V7l-.007-.117Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Upload) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="#3F8CFF"
          fillRule="evenodd"
          d="M22.008 11.136c-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1.465 6.62.792 9.019.615.248 1.413.45 2.33.612.058-.33.198-.653.424-.942l.126-.14 4-4a2 2 0 0 1 2.64-.165l.049.04.139.126 4 4c.363.363.557.83.583 1.305 1.62-.19 2.848-.475 3.319-.836.998-.733.998-2.52.698-3.92ZM16.003 17a1 1 0 0 0 .698-1.707l-4-4-.094-.083a1 1 0 0 0-1.32.083l-4 4-.084.094a.995.995 0 0 0-.193.431l.006.001a.999.999 0 0 0 .277.888l.094.083a.997.997 0 0 0 1.314-.083l2.293-2.292v1.716H11V21l.007.117A1 1 0 0 0 12 22h.003a1 1 0 0 0 .99-1v-6.585l1.715 1.713h.006l.579.58.094.082c.18.14.399.21.616.21Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Picker) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M15.087 2a2.125 2.125 0 0 1 1.832 3.2l-.938 1.6a3 3 0 0 0 .075 3.158L17.52 12.2A2.456 2.456 0 0 1 15.463 16H13v4.6a1 1 0 0 1-1.993.117L11 20.6V16H8.553a2.45 2.45 0 0 1-2.044-3.8l1.52-2.3a3 3 0 0 0 .137-3.078l-.874-1.621A2.17 2.17 0 0 1 9.202 2h5.885ZM12 14h3.463a.457.457 0 0 0 .425-.624l-.043-.082-1.464-2.243a5 5 0 0 1-.244-5.049l.12-.216.938-1.598a.125.125 0 0 0-.069-.182L15.086 4H9.204a.17.17 0 0 0-.169.2l.018.052.875 1.62a5 5 0 0 1-.096 4.917l-.133.213-1.52 2.301a.45.45 0 0 0 .294.69l.08.007H12Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.AttachLink) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="#15C0E6"
          fillRule="evenodd"
          d="M21.128 2.757a6 6 0 0 0-8.41-.073l-1.731 1.72-.084.094a1 1 0 0 0 1.494 1.325l1.72-1.71.165-.15a3.999 3.999 0 0 1 5.432.209 4 4 0 0 1 .049 5.607l-2.988 2.988-.168.158a4 4 0 0 1-5.864-.59 1 1 0 0 0-1.602 1.197 6 6 0 0 0 9.048.649l3-3 .176-.19a6.003 6.003 0 0 0-.237-8.234Zm-6.385 7.578a6 6 0 0 0-4.376-2.391l-.274-.014a6 6 0 0 0-4.398 1.757l-3 3-.176.19a6 6 0 0 0 8.647 8.307l1.723-1.723.083-.095a1 1 0 0 0-1.497-1.32l-1.71 1.71-.164.15a3.998 3.998 0 0 1-5.431-.21 4 4 0 0 1-.049-5.608l2.988-2.987.168-.16a4 4 0 0 1 5.864.591 1 1 0 0 0 1.602-1.197Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.AttachFile) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="#6D5DD3"
          fillRule="evenodd"
          d="M12.241 1.465a5.002 5.002 0 0 1 7.246 6.894l-.172.18-9.2 9.19a3.001 3.001 0 0 1-4.378-4.1l.135-.144 8.49-8.48a1 1 0 0 1 1.496 1.32l-.083.095-8.49 8.48a1.001 1.001 0 0 0 1.322 1.498l.095-.083 9.2-9.19a3.002 3.002 0 0 0-4.103-4.38l-.144.134-9.19 9.19a5.003 5.003 0 0 0 6.895 7.248l.181-.172 9.19-9.19a1 1 0 0 1 1.498 1.32l-.084.094-9.19 9.19A7.003 7.003 0 0 1 2.87 10.844l.182-.189 9.19-9.19Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Dots) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M14 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm0 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-2 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Delete) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="#F65160"
          fillRule="evenodd"
          d="M14 1a3 3 0 0 1 2.995 2.824L17 4v1h4a1 1 0 0 1 .117 1.993L21 7h-1v13a3 3 0 0 1-2.824 2.995L17 23H7a3 3 0 0 1-2.995-2.824L4 20V7H3a1 1 0 0 1-.117-1.993L3 5h4V4a3 3 0 0 1 2.824-2.995L10 1h4ZM6 7v13a1 1 0 0 0 .883.993L7 21h10a1 1 0 0 0 .993-.883L18 20V7H6Zm9-2H9V4l.007-.117A1 1 0 0 1 10 3h4l.117.007A1 1 0 0 1 15 4v1Zm-5 5a1 1 0 0 1 .993.883L11 11v6a1 1 0 0 1-1.993.117L9 17v-6a1 1 0 0 1 1-1Zm4.993.883A1 1 0 0 0 13 11v6l.007.117A1 1 0 0 0 15 17v-6l-.007-.117Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Search) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M11.5 3a8.5 8.5 0 1 0 5.257 15.18l.403.394 3.133 3.133.094.083a1 1 0 0 0 1.32-1.497l-3.14-3.141-.395-.385A8.5 8.5 0 0 0 11.5 3Zm0 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.CrossRound) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill="none">
        <path
          fill="#7D8592"
          fillRule="evenodd"
          d="M9.5 2A7.493 7.493 0 0 0 2 9.5C2 13.648 5.353 17 9.5 17c4.148 0 7.5-3.352 7.5-7.5C17 5.353 13.648 2 9.5 2Zm3.75 10.193-1.057 1.057L9.5 10.557 6.808 13.25 5.75 12.193 8.443 9.5 5.75 6.808 6.808 5.75 9.5 8.443l2.693-2.693 1.057 1.058L10.557 9.5l2.693 2.693Z"
          clipRule="evenodd"
        />
        <mask
          id="a"
          width={15}
          height={15}
          x={2}
          y={2}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: 'luminance',
          }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M9.5 2A7.493 7.493 0 0 0 2 9.5C2 13.648 5.353 17 9.5 17c4.148 0 7.5-3.352 7.5-7.5C17 5.353 13.648 2 9.5 2Zm3.75 10.193-1.057 1.057L9.5 10.557 6.808 13.25 5.75 12.193 8.443 9.5 5.75 6.808 6.808 5.75 9.5 8.443l2.693-2.693 1.057 1.058L10.557 9.5l2.693 2.693Z"
            clipRule="evenodd"
          />
        </mask>
      </svg>
    );
  }
  if (icon === EIconsSet.User) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm8.995 14.783A5 5 0 0 0 16 14H8l-.217.005A5 5 0 0 0 3 19v2l.007.117A1 1 0 0 0 5 21v-2l.005-.176A3 3 0 0 1 8 16h8l.176.005A3 3 0 0 1 19 19v2l.007.117A1 1 0 0 0 21 21v-2l-.005-.217Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Payments) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 4H5a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4Zm2 4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2h18ZM3 10h18v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6Zm16 5a1 1 0 0 0-1-1h-3l-.117.007A1 1 0 0 0 15 16h3l.117-.007A1 1 0 0 0 19 15Zm-7-1a1 1 0 0 1 .117 1.993L12 16h-1a1 1 0 0 1-.117-1.993L11 14h1Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Lock) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17.996 6.234C17.874 3.299 15.213 1 12 1 8.71 1 6 3.41 6 6.444V9a4 4 0 0 0-4 4v5a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-5a4 4 0 0 0-4-4V6.444l-.004-.21ZM16 9V6.444C16 4.57 14.234 3 12 3 9.838 3 8.114 4.47 8.005 6.264L8 6.444V9h8Zm-9 2H6a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H7Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Safety)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19 1H5a4 4 0 0 0-4 4v5c0 4.367 2.66 8.169 7.839 11.38a6 6 0 0 0 6.322 0l.37-.234C20.468 17.983 23 14.26 23 10V5a4 4 0 0 0-4-4ZM5 3h14a2 2 0 0 1 2 2v5c0 3.493-2.136 6.636-6.541 9.458l-.358.225a3.997 3.997 0 0 1-4.209-.003C5.251 16.802 3 13.584 3 10V5a2 2 0 0 1 2-2Zm12.713 3.29a1 1 0 0 0-1.414 0L11 11.585 8.711 9.292l-.094-.083a1 1 0 0 0-1.321 1.496l2.996 3.002.095.083a1 1 0 0 0 1.32-.083l6.006-6.002.083-.095a1 1 0 0 0-.083-1.32Z"
          clipRule="evenodd"
        />
      </svg>
    );
  if (icon === EIconsSet.Info)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm20 0a9 9 0 1 0-18 0 9 9 0 0 0 18 0Zm-9-1a1 1 0 0 1 .993.883L13 12v4a1 1 0 0 1-1.993.117L11 16v-4a1 1 0 0 1 1-1Zm1.01-3a1 1 0 0 0-1-1l-.127.007A1 1 0 0 0 12 9l.127-.007A1 1 0 0 0 13.01 8Z"
          clipRule="evenodd"
        />
      </svg>
    );
  if (icon === EIconsSet.Comment)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22.113 17.142a7.145 7.145 0 0 0 .04-6.822c-1.143-2.141-3.297-3.595-5.756-3.884-1.084-2.47-3.472-4.163-6.218-4.406-2.747-.243-5.409 1.002-6.932 3.243a7.15 7.15 0 0 0-.36 7.484l-.58 1.977c-.13.447-.003.928.334 1.256.337.329.83.453 1.289.326l2.03-.565a7.627 7.627 0 0 0 2.642.811c.827 1.885 2.428 3.345 4.413 4.025a7.68 7.68 0 0 0 6.026-.451l2.03.565c.458.127.951.003 1.288-.326.337-.328.465-.809.334-1.255l-.58-1.978Zm-1.452-.467a.714.714 0 0 0-.076.574l.573 1.956-2.007-.559a.767.767 0 0 0-.59.075 6.14 6.14 0 0 1-4.602.62 5.985 5.985 0 0 1-3.679-2.766 7.538 7.538 0 0 0 5.222-2.882 7.157 7.157 0 0 0 1.376-5.692c1.858.427 3.397 1.691 4.144 3.404a5.718 5.718 0 0 1-.36 5.27Z"
          clipRule="evenodd"
        />
      </svg>
    );
  if (icon === EIconsSet.UserPlus)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.993 1.883A1 1 0 0 0 18 2v2h-2l-.117.007A1 1 0 0 0 16 6h2v2l.007.117A1 1 0 0 0 20 8V6h2l.117-.007A1 1 0 0 0 22 4h-2V2l-.007-.117ZM16.236 14.79c2.327.9 4.323 2.533 5.621 4.696a1 1 0 1 1-1.714 1.03C18.468 17.725 15.364 16 12 16c-3.364 0-6.468 1.724-8.143 4.515a1 1 0 1 1-1.714-1.03c1.344-2.24 3.436-3.91 5.869-4.789-2.402-1.67-3.584-4.678-2.742-7.59 1.044-3.615 4.827-5.776 8.57-4.919a1 1 0 1 1-.446 1.95c-2.72-.623-5.456.94-6.203 3.523-.743 2.572.745 5.26 3.39 6.092 2.66.836 5.522-.507 6.485-3.026a1 1 0 0 1 1.868.714 7.003 7.003 0 0 1-2.698 3.349Z"
          clipRule="evenodd"
        />
      </svg>
    );
  if (icon === EIconsSet.Folder)
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="svg-min-size"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M22.713 9.966a1.524 1.524 0 0 0-1.234-.633h-1.226l-.014-1.073a2 2 0 0 0-2-1.974h-5.764a1 1 0 0 1-.602-.202L9.641 4.403A2 2 0 0 0 8.437 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14.597a2 2 0 0 0 1.897-1.368l2.428-7.293a1.53 1.53 0 0 0-.209-1.373ZM8.257 5.524a1 1 0 0 1 .601.2l2.37 1.78c.264.198.584.305.912.306h5.592a1 1 0 0 1 1 1v.523H6.35a1.52 1.52 0 0 0-1.443 1.042L3.52 14.543v-8.02a1 1 0 0 1 1-1h3.736Z"
          clipRule="evenodd"
        />
      </svg>
    );
  if (icon === EIconsSet.FlagEng)
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#012169" />
        <path d="M3,3 L21,21 M21,3 L3,21" stroke="#FFF" strokeWidth="4" strokeLinecap="round" />
        <path d="M3,3 L21,21 M21,3 L3,21" stroke="#C8102E" strokeWidth="2" strokeLinecap="round" />
        <rect x="8" y="0" width="8" height="24" fill="#FFF" />
        <rect x="0" y="8" width="24" height="8" fill="#FFF" />
        <rect x="9" y="0" width="6" height="24" fill="#C8102E" />
        <rect x="0" y="9" width="24" height="6" fill="#C8102E" />
      </svg>
    );
  if (icon === EIconsSet.FlagUkr)
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#0057B7" />
        <path d="M0,12 h24 a12,12 0 0,1 -24,0" fill="#FFD700" />
      </svg>
    );
};
