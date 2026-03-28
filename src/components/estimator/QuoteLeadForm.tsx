import { type FormEvent, useEffect, useMemo, useState } from "react";

import type { EstimateResult } from "./CalculatorCard";

type QuoteLeadFormProps = {
  isOpen: boolean;
  result: EstimateResult | null;
  onClose: () => void;
};

const buildProjectNotes = (result: EstimateResult | null) => {
  if (!result) {
    return "";
  }

  const materialLines = result.materials
    .map((item) => `- ${item.label}: ${item.value}`)
    .join("\n");

  return [
    `Project type: ${result.projectType}`,
    `Dimensions: ${result.dimensions.join(", ")}`,
    "Material list:",
    materialLines,
    "",
  ].join("\n");
};

export default function QuoteLeadForm({
  isOpen,
  result,
  onClose,
}: QuoteLeadFormProps) {
  const defaultNotes = useMemo(() => buildProjectNotes(result), [result]);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    projectNotes: defaultNotes,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormState({
      name: "",
      phone: "",
      email: "",
      projectNotes: defaultNotes,
    });
    setSubmitted(false);
  }, [defaultNotes, isOpen]);

  if (!isOpen || !result) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      ...formState,
      projectType: result.projectType,
      dimensions: result.dimensions,
      materialList: result.materials,
    };

    console.log("County Supply quote lead", payload);
    setSubmitted(true);
  };

  return (
    <div className="lead-form-overlay" role="dialog" aria-modal="true">
      <div className="lead-form-panel">
        <div className="lead-form-header">
          <div>
            <p className="section-eyebrow">Send Quote Request</p>
            <h3>{result.projectType}</h3>
          </div>
          <button
            aria-label="Close quote form"
            className="lead-form-close"
            type="button"
            onClick={onClose}
          >
            x
          </button>
        </div>

        <div className="lead-form-prefill">
          <p>
            <strong>Project type:</strong> {result.projectType}
          </p>
          <p>
            <strong>Dimensions:</strong> {result.dimensions.join(", ")}
          </p>
          <div className="material-list compact">
            {result.materials.map((item) => (
              <div className="material-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        {submitted ? (
          <div className="lead-form-success">
            <h4>Quote request logged</h4>
            <p>
              This demo submits to the browser console and shows a success state
              in the UI.
            </p>
            <button className="cta-button" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="lead-form" onSubmit={handleSubmit}>
            <label className="estimator-field">
              <span>Name</span>
              <input
                required
                type="text"
                value={formState.name}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
              />
            </label>
            <label className="estimator-field">
              <span>Phone</span>
              <input
                required
                type="tel"
                value={formState.phone}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    phone: event.target.value,
                  }))
                }
              />
            </label>
            <label className="estimator-field">
              <span>Email</span>
              <input
                required
                type="email"
                value={formState.email}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
              />
            </label>
            <label className="estimator-field estimator-field-full">
              <span>Project Notes</span>
              <textarea
                rows={10}
                value={formState.projectNotes}
                onChange={(event) =>
                  setFormState((current) => ({
                    ...current,
                    projectNotes: event.target.value,
                  }))
                }
              />
            </label>
            <button className="cta-button" type="submit">
              Submit Quote Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
