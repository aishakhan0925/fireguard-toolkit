
function getAdvice() {
    return {
      bestPractices: [
        "Abstract Firebase-specific code to reduce vendor lock-in.",
        "Use environment variables for configuration.",
        "Document data models and security rules to ease future migrations."
      ],
      checklist: [
        "Review and tighten Firebase Security Rules.",
        "Set up a performance monitoring dashboard.",
        "Prepare a migration plan that decouples business logic from Firebase APIs."
      ]
    };
  }
  
  module.exports = { getAdvice };
  