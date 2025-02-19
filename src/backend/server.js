
const express = require('express');
const bodyParser = require('body-parser');
const analyzer = require('./analyzer');
const migrationAssistant = require('./migrationAssistant');
const performanceDashboard = require('./performanceDashboard');
require('./firebaseAdmin'); // Initialize Firebase Admin SDK

const app = express();
app.use(bodyParser.json());

// Endpoint to analyze security rules
app.post('/analyze-rules', (req, res) => {
  const { rules } = req.body;
  try {
    const report = analyzer.analyzeRules(rules);
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// Endpoint to fetch performance metrics
app.get('/performance-metrics', async (req, res) => {
  try {
    const metrics = await performanceDashboard.getMetrics();
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

// Endpoint for migration assistant advice
app.get('/migration-assistant', (req, res) => {
  const advice = migrationAssistant.getAdvice();
  res.json(advice);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
