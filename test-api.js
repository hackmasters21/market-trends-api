const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Colores para la consola
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function testAPI() {
  log('🧪 Starting Market Analysis API tests...', 'blue');
  log('='.repeat(60), 'blue');

  try {
    // 1. Test API status
    log('\n1️⃣ Testing API status...', 'yellow');
    const statusResponse = await axios.get(`${BASE_URL}/api/status`);
    log('✅ API Status:', 'green');
    console.log(JSON.stringify(statusResponse.data, null, 2));

    // 2. Get available regions
    log('\n2️⃣ Getting available regions...', 'yellow');
    const regionsResponse = await axios.get(`${BASE_URL}/api/regions`);
    log('✅ Available regions:', 'green');
    console.log(JSON.stringify(regionsResponse.data, null, 2));

    // 3. Get available categories
    log('\n3️⃣ Getting available categories...', 'yellow');
    const categoriesResponse = await axios.get(`${BASE_URL}/api/categories`);
    log('✅ Available categories:', 'green');
    console.log(JSON.stringify(categoriesResponse.data, null, 2));

    // 4. Get trends by region
    log('\n4️⃣ Getting trends in United States...', 'yellow');
    const trendsResponse = await axios.get(`${BASE_URL}/api/trends/united-states`);
    log('✅ Trends in United States:', 'green');
    console.log(JSON.stringify(trendsResponse.data, null, 2));

    // 5. Get trends by category
    log('\n5️⃣ Getting technology trends in United States...', 'yellow');
    const techTrendsResponse = await axios.get(`${BASE_URL}/api/trends/united-states/technology`);
    log('✅ Technology trends in United States:', 'green');
    console.log(JSON.stringify(techTrendsResponse.data, null, 2));

    // 6. Analyze market opportunity
    log('\n6️⃣ Analyzing market opportunity...', 'yellow');
    const analysisResponse = await axios.post(`${BASE_URL}/api/analyze-opportunity`, {
      region: 'united-states',
      product: 'AI-powered devices',
      category: 'technology'
    });
    log('✅ Market opportunity analysis:', 'green');
    console.log(JSON.stringify(analysisResponse.data, null, 2));

    // 7. Test with a product not in trend
    log('\n7️⃣ Analyzing non-trending product...', 'yellow');
    const analysisResponse2 = await axios.post(`${BASE_URL}/api/analyze-opportunity`, {
      region: 'united-states',
      product: 'vhs player',
      category: 'technology'
    });
    log('✅ Non-trending product analysis:', 'green');
    console.log(JSON.stringify(analysisResponse2.data, null, 2));

    // 8. Test with another region
    log('\n8️⃣ Getting trends in Europe...', 'yellow');
    const europeResponse = await axios.get(`${BASE_URL}/api/trends/europe`);
    log('✅ Trends in Europe:', 'green');
    console.log(JSON.stringify(europeResponse.data, null, 2));

    // 9. Test finance category
    log('\n9️⃣ Getting finance trends in Asia...', 'yellow');
    const financeResponse = await axios.get(`${BASE_URL}/api/trends/asia/finance`);
    log('✅ Finance trends in Asia:', 'green');
    console.log(JSON.stringify(financeResponse.data, null, 2));

    log('\n🎉 All tests completed successfully!', 'green');
    log('='.repeat(60), 'blue');

  } catch (error) {
    log('\n❌ Error during testing:', 'red');
    if (error.response) {
      log(`Status: ${error.response.status}`, 'red');
      log(`Data: ${JSON.stringify(error.response.data, null, 2)}`, 'red');
    } else {
      log(`Error: ${error.message}`, 'red');
    }
  }
}

// Ejecutar las pruebas
testAPI(); 