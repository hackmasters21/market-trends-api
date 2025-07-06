# Market Analysis API - RapidAPI Documentation

## API Overview
Professional market trends analysis API for high-value English-speaking markets (US, Canada, Europe, Australia, Asia). Provides real-time market insights, trend detection, and opportunity analysis.

## Base URL
`https://your-railway-app.railway.app`

## Authentication
All requests require an API key in the header:
```
X-RapidAPI-Key: YOUR_API_KEY
```

---

## Endpoints Documentation

### 1. Get Market Trends by Region
**GET** `/api/trends/:region`

Get trending products and market insights for a specific region.

**Parameters:**
- `region` (path, required): Target market region
  - Valid values: `us`, `canada`, `europe`, `australia`, `asia`

**Response Example:**
```json
{
  "success": true,
  "region": "us",
  "data": {
    "trending_products": [
      {
        "name": "Smart Home Devices",
        "growth_rate": 45.2,
        "market_size": "2.3B",
        "opportunity_score": 8.5
      }
    ],
    "market_insights": {
      "total_opportunities": 12,
      "avg_growth_rate": 32.1,
      "top_categories": ["Technology", "Health", "Fashion"]
    }
  }
}
```

**Code Examples:**

**JavaScript/Node.js:**
```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://your-railway-app.railway.app/api/trends/us',
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'your-railway-app.railway.app'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

**Python:**
```python
import requests

url = "https://your-railway-app.railway.app/api/trends/us"
headers = {
    "X-RapidAPI-Key": "YOUR_API_KEY",
    "X-RapidAPI-Host": "your-railway-app.railway.app"
}

response = requests.get(url, headers=headers)
print(response.json())
```

**PHP:**
```php
<?php
$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://your-railway-app.railway.app/api/trends/us",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_HTTPHEADER => [
    "X-RapidAPI-Key: YOUR_API_KEY",
    "X-RapidAPI-Host: your-railway-app.railway.app"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
?>
```

**cURL:**
```bash
curl --request GET \
  --url 'https://your-railway-app.railway.app/api/trends/us' \
  --header 'X-RapidAPI-Key: YOUR_API_KEY' \
  --header 'X-RapidAPI-Host: your-railway-app.railway.app'
```

---

### 2. Get Market Trends by Region and Category
**GET** `/api/trends/:region/:category`

Get detailed trends for a specific category within a region.

**Parameters:**
- `region` (path, required): Target market region
- `category` (path, required): Product category
  - Valid values: `technology`, `health`, `fashion`, `home`, `food`, `entertainment`

**Response Example:**
```json
{
  "success": true,
  "region": "us",
  "category": "technology",
  "data": {
    "category_trends": {
      "growth_rate": 38.5,
      "market_size": "1.8B",
      "competition_level": "Medium",
      "entry_barriers": "Low"
    },
    "top_products": [
      {
        "name": "AI-Powered Devices",
        "demand_score": 9.2,
        "profit_margin": 65.0
      }
    ],
    "recommendations": [
      "Focus on AI integration",
      "Target early adopters",
      "Consider subscription models"
    ]
  }
}
```

**Code Examples:**

**JavaScript/Node.js:**
```javascript
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://your-railway-app.railway.app/api/trends/us/technology',
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'your-railway-app.railway.app'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

---

### 3. Analyze Market Opportunity
**POST** `/api/analyze-opportunity`

Analyze a specific product or business opportunity.

**Request Body:**
```json
{
  "product_name": "Smart Fitness Tracker",
  "target_region": "us",
  "category": "health",
  "investment_amount": 50000,
  "business_model": "ecommerce"
}
```

**Response Example:**
```json
{
  "success": true,
  "analysis": {
    "opportunity_score": 8.7,
    "risk_level": "Low",
    "estimated_roi": 245.0,
    "time_to_market": "3-6 months",
    "key_factors": {
      "market_demand": "High",
      "competition": "Medium",
      "profit_potential": "Excellent",
      "scalability": "High"
    },
    "recommendations": [
      "Focus on health-conscious consumers",
      "Integrate with popular fitness apps",
      "Consider subscription model for premium features"
    ],
    "market_data": {
      "total_addressable_market": "4.2B",
      "serviceable_market": "850M",
      "growth_rate": 28.3
    }
  }
}
```

**Code Examples:**

**JavaScript/Node.js:**
```javascript
const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://your-railway-app.railway.app/api/analyze-opportunity',
  headers: {
    'X-RapidAPI-Key': 'YOUR_API_KEY',
    'X-RapidAPI-Host': 'your-railway-app.railway.app',
    'Content-Type': 'application/json'
  },
  data: {
    product_name: "Smart Fitness Tracker",
    target_region: "us",
    category: "health",
    investment_amount: 50000,
    business_model: "ecommerce"
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
```

---

### 4. Get Available Regions
**GET** `/api/regions`

Get list of all supported regions.

**Response Example:**
```json
{
  "success": true,
  "regions": [
    {
      "code": "us",
      "name": "United States",
      "market_size": "25.3T",
      "growth_rate": 2.1
    },
    {
      "code": "canada",
      "name": "Canada",
      "market_size": "2.1T",
      "growth_rate": 1.8
    }
  ]
}
```

---

### 5. Get Available Categories
**GET** `/api/categories`

Get list of all supported product categories.

**Response Example:**
```json
{
  "success": true,
  "categories": [
    {
      "code": "technology",
      "name": "Technology",
      "growth_rate": 15.2,
      "market_size": "3.2T"
    },
    {
      "code": "health",
      "name": "Health & Wellness",
      "growth_rate": 12.8,
      "market_size": "1.8T"
    }
  ]
}
```

---

### 6. API Status
**GET** `/api/status`

Check API health and status.

**Response Example:**
```json
{
  "success": true,
  "status": "operational",
  "uptime": 99.8,
  "response_time": "45ms",
  "version": "1.0.0"
}
```

---

## Pricing Plans

### Free Plan
- **Price:** $0/month
- **Requests:** 100/month
- **Features:**
  - Basic trend analysis
  - Standard response times
  - Community support

### Basic Plan
- **Price:** $9.99/month
- **Requests:** 1,000/month
- **Features:**
  - All endpoints access
  - Faster response times
  - Email support
  - Detailed analytics

### Pro Plan
- **Price:** $29.99/month
- **Requests:** 10,000/month
- **Features:**
  - Unlimited access
  - Priority support
  - Advanced analytics
  - Custom integrations
  - API key management

### Enterprise Plan
- **Price:** Custom pricing
- **Requests:** Unlimited
- **Features:**
  - Dedicated support
  - Custom endpoints
  - White-label solutions
  - SLA guarantees

---

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Invalid API key |
| 403 | Forbidden - Rate limit exceeded |
| 404 | Not Found - Endpoint or resource not found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Internal Server Error |

---

## Use Cases

1. **E-commerce Businesses:** Identify trending products and market opportunities
2. **Startups:** Validate business ideas and market potential
3. **Investors:** Analyze market trends for investment decisions
4. **Consultants:** Provide data-driven market insights to clients
5. **Researchers:** Access market data for academic or commercial research

---

## Support

- **Documentation:** Complete API documentation with examples
- **Email Support:** support@your-api.com
- **Response Time:** Within 24 hours
- **Uptime:** 99.9% guaranteed 