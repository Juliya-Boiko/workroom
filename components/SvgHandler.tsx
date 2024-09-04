/* eslint-disable max-len */
import { EIconsSet } from '@/typings';

export const SvgHandler = ({ icon }: { icon: EIconsSet }) => {
  if (icon === EIconsSet.ArrowDown) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="currentColor"
          d="m12.613 19.79.094-.083 5-5a1 1 0 0 0-1.32-1.497l-.094.083L13 16.585V5a1 1 0 0 0-1.993-.117L11 5v11.585l-3.293-3.292a1 1 0 0 0-1.32-.083l-.094.083a1 1 0 0 0-.083 1.32l.083.094 5 5a1 1 0 0 0 1.32.083Z"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.ArrowUp) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="currentColor"
          d="m12.613 4.21.094.083 5 5a1 1 0 0 1-1.32 1.497l-.094-.083L13 7.415V19a1 1 0 0 1-1.993.117L11 19V7.415l-3.293 3.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 5-5a1 1 0 0 1 1.32-.083Z"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Circle) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="currentColor"
          d="M16.707 9.293a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1 1.32-1.497l.094.083L12 12.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083Z"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.ArrowRight) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="#3F8CFF"
          fillRule="evenodd"
          d="M11 2a3 3 0 0 1 2.995 2.824L14 5v3h5a3 3 0 0 1 2.995 2.824L22 11v10a1 1 0 0 1-1.993.117L20 21V11a1 1 0 0 0-.883-.993L19 10h-5v11a1 1 0 0 1-1.993.117L12 21V5a1 1 0 0 0-.883-.993L11 4H5a1 1 0 0 0-.993.883L4 5v16a1 1 0 0 1-1.993.117L2 21V5a3 3 0 0 1 2.824-2.995L5 2h6Zm0 5a1 1 0 0 0-1-1H6l-.117.007A1 1 0 0 0 6 8h4l.117-.007A1 1 0 0 0 11 7Zm-5 6h4a1 1 0 0 1 .117 1.993L10 15H6a1 1 0 0 1-.117-1.993L6 13Zm5 5a1 1 0 0 0-1-1H6l-.117.007A1 1 0 0 0 6 19h4l.117-.007A1 1 0 0 0 11 18Zm7-3a1 1 0 0 1 .117 1.993L18 17h-2a1 1 0 0 1-.117-1.993L16 15h2Zm1-2a1 1 0 0 0-1-1h-2l-.117.007A1 1 0 0 0 16 14h2l.117-.007A1 1 0 0 0 19 13Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
  if (icon === EIconsSet.Meetings) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
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
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <path
          fill="#6D5DD3"
          fillRule="evenodd"
          d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Zm8 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-2 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm8 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0ZM6 12a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
};
