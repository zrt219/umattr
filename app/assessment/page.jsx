import AssessmentClient from "./assessment-client";

export const metadata = {
  title: "UMATTR Assessment",
  description:
    "A short multiple-choice assessment that routes you to the right UMATTR Payhip path.",
};

export default function AssessmentPage() {
  return <AssessmentClient />;
}
