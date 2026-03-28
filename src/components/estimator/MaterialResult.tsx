import type { EstimateResult } from "./CalculatorCard";

type MaterialResultProps = {
  result: EstimateResult;
  onSend: () => void;
};

export default function MaterialResult({
  result,
  onSend,
}: MaterialResultProps) {
  return (
    <section className="material-result">
      <div className="material-result-header">
        <p className="section-eyebrow">Estimated Material List</p>
        <h3>{result.projectType}</h3>
        <p className="section-description">{result.dimensions.join(" | ")}</p>
      </div>
      <div className="material-list">
        {result.materials.map((item) => (
          <div className="material-row" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
      <button className="cta-button" type="button" onClick={onSend}>
        Send This Material List to County Supply
      </button>
    </section>
  );
}
