const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Market trends database (in production you would use a real database)
const marketTrends = {
  'united-states': {
    'technology': ['AI-powered devices', 'smart home systems', 'electric vehicles', 'wearable tech', 'gaming consoles'],
    'fashion': ['sustainable fashion', 'athleisure wear', 'luxury streetwear', 'minimalist accessories', 'eco-friendly shoes'],
    'home': ['smart appliances', 'modular furniture', 'home automation', 'sustainable decor', 'outdoor living'],
    'health': ['fitness trackers', 'organic supplements', 'mental health apps', 'plant-based products', 'wellness tech'],
    'finance': ['cryptocurrency', 'fintech apps', 'investment platforms', 'digital banking', 'insurtech']
  },
  'canada': {
    'technology': ['remote work tools', 'cybersecurity solutions', 'green tech', 'AI applications', 'e-commerce platforms'],
    'fashion': ['winter wear', 'sustainable clothing', 'outdoor gear', 'local designers', 'ethical fashion'],
    'home': ['energy-efficient systems', 'smart home security', 'eco-friendly furniture', 'home office solutions'],
    'health': ['telemedicine platforms', 'fitness equipment', 'natural supplements', 'mental wellness', 'health monitoring'],
    'finance': ['digital banking', 'investment apps', 'cryptocurrency', 'fintech solutions', 'insurance tech']
  },
  'europe': {
    'technology': ['green technology', 'digital privacy tools', 'smart cities solutions', 'renewable energy', 'IoT devices'],
    'fashion': ['luxury brands', 'sustainable fashion', 'fast fashion alternatives', 'vintage clothing', 'ethical accessories'],
    'home': ['smart home systems', 'sustainable furniture', 'energy-efficient appliances', 'minimalist design', 'eco-friendly decor'],
    'health': ['wellness apps', 'organic products', 'fitness technology', 'mental health platforms', 'preventive healthcare'],
    'finance': ['digital banking', 'sustainable investing', 'fintech solutions', 'cryptocurrency', 'insurtech']
  },
  'australia': {
    'technology': ['renewable energy tech', 'agricultural technology', 'cybersecurity', 'e-commerce platforms', 'health tech'],
    'fashion': ['beachwear', 'sustainable fashion', 'outdoor clothing', 'local designers', 'ethical accessories'],
    'home': ['smart home systems', 'sustainable building materials', 'outdoor living', 'energy-efficient appliances'],
    'health': ['fitness apps', 'natural supplements', 'mental health platforms', 'wellness technology', 'preventive care'],
    'finance': ['digital banking', 'investment platforms', 'fintech solutions', 'cryptocurrency', 'insurance tech']
  },
  'asia': {
    'technology': ['mobile gaming', 'e-commerce platforms', 'AI and robotics', 'smart city solutions', 'fintech'],
    'fashion': ['streetwear', 'luxury brands', 'fast fashion', 'cosmetics and beauty', 'accessories'],
    'home': ['smart appliances', 'minimalist furniture', 'home automation', 'sustainable decor', 'kitchen tech'],
    'health': ['wellness apps', 'traditional medicine', 'fitness technology', 'beauty tech', 'mental health'],
    'finance': ['mobile payments', 'cryptocurrency', 'investment platforms', 'digital banking', 'insurtech']
  }
};

// Rutas de la API

// 1. Obtener tendencias por región
app.get('/api/trends/:region', (req, res) => {
  const { region } = req.params;
  const regionLower = region.toLowerCase();
  
  if (marketTrends[regionLower]) {
    res.json({
      success: true,
      region: region,
      trends: marketTrends[regionLower],
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Region not found. Available regions: united-states, canada, europe, australia, asia'
    });
  }
});

// 2. Obtener tendencias por categoría y región
app.get('/api/trends/:region/:category', (req, res) => {
  const { region, category } = req.params;
  const regionLower = region.toLowerCase();
  const categoryLower = category.toLowerCase();
  
  if (marketTrends[regionLower] && marketTrends[regionLower][categoryLower]) {
    res.json({
      success: true,
      region: region,
      category: category,
      products: marketTrends[regionLower][categoryLower],
      timestamp: new Date().toISOString()
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Region or category not found'
    });
  }
});

// 3. Analizar oportunidad de mercado
app.post('/api/analyze-opportunity', (req, res) => {
  const { region, product, category } = req.body;
  
  if (!region || !product || !category) {
    return res.status(400).json({
      success: false,
      message: 'Required fields: region, product, category'
    });
  }
  
  const regionLower = region.toLowerCase();
  const categoryLower = category.toLowerCase();
  
  if (!marketTrends[regionLower]) {
    return res.status(404).json({
      success: false,
      message: 'Region not supported'
    });
  }
  
  const trendingProducts = marketTrends[regionLower][categoryLower] || [];
  const isTrending = trendingProducts.some(trend => 
    trend.toLowerCase().includes(product.toLowerCase()) ||
    product.toLowerCase().includes(trend.toLowerCase())
  );
  
  const opportunityScore = isTrending ? 85 : 45;
  const recommendation = isTrending 
    ? 'Excellent opportunity! This product is trending.'
    : 'Product is not currently trending, but may have potential.';
  
  res.json({
    success: true,
    analysis: {
      region,
      product,
      category,
      isTrending,
      opportunityScore,
      recommendation,
      trendingProducts: trendingProducts.slice(0, 5),
      timestamp: new Date().toISOString()
    }
  });
});

// 4. Obtener todas las regiones disponibles
app.get('/api/regions', (req, res) => {
  res.json({
    success: true,
    regions: Object.keys(marketTrends),
    timestamp: new Date().toISOString()
  });
});

// 5. Get all available categories
app.get('/api/categories', (req, res) => {
  const categories = ['technology', 'fashion', 'home', 'health', 'finance'];
  res.json({
    success: true,
    categories,
    timestamp: new Date().toISOString()
  });
});

// 6. API status endpoint
app.get('/api/status', (req, res) => {
  res.json({
    success: true,
    message: 'Market Analysis API is running correctly',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Main route
app.get('/', (req, res) => {
  res.json({
    message: 'Market Trends Analysis API',
    version: '1.0.0',
    description: 'Intelligent API to detect emerging markets and trending products by region',
    endpoints: {
      'GET /api/trends/:region': 'Get trends by region',
      'GET /api/trends/:region/:category': 'Get trends by region and category',
      'POST /api/analyze-opportunity': 'Analyze market opportunity',
      'GET /api/regions': 'Get available regions',
      'GET /api/categories': 'Get available categories',
      'GET /api/status': 'API status'
    },
    example: {
      'GET /api/trends/united-states': 'View trends in United States',
      'POST /api/analyze-opportunity': {
        body: {
          region: 'united-states',
          product: 'AI-powered devices',
          category: 'technology'
        }
      }
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Market Analysis API running on http://localhost:${port}`);
  console.log(`📊 Available endpoints:`);
  console.log(`   GET  /api/trends/:region`);
  console.log(`   GET  /api/trends/:region/:category`);
  console.log(`   POST /api/analyze-opportunity`);
  console.log(`   GET  /api/regions`);
  console.log(`   GET  /api/categories`);
  console.log(`   GET  /api/status`);
}); 