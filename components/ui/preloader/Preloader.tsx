import styles from './preloader.module.scss';

export const Preloader = () => (
  <svg
    width={128}
    height={128}
    // eslint-disable-next-line max-len
    aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00"
    className={styles.smiley}
  >
    <defs>
      <linearGradient id="a" x1={0} x2={0} y1={0} y2={1}>
        <stop offset="0%" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
      <clipPath id="b">
        <circle
          cx={64}
          cy={64}
          r={8}
          className={styles.smiley__eye1}
          transform="rotate(-40 -12.93 92)"
        />
        <circle
          cx={64}
          cy={64}
          r={8}
          className={styles.smiley__eye2}
          transform="rotate(40 140.93 92)"
        />
      </clipPath>
      <mask id="c">
        <path fill="url(#a)" d="M0 0h128v128H0z" />
      </mask>
    </defs>
    <g strokeDasharray="175.93 351.86" strokeLinecap="round" strokeWidth={12}>
      <path fill="hsl(193,90%,50%)" d="M0 0h128v64H0z" clipPath="url(#b)" />
      <g fill="none" stroke="hsl(193,90%,50%)">
        <circle
          cx={64}
          cy={64}
          r={56}
          className={styles.smiley__mouth1}
          transform="rotate(180 64 64)"
        />
        <circle cx={64} cy={64} r={56} className={styles.smiley__mouth2} />
      </g>
      <g mask="url(#c)">
        <path fill="hsl(223,90%,50%)" d="M0 0h128v64H0z" clipPath="url(#b)" />
        <g fill="none" stroke="hsl(223,90%,50%)">
          <circle
            cx={64}
            cy={64}
            r={56}
            className={styles.smiley__mouth1}
            transform="rotate(180 64 64)"
          />
          <circle cx={64} cy={64} r={56} className={styles.smiley__mouth2} />
        </g>
      </g>
    </g>
  </svg>
);
