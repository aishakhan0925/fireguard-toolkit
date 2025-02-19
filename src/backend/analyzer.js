
function analyzeRules(rulesText) {
    const vulnerabilities = [];
  
    // Example check: flag overly permissive read/write rules
    if (/allow\s+read\s*:\s*if\s+true/i.test(rulesText)) {
      vulnerabilities.push("Insecure read rule detected: 'allow read: if true'");
    }
    if (/allow\s+write\s*:\s*if\s+true/i.test(rulesText)) {
      vulnerabilities.push("Insecure write rule detected: 'allow write: if true'");
    }
    // Additional static analysis checks can be added here
  
    return {
      vulnerabilities,
      recommendations:
        vulnerabilities.length > 0
          ? "Review the flagged rules and tighten conditions. Consider following Firebase best practices."
          : "No obvious vulnerabilities detected."
    };
  }
  
  module.exports = { analyzeRules };
  