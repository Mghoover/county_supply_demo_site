import { type FormEvent, useState } from "react";

type NumberField = {
  name: string;
  label: string;
  type: "number";
  min?: number;
  step?: number;
  suffix?: string;
};

type SelectField = {
  name: string;
  label: string;
  type: "select";
  options: { label: string; value: string }[];
};

export type CalculatorField = NumberField | SelectField;

export type MaterialLine = {
  label: string;
  value: string;
};

export type EstimateResult = {
  projectType: string;
  dimensions: string[];
  materials: MaterialLine[];
};

export type CalculatorDefinition = {
  id: string;
  title: string;
  description: string;
  inputs: CalculatorField[];
  estimate: (values: Record<string, string>) => EstimateResult;
};

type CalculatorCardProps = {
  calculator: CalculatorDefinition;
  onEstimate: (result: EstimateResult) => void;
};

const buildInitialState = (fields: CalculatorField[]) =>
  Object.fromEntries(
    fields.map((field) => [
      field.name,
      field.type === "select" ? field.options[0]?.value ?? "" : "",
    ]),
  );

export default function CalculatorCard({
  calculator,
  onEstimate,
}: CalculatorCardProps) {
  const [values, setValues] = useState<Record<string, string>>(
    buildInitialState(calculator.inputs),
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onEstimate(calculator.estimate(values));
  };

  return (
    <article className="calculator-card">
      <div className="calculator-card-header">
        <p className="section-eyebrow">{calculator.title}</p>
        <h3>{calculator.title}</h3>
        <p className="section-description">{calculator.description}</p>
      </div>
      <form className="calculator-form" onSubmit={handleSubmit}>
        {calculator.inputs.map((field) => (
          <label className="estimator-field" key={field.name}>
            <span>{field.label}</span>
            {field.type === "select" ? (
              <select
                value={values[field.name] ?? ""}
                onChange={(event) =>
                  setValues((current) => ({
                    ...current,
                    [field.name]: event.target.value,
                  }))
                }
              >
                {field.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <div className="estimator-input-wrap">
                <input
                  min={field.min ?? 0}
                  required
                  step={field.step ?? 1}
                  type="number"
                  value={values[field.name] ?? ""}
                  onChange={(event) =>
                    setValues((current) => ({
                      ...current,
                      [field.name]: event.target.value,
                    }))
                  }
                />
                {field.suffix && <small>{field.suffix}</small>}
              </div>
            )}
          </label>
        ))}
        <button className="cta-button estimator-submit" type="submit">
          Calculate Materials
        </button>
      </form>
    </article>
  );
}
