import React, { useState } from "react";
import { FlaskConical } from "lucide-react";

import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";
import DrugSelector from "../components/DrugSelector";
import ResultsPanel from "../components/ResultsPanel";
import PharmacogenomicProfile from "../components/PharmacogenomicProfile";
import AIExplanation from "../components/AIExplanation";
import JSONViewer from "../components/JSONViewer";
import LoadingState from "../components/LoadingState";

/* ---------------- MOCK DATA ---------------- */

const MOCK_VARIANTS = [
  { id: "rs1045642", gene: "ABCB1", effect: "Altered drug transport activity" },
  { id: "rs4149056", gene: "SLCO1B1", effect: "Reduced hepatic uptake of statins" },
  { id: "rs9923231", gene: "VKORC1", effect: "Increased warfarin sensitivity" },
  { id: "rs1799853", gene: "CYP2C9", effect: "Poor metabolizer phenotype" },
  { id: "rs4244285", gene: "CYP2C19", effect: "Loss of function allele" },
  { id: "rs28399504", gene: "CYP2D6", effect: "Reduced enzyme activity" },
];

function getMockResults(drugs) {
  return drugs.map((drug) => {
    const risks = {
      Warfarin: {
        risk: "caution",
        rec: "VKORC1 variant detected. Recommend reduced initial dose with frequent INR monitoring.",
      },
      Clopidogrel: {
        risk: "danger",
        rec: "CYP2C19 loss-of-function allele detected. Clopidogrel will have reduced efficacy. Consider alternatives.",
      },
      Codeine: {
        risk: "danger",
        rec: "CYP2D6 reduced activity. Codeine cannot convert to morphine effectively. Choose alternative analgesic.",
      },
      Simvastatin: {
        risk: "caution",
        rec: "SLCO1B1 variant increases risk of statin-induced myopathy. Lower dose recommended.",
      },
    };

    const match = risks[drug];

    if (match) {
      return { drug, risk: match.risk, recommendation: match.rec };
    }

    return {
      drug,
      risk: "safe",
      recommendation: `No significant pharmacogenomic interactions detected for ${drug}. Standard dosing applies.`,
    };
  });
}

const MOCK_EXPLANATION =
  "The CYP2C19 variant reduces clopidogrel activation. CYP2D6 affects opioid metabolism. VKORC1 and CYP2C9 increase warfarin sensitivity, while SLCO1B1 affects statin transport.";

const MOCK_GENES = ["CYP2C19", "CYP2D6", "VKORC1", "CYP2C9", "SLCO1B1", "ABCB1"];

/* ---------------- COMPONENT ---------------- */

function Index() {
  const [file, setFile] = useState(null);
  const [drugs, setDrugs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [analyzed, setAnalyzed] = useState(false);

  const canAnalyze = file && drugs.length > 0 && !loading;

  const handleAnalyze = () => {
    setLoading(true);
    setResults([]);
    setAnalyzed(false);

    setTimeout(() => {
      setResults(getMockResults(drugs));
      setLoading(false);
      setAnalyzed(true);
    }, 3000);
  };

  const jsonData = analyzed
    ? {
        patient_id: "PGX-2024-00847",
        variants_detected: MOCK_VARIANTS.length,
        drugs_analyzed: drugs,
        results: results,
        confidence: 0.94,
      }
    : null;

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            <UploadCard onFileUpload={setFile} />
            <DrugSelector selected={drugs} onChange={setDrugs} />

            <button
              disabled={!canAnalyze}
              onClick={handleAnalyze}
              className="btn-lift w-full py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm disabled:opacity-40 disabled:pointer-events-none transition-all lg:block hidden"
            >
              <span className="flex items-center justify-center gap-2">
                <FlaskConical className="w-4 h-4" />
                Analyze Interactions
              </span>
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-3 space-y-6">
            {loading && <LoadingState />}

            {!loading && !analyzed && (
              <div className="card-medical flex flex-col items-center justify-center py-20 text-center">
                <FlaskConical className="w-8 h-8 text-muted-foreground mb-4" />
                <h3 className="text-sm font-semibold">Ready for Analysis</h3>
                <p className="text-xs text-muted-foreground">
                  Upload genetic file and select drugs.
                </p>
              </div>
            )}

            {!loading && analyzed && (
              <>
                <ResultsPanel results={results} />
                <PharmacogenomicProfile variants={MOCK_VARIANTS} />
                <AIExplanation explanation={MOCK_EXPLANATION} genes={MOCK_GENES} />
                {jsonData && <JSONViewer data={jsonData} />}
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Index;
