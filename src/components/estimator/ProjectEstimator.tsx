import { useState } from "react";

import CalculatorCard, {
  type CalculatorDefinition,
  type EstimateResult,
} from "./CalculatorCard";
import MaterialResult from "./MaterialResult";
import QuoteLeadForm from "./QuoteLeadForm";

const roundUp = (value: number) => Math.max(1, Math.ceil(value));

const calculators: CalculatorDefinition[] = [
  {
    id: "deck-builder",
    title: "Deck Builder",
    description:
      "Estimate a simple framing and decking package from the deck footprint.",
    inputs: [
      { name: "deckLength", label: "Deck Length", type: "number", min: 6, suffix: "ft" },
      { name: "deckWidth", label: "Deck Width", type: "number", min: 6, suffix: "ft" },
    ],
    estimate: (values) => {
      const deckLength = Number(values.deckLength);
      const deckWidth = Number(values.deckWidth);
      const joists = roundUp((deckLength * 12) / 16) + 1;
      const deckBoards = roundUp((deckWidth * 12) / 5.5) * roundUp(deckLength / 16);
      const footingRows = roundUp(deckLength / 8) + 1;
      const concreteBags = footingRows * 4;
      const joistHangers = Math.max(0, (joists - 2) * 2);
      const fasteners = roundUp((deckLength * deckWidth) / 18);

      return {
        projectType: "Deck Package Estimate",
        dimensions: [`Length: ${deckLength} ft`, `Width: ${deckWidth} ft`],
        materials: [
          { label: "Joists", value: `${joists}` },
          { label: "Deck boards", value: `${deckBoards}` },
          { label: "Concrete bags", value: `${concreteBags}` },
          { label: "Joist hangers", value: `${joistHangers}` },
          { label: "Fasteners", value: `${fasteners} boxes` },
        ],
      };
    },
  },
  {
    id: "fence-builder",
    title: "Fence Builder",
    description:
      "Estimate posts, rails, pickets, and concrete for common fence layouts.",
    inputs: [
      { name: "fenceLength", label: "Fence Length", type: "number", min: 8, suffix: "ft" },
      {
        name: "fenceType",
        label: "Fence Type",
        type: "select",
        options: [
          { label: "Privacy", value: "privacy" },
          { label: "Spaced Picket", value: "spaced-picket" },
          { label: "Board-on-Board", value: "board-on-board" },
        ],
      },
    ],
    estimate: (values) => {
      const fenceLength = Number(values.fenceLength);
      const fenceType = values.fenceType;
      const posts = roundUp(fenceLength / 8) + 1;
      const railsPerSection = fenceType === "board-on-board" ? 4 : 3;
      const picketCoverage = fenceType === "spaced-picket" ? 7 : 5.5;
      const rails = (posts - 1) * railsPerSection;
      const pickets = roundUp((fenceLength * 12) / picketCoverage);
      const concrete = posts * 2;

      return {
        projectType: "Fence Package Estimate",
        dimensions: [
          `Length: ${fenceLength} ft`,
          `Fence type: ${fenceType.replaceAll("-", " ")}`,
        ],
        materials: [
          { label: "Posts", value: `${posts}` },
          { label: "Rails", value: `${rails}` },
          { label: "Pickets", value: `${pickets}` },
          { label: "Concrete", value: `${concrete} bags` },
        ],
      };
    },
  },
  {
    id: "shed-framing",
    title: "Shed Framing Calculator",
    description:
      "Estimate wall framing material counts for a basic rectangular shed shell.",
    inputs: [
      { name: "width", label: "Width", type: "number", min: 6, suffix: "ft" },
      { name: "length", label: "Length", type: "number", min: 6, suffix: "ft" },
      { name: "wallHeight", label: "Wall Height", type: "number", min: 7, suffix: "ft" },
    ],
    estimate: (values) => {
      const width = Number(values.width);
      const length = Number(values.length);
      const wallHeight = Number(values.wallHeight);
      const perimeter = (width + length) * 2;
      const studs = roundUp((perimeter * 12) / 16) + 4;
      const plates = roundUp((perimeter * 3) / 8);
      const sheathingSheets = roundUp((perimeter * wallHeight) / 32);

      return {
        projectType: "Shed Framing Estimate",
        dimensions: [
          `Width: ${width} ft`,
          `Length: ${length} ft`,
          `Wall height: ${wallHeight} ft`,
        ],
        materials: [
          { label: "Studs", value: `${studs}` },
          { label: "Plates", value: `${plates}` },
          { label: "Sheathing sheets", value: `${sheathingSheets}` },
        ],
      };
    },
  },
];

export default function ProjectEstimator() {
  const [activeResult, setActiveResult] = useState<EstimateResult | null>(null);
  const [leadFormOpen, setLeadFormOpen] = useState(false);

  return (
    <div className="project-estimator">
      <div className="estimator-grid">
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.id}
            calculator={calculator}
            onEstimate={(result) => {
              setActiveResult(result);
              setLeadFormOpen(false);
            }}
          />
        ))}
      </div>

      {activeResult && (
        <MaterialResult
          result={activeResult}
          onSend={() => setLeadFormOpen(true)}
        />
      )}

      <QuoteLeadForm
        isOpen={leadFormOpen}
        result={activeResult}
        onClose={() => setLeadFormOpen(false)}
      />
    </div>
  );
}
