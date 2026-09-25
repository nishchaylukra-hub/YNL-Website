import { GOLD } from "./tokens";

// The brand's survey-sheet motif: hairline plot boundaries drawn like a land-records map,
// a nod to the firm's start in agriculture land. Illustrative only — not a real parcel.
export function SurveyPlate() {
  const plot = { stroke: GOLD, strokeOpacity: 0.55 };
  return (
    <figure
      style={{
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        padding: "clamp(16px, 1.5vw, 22px)",
        border: "1px solid rgba(201,162,39,.38)",
        background: "#17160F",
      }}
    >
      <div style={plateCaption(GOLD)}>
        <span>Sheet 01</span>
        <span>Faridabad, Haryana</span>
      </div>
      <svg
        viewBox="0 0 560 640"
        width="100%"
        className="plate-svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: "block" }}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 40 L44 34 M8 62 L46 56 M8 84 L48 78 M8 106 L50 100 M8 128 L50 122 M8 150 L48 144 M8 172 L46 166 M8 194 L44 188 M8 216 L44 210 M8 238 L46 232 M8 260 L50 254 M8 282 L52 276 M8 304 L54 298 M8 326 L56 320 M8 348 L58 342 M8 370 L60 364"
          stroke={GOLD}
          strokeOpacity={0.28}
        />
        <path d="M62 0 C 122 160, 42 300, 132 640" stroke={GOLD} strokeOpacity={0.6} strokeDasharray="2 6" />
        <path d="M76 0 C 136 160, 56 300, 146 640" stroke={GOLD} strokeOpacity={0.6} strokeDasharray="2 6" />
        <path d="M0 420 L560 300 M0 444 L560 324" stroke={GOLD} strokeOpacity={0.75} />
        <polygon points="150,40 330,30 340,170 160,190" {...plot} />
        <polygon points="330,30 520,50 510,150 340,170" {...plot} />
        <polygon points="160,190 340,170 350,338 170,378" {...plot} />
        <polygon points="340,170 510,150 530,302 350,338" stroke={GOLD} strokeWidth={1.6} fill={GOLD} fillOpacity={0.16} />
        <polygon points="150,452 300,408 320,600 160,620" {...plot} />
        <polygon points="300,408 540,356 545,560 320,600" {...plot} />
        <path d="M245 30 L250 186 M300 408 L310 600" stroke={GOLD} strokeOpacity={0.3} strokeDasharray="4 4" />
        <g fontFamily="var(--font-jost), sans-serif" fontSize={11} letterSpacing={2} fill={GOLD}>
          <text x={190} y={112} fillOpacity={0.7}>01</text>
          <text x={275} y={112} fillOpacity={0.7}>02</text>
          <text x={415} y={104} fillOpacity={0.7}>03</text>
          <text x={245} y={276} fillOpacity={0.7}>04</text>
          <text x={418} y={246}>05 · HELD</text>
          <text x={222} y={524} fillOpacity={0.7}>06</text>
          <text x={420} y={486} fillOpacity={0.7}>07</text>
          <text transform="translate(196 404) rotate(-12.1)" fillOpacity={0.85} letterSpacing={6}>SECTOR ROAD</text>
          <text transform="translate(96 250) rotate(-80)" fillOpacity={0.6} letterSpacing={5}>CANAL</text>
        </g>
        <path d="M516 624 L516 584 M510 594 L516 584 L522 594" stroke={GOLD} />
        <text x={511} y={576} fontFamily="var(--font-jost), sans-serif" fontSize={11} fill={GOLD}>N</text>
      </svg>
      <figcaption style={plateCaption("rgba(247,244,238,.55)")}>
        <span>28°24′ N · 77°19′ E</span>
        <span>Not to scale</span>
      </figcaption>
    </figure>
  );
}

function plateCaption(color: string) {
  return {
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    fontSize: 10,
    letterSpacing: ".3em",
    textTransform: "uppercase" as const,
    color,
  };
}
