# 🚀 Market Trends Analysis API

An intelligent API that helps businesses and entrepreneurs detect emerging markets and trending products by region.

## 🌟 Features

- **Regional Analysis**: Detects specific trends by country/region
- **Categorization**: Organizes products by categories (technology, fashion, home, health, finance)
- **Opportunity Analysis**: Evaluates if a product is trending
- **RESTful API**: Easy-to-use endpoints
- **CORS enabled**: Compatible with web applications

## 🛠️ Installation

1. **Clone or download the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the API**:
   ```bash
   node index.js
   ```

The API will be available at: `http://localhost:3000`

## 📊 Available Endpoints

### 1. Get Trends by Region
```http
GET /api/trends/:region
```

**Example**: `GET /api/trends/united-states`

**Response**:
```json
{
  "success": true,
  "region": "united-states",
  "trends": {
    "technology": ["AI-powered devices", "smart home systems", "electric vehicles"],
    "fashion": ["sustainable fashion", "athleisure wear", "luxury streetwear"],
    "home": ["smart appliances", "modular furniture", "home automation"],
    "health": ["fitness trackers", "organic supplements", "mental health apps"],
    "finance": ["cryptocurrency", "fintech apps", "investment platforms"]
  },
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### 2. Get Trends by Category
```http
GET /api/trends/:region/:category
```

**Example**: `GET /api/trends/united-states/technology`

### 3. Analyze Market Opportunity
```http
POST /api/analyze-opportunity
```

**Body**:
```json
{
  "region": "united-states",
  "product": "AI-powered devices",
  "category": "technology"
}
```

**Response**:
```json
{
  "success": true,
  "analysis": {
    "region": "united-states",
    "product": "AI-powered devices",
    "category": "technology",
    "isTrending": true,
    "opportunityScore": 85,
    "recommendation": "Excellent opportunity! This product is trending.",
    "trendingProducts": ["AI-powered devices", "smart home systems", "electric vehicles"],
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
}
```

### 4. Get Available Regions
```http
GET /api/regions
```

### 5. Get Available Categories
```http
GET /api/categories
```

### 6. API Status
```http
GET /api/status
```

## 🌍 Supported Regions

- **United States** 🇺🇸
- **Canada** 🇨🇦
- **Europe** 🇪🇺
- **Australia** 🇦🇺
- **Asia** 🌏

## 📂 Available Categories

- **Technology** 💻
- **Fashion** 👕
- **Home** 🏠
- **Health** 💊
- **Finance** 💰

## 🧪 Usage Examples

### With cURL

```bash
# Get trends in United States
curl http://localhost:3000/api/trends/united-states

# Analyze market opportunity
curl -X POST http://localhost:3000/api/analyze-opportunity \
  -H "Content-Type: application/json" \
  -d '{"region": "united-states", "product": "AI-powered devices", "category": "technology"}'
```

### With JavaScript (Fetch)

```javascript
// Get trends
fetch('http://localhost:3000/api/trends/united-states')
  .then(response => response.json())
  .then(data => console.log(data));

// Analyze opportunity
fetch('http://localhost:3000/api/analyze-opportunity', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    region: 'united-states',
    product: 'AI-powered devices',
    category: 'technology'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
PORT=3000
NODE_ENV=development
```

## 🚀 Deployment

### Heroku
```bash
heroku create your-market-api
git push heroku main
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Railway
```bash
railway login
railway init
railway up
```

## 📈 Upcoming Improvements

- [ ] Integration with social media APIs (Twitter, Instagram)
- [ ] Product sentiment analysis
- [ ] Future trend predictions
- [ ] Real database (MongoDB/PostgreSQL)
- [ ] Authentication and API keys
- [ ] Web dashboard for visualization
- [ ] Real-time notifications
- [ ] Competitor analysis

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 📞 Support

For technical support or business inquiries:
- Email: support@your-market-api.com
- WhatsApp: +1 234 567 8900

---

**Turn your API into a profitable business!** 💰

This API is designed to be scalable and monetizable. Consider implementing:
- Subscription plans
- API keys for premium access
- Usage limits per plan
- Advanced analytics for premium clients 