import type { NicheId } from "@/config/types";

type SceneState = "before" | "after" | "hero";

interface NicheSceneProps {
  niche: NicheId;
  state?: SceneState;
  className?: string;
  title?: string;
  /** Hide the diagram from assistive tech when it is used as decoration. */
  decorative?: boolean;
  /** Hide the state label when a parent already shows before/after badges. */
  showStateLabel?: boolean;
  /** Hide the top system label when a parent overlays its own badges. */
  showHeader?: boolean;
}

const COPY: Record<NicheId, { before: string; after: string }> = {
  hvac: {
    before: "Restricted airflow · blocked filter · uneven cooling",
    after: "Balanced airflow · clear drain · verified cooling",
  },
  plumbing: {
    before: "Weeping joint · pressure loss · water tracking",
    after: "Clean joint · tested pressure · dry surround",
  },
  roofing: {
    before: "Lifted covering · open flashing · water entry",
    after: "Sealed plane · renewed flashing · clear drainage",
  },
  electrician: {
    before: "Loose connection · crowded board · no clear labels",
    after: "Protected circuit · labelled board · tested supply",
  },
  pest: {
    before: "Open entry point · moisture · active trail",
    after: "Sealed perimeter · dry zone · monitored barrier",
  },
};

function Grid() {
  return (
    <g stroke="var(--border)" strokeWidth="1" opacity="0.45">
      {Array.from({ length: 14 }, (_, i) => (
        <line key={`v-${i}`} x1={40 + i * 40} y1="80" x2={40 + i * 40} y2="392" />
      ))}
      {Array.from({ length: 8 }, (_, i) => (
        <line key={`h-${i}`} x1="40" y1={80 + i * 44} x2="600" y2={80 + i * 44} />
      ))}
    </g>
  );
}

function StatusBadge({
  state,
  x,
  y,
}: {
  state: SceneState;
  x: number;
  y: number;
}) {
  const isBefore = state === "before";
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle
        r="15"
        fill={isBefore ? "#FBE1D8" : "var(--brand-soft)"}
        stroke={isBefore ? "#C24122" : "var(--brand)"}
        strokeWidth="2"
      />
      {isBefore ? (
        <path
          d="M0 -6V2M0 7V7.5"
          stroke="#C24122"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M-6 0L-1.5 5L7 -6"
          fill="none"
          stroke="var(--brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </g>
  );
}

function HvacScene({ state }: { state: SceneState }) {
  const good = state !== "before";
  const flow = good ? "var(--brand)" : "#D45736";
  return (
    <g>
      <path
        d="M120 306V196L238 122L356 196V306"
        fill="var(--surface)"
        stroke="var(--ink)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M238 122L238 306" stroke="var(--border)" strokeWidth="2" />
      <rect x="154" y="222" width="104" height="38" rx="8" fill="var(--brand-soft)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M168 238H244M168 246H232" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <rect x="410" y="252" width="112" height="92" rx="12" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2.5" />
      <circle cx="466" cy="298" r="28" fill="none" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M466 280V316M448 298H484M453 285L479 311M479 285L453 311" stroke="var(--ink)" strokeWidth="1.8" opacity="0.7" />
      <path d="M410 276H522" stroke="var(--ink)" strokeWidth="2" opacity="0.5" />
      <rect x="440" y="352" width="52" height="14" rx="4" fill="var(--ink)" opacity="0.1" />
      <path d="M258 230C308 198 350 244 398 214" fill="none" stroke={flow} strokeWidth="4" strokeLinecap="round" />
      <path d="M258 246C312 220 350 262 398 238" fill="none" stroke={flow} strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M258 262C308 242 352 278 398 258" fill="none" stroke={flow} strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
      <circle cx="474" cy="150" r="30" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.5" />
      <text x="474" y="157" textAnchor="middle" fontFamily="var(--font-body)" fontSize="18" fontWeight="700" fill="var(--ink)">
        {good ? "22°" : "29°"}
      </text>
      {good ? (
        <>
          <path d="M474 176V188" stroke="var(--brand)" strokeWidth="2" />
          <path d="M466 182L474 190L482 182" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M462 118L466 130M486 118L482 130M450 136L460 142M498 136L488 142" stroke="#C24122" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      <g fontFamily="var(--font-body)" fontSize="9" fontWeight="600" letterSpacing="1.5" fill="var(--muted)">
        <text x="154" y="286">INDOOR UNIT</text>
        <text x="410" y="238">OUTDOOR UNIT</text>
        <text x="300" y="358">AIRFLOW PATH</text>
      </g>
      <line x1="300" y1="364" x2="300" y2="382" stroke="var(--muted)" strokeWidth="1" />
      <StatusBadge state={state} x={562} y={356} />
    </g>
  );
}

function PlumbingScene({ state }: { state: SceneState }) {
  const good = state !== "before";
  return (
    <g>
      <rect x="110" y="104" width="420" height="266" rx="18" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M110 180H530M250 104V370" stroke="var(--border)" strokeWidth="2" strokeDasharray="6 6" />
      <path d="M204 122V348" stroke={good ? "var(--brand)" : "#A96845"} strokeWidth="15" strokeLinecap="round" />
      <path d="M204 220H344M344 220V286" stroke={good ? "var(--brand)" : "#A96845"} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M204 122V348M204 220H344M344 220V286" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <circle cx="204" cy="190" r="27" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M204 166V214M180 190H228M187 173L221 207M221 173L187 207" stroke="var(--ink)" strokeWidth="2" />
      <rect x="356" y="286" width="96" height="52" rx="10" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M380 286V264H428V286" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M372 314H436" stroke="var(--ink)" strokeWidth="2" opacity="0.5" />
      {good ? (
        <>
          <circle cx="440" cy="150" r="34" fill="var(--surface-2)" stroke="var(--brand)" strokeWidth="3" />
          <path d="M440 150L458 132" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="440" cy="150" r="4" fill="var(--brand)" />
          <text x="440" y="198" textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fontWeight="700" fill="var(--brand)">
            4.2 BAR
          </text>
        </>
      ) : (
        <>
          <path d="M212 226C230 240 236 262 224 280" fill="none" stroke="#2F8EBA" strokeWidth="4" strokeLinecap="round" />
          <path d="M194 232C176 250 180 272 192 286" fill="none" stroke="#2F8EBA" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <ellipse cx="204" cy="352" rx="48" ry="10" fill="#2F8EBA" opacity="0.2" />
          <path d="M204 236L204 250M196 244L204 252L212 244" stroke="#C24122" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
      <g fontFamily="var(--font-body)" fontSize="9" fontWeight="600" letterSpacing="1.5" fill="var(--muted)">
        <text x="148" y="152">SUPPLY</text>
        <text x="214" y="196">VALVE</text>
        <text x="356" y="356">TRAP</text>
      </g>
      <StatusBadge state={state} x={562} y={356} />
    </g>
  );
}

function RoofingScene({ state }: { state: SceneState }) {
  const good = state !== "before";
  return (
    <g>
      <rect x="126" y="262" width="328" height="110" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" />
      <path d="M104 264L290 118L476 264Z" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M150 238L290 144L430 238" fill="none" stroke="var(--ink)" strokeWidth="2" opacity="0.45" />
      <path d="M178 218L290 154L402 218M208 198L290 164L372 198" fill="none" stroke="var(--border)" strokeWidth="2" />
      <rect x="370" y="154" width="38" height="60" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.5" />
      <rect x="192" y="292" width="72" height="54" rx="4" fill="var(--brand-soft)" stroke="var(--ink)" strokeWidth="2" />
      <rect x="330" y="292" width="58" height="80" rx="4" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M106 278H168M338 278H478" stroke={good ? "var(--brand)" : "#C24122"} strokeWidth="5" strokeLinecap="round" />
      <path d="M478 278V320" stroke={good ? "var(--brand)" : "#C24122"} strokeWidth="5" strokeLinecap="round" />
      {good ? (
        <>
          <circle cx="492" cy="146" r="30" fill="var(--surface)" stroke="var(--brand)" strokeWidth="3" />
          <circle cx="492" cy="146" r="14" fill="var(--brand)" opacity="0.2" />
          <path d="M492 118V126M492 166V174M464 146H472M512 146H520M472 126L478 132M506 160L512 166M512 126L506 132M478 160L472 166" stroke="var(--brand)" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M196 336L232 336" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" />
          <path d="M198 330L204 336L198 342" fill="none" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M420 96C420 78 438 68 454 76C462 56 492 58 498 80C520 76 534 94 526 110H420C416 104 416 100 420 96Z" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2" />
          <path d="M446 132L444 150M468 128L462 148M490 130L484 150" stroke="#2F8EBA" strokeWidth="3" strokeLinecap="round" />
          <path d="M406 268L432 280L406 292" fill="none" stroke="#C24122" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M356 268C356 290 374 300 390 300" fill="none" stroke="#2F8EBA" strokeWidth="3" strokeLinecap="round" />
          <rect x="344" y="294" width="34" height="34" rx="6" fill="#FBE1D8" opacity="0.7" />
        </>
      )}
      <g fontFamily="var(--font-body)" fontSize="9" fontWeight="600" letterSpacing="1.5" fill="var(--muted)">
        <text x="126" y="392">DECK + UNDERLAY</text>
        <text x="334" y="254">FLASHING</text>
        <text x="480" y="354">DRAINAGE</text>
      </g>
      <StatusBadge state={state} x={562} y={356} />
    </g>
  );
}

function ElectricianScene({ state }: { state: SceneState }) {
  const good = state !== "before";
  return (
    <g>
      <rect x="112" y="108" width="248" height="264" rx="14" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" />
      <rect x="132" y="128" width="208" height="224" rx="8" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="2" />
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 2 }, (_, col) => (
          <rect
            key={`${row}-${col}`}
            x={148 + col * 92}
            y={148 + row * 32}
            width="72"
            height="18"
            rx="3"
            fill={good ? "var(--ink)" : row === 2 && col === 1 ? "#C24122" : "var(--ink)"}
            opacity={good ? 0.85 : row === 2 && col === 1 ? 0.9 : 0.55}
          />
        )),
      )}
      <path d="M236 352V390M236 390H350M350 390V300" fill="none" stroke={good ? "var(--brand)" : "#A96845"} strokeWidth="5" strokeLinecap="round" />
      <path d="M236 352V390M236 390H350M350 390V300" fill="none" stroke="var(--ink)" strokeWidth="1.5" opacity="0.3" />
      <rect x="386" y="244" width="80" height="96" rx="12" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.5" />
      <circle cx="426" cy="278" r="15" fill="none" stroke="var(--ink)" strokeWidth="2" />
      <path d="M426 278L436 266" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M410 312H440M412 322H438" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <rect x="476" y="156" width="62" height="116" rx="12" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.5" />
      <path d="M492 188H522M492 202H522M492 216H522" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <circle cx="507" cy="248" r="8" fill={good ? "var(--brand)" : "var(--accent)"} />
      {good ? (
        <>
          <path d="M150 148H206M150 180H206M150 212H206M150 244H206M150 276H206M150 308H206" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
          <path d="M470 300L482 312L502 288" fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M418 130L426 142L414 148L422 160" fill="none" stroke="#C24122" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M444 134L438 148L450 156" fill="none" stroke="#C24122" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="426" cy="118" r="12" fill="#FBE1D8" stroke="#C24122" strokeWidth="2" />
          <path d="M426 112V119M426 123V123.5" stroke="#C24122" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      <g fontFamily="var(--font-body)" fontSize="9" fontWeight="600" letterSpacing="1.5" fill="var(--muted)">
        <text x="132" y="104">DISTRIBUTION BOARD</text>
        <text x="386" y="230">OUTLET</text>
        <text x="476" y="142">EV</text>
      </g>
      <StatusBadge state={state} x={562} y={356} />
    </g>
  );
}

function PestScene({ state }: { state: SceneState }) {
  const good = state !== "before";
  return (
    <g>
      <path d="M144 334V224L286 136L428 224V334" fill="var(--surface)" stroke="var(--ink)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M286 136V334" stroke="var(--border)" strokeWidth="2" />
      <rect x="218" y="260" width="44" height="74" rx="4" fill="var(--surface-2)" stroke="var(--ink)" strokeWidth="2" />
      <rect x="330" y="252" width="54" height="42" rx="3" fill="var(--brand-soft)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M112 346H472" stroke="var(--ink)" strokeWidth="4" />
      <path d="M112 366H472" stroke={good ? "var(--brand)" : "var(--accent)"} strokeWidth="10" strokeLinecap="round" opacity="0.35" />
      <path d="M112 382H472" stroke={good ? "var(--brand)" : "var(--accent)"} strokeWidth="2" strokeDasharray="8 8" opacity="0.7" />
      {good ? (
        <>
          <path d="M144 218L174 218M144 238L174 238M144 258L174 258" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <path d="M428 300L458 300M428 320L458 320M428 340L458 340" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          <path d="M500 254L514 254M500 270L514 270M500 286L514 286" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
          <circle cx="492" cy="170" r="30" fill="var(--surface)" stroke="var(--brand)" strokeWidth="3" />
          <path d="M478 170L488 180L508 156" fill="none" stroke="var(--brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <path d="M112 366H248M292 366H472" stroke="var(--accent)" strokeWidth="10" strokeLinecap="round" opacity="0.35" />
          <path d="M248 352L248 380M292 352L292 380" stroke="#C24122" strokeWidth="4" strokeLinecap="round" />
          <path d="M236 302L254 302M236 312L254 312M236 322L254 322" stroke="#C24122" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
          <circle cx="262" cy="306" r="4" fill="var(--ink)" />
          <circle cx="276" cy="316" r="4" fill="var(--ink)" />
          <circle cx="290" cy="306" r="4" fill="var(--ink)" />
          <path d="M262 302L260 296M276 312L280 306M290 302L294 296" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
          <path d="M440 300L452 312L466 294" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
        </>
      )}
      <g fontFamily="var(--font-body)" fontSize="9" fontWeight="600" letterSpacing="1.5" fill="var(--muted)">
        <text x="144" y="210">PROPERTY</text>
        <text x="112" y="410">PERIMETER BARRIER</text>
        <text x="400" y="238">ENTRY</text>
      </g>
      <StatusBadge state={state} x={562} y={356} />
    </g>
  );
}

const SCENES: Record<NicheId, (props: { state: SceneState }) => React.JSX.Element> =
  {
    hvac: HvacScene,
    plumbing: PlumbingScene,
    roofing: RoofingScene,
    electrician: ElectricianScene,
    pest: PestScene,
  };

export function NicheScene({
  niche,
  state = "hero",
  className,
  title,
  decorative = false,
  showStateLabel = true,
  showHeader = true,
}: NicheSceneProps) {
  const Scene = SCENES[niche];
  const copy = COPY[niche];
  const resolvedState = state === "hero" ? "after" : state;
  const label = state === "before" ? "BEFORE" : "AFTER";
  const caption = state === "before" ? copy.before : copy.after;

  return (
    <svg
      viewBox="0 0 640 480"
      className={className}
      role={decorative ? "presentation" : "img"}
      aria-label={
        decorative
          ? undefined
          : (title ??
            `${niche} system diagram, ${state === "before" ? "before" : "after"} view`)
      }
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <title>{title ?? `${niche} system diagram — ${label.toLowerCase()}`}</title>
      <rect width="640" height="480" rx="28" fill="var(--surface)" />
      <rect
        x="16"
        y="16"
        width="608"
        height="448"
        rx="20"
        fill="var(--surface-2)"
        opacity="0.55"
      />
      <Grid />
      {showHeader ? (
        <text
          x="40"
          y="52"
          fontFamily="var(--font-body)"
          fontSize="10"
          fontWeight="700"
          letterSpacing="2"
          fill="var(--muted)"
        >
          SYSTEM VIEW · {niche.toUpperCase()}
        </text>
      ) : null}
      {showStateLabel ? (
        <text
          x="600"
          y="52"
          textAnchor="end"
          fontFamily="var(--font-body)"
          fontSize="10"
          fontWeight="700"
          letterSpacing="2"
          fill={resolvedState === "before" ? "#C24122" : "var(--brand)"}
        >
          {label}
        </text>
      ) : null}
      <Scene state={resolvedState} />
      <line x1="40" y1="404" x2="600" y2="404" stroke="var(--border)" strokeWidth="1" />
      <text
        x="40"
        y="432"
        fontFamily="var(--font-body)"
        fontSize="11"
        fontWeight="600"
        fill="var(--muted)"
      >
        {caption}
      </text>
      <text
        x="40"
        y="450"
        fontFamily="var(--font-body)"
        fontSize="8"
        letterSpacing="1.5"
        fill="var(--muted)"
        opacity="0.7"
      >
        ILLUSTRATIVE DEMO DIAGRAM
      </text>
    </svg>
  );
}
